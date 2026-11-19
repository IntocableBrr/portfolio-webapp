import { useCallback, useRef, useState } from 'react';
import Header, { type SectionId } from '../../components/header/header';
import AboutSection from '../../components/about-section/about-section';
import ContactSection from '../../components/contact-section/contact-section';
import HomeHero from '../../components/home-hero/home-hero';
import WorkSection from '../../components/work-section/work-section';
import styles from './home.module.scss';

const sectionOrder: SectionId[] = ['home', 'work', 'about', 'contact'];

const HomePage = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  const updateActiveSection = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const scrollport = scroller.getBoundingClientRect();
    const center = scrollport.top + scrollport.height / 2;
    const sections = Array.from(
      scroller.querySelectorAll<HTMLElement>('[data-section-id]')
    );

    const nearestSection = sections.reduce<HTMLElement | null>((nearest, section) => {
      if (!nearest) return section;
      const sectionCenter = section.getBoundingClientRect().top + section.getBoundingClientRect().height / 2;
      const nearestCenter = nearest.getBoundingClientRect().top + nearest.getBoundingClientRect().height / 2;
      return Math.abs(sectionCenter - center) < Math.abs(nearestCenter - center)
        ? section
        : nearest;
    }, null);

    const sectionId = nearestSection?.dataset.sectionId as SectionId | undefined;
    if (sectionId && sectionOrder.includes(sectionId)) {
      setActiveSection(sectionId);
    }
  }, []);

  const navigateToSection = useCallback(
    (sectionId: SectionId) => {
      if (activeSection === sectionId) return;

      const scroller = scrollerRef.current;
      const section = scroller?.querySelector<HTMLElement>(`#${sectionId}`);
      if (!scroller || !section) return;

      const top =
        section.getBoundingClientRect().top -
        scroller.getBoundingClientRect().top +
        scroller.scrollTop;

      scroller.scrollTo({ top, behavior: 'smooth' });
    },
    [activeSection]
  );

  return (
    <div className={styles.appShell}>
      <Header activeSection={activeSection} onNavigate={navigateToSection} />
      <main
        ref={scrollerRef}
        className={styles.sectionScroller}
        onScroll={updateActiveSection}
        aria-label="Portfolio sections"
      >
        <HomeHero onNavigate={navigateToSection} />
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default HomePage;
