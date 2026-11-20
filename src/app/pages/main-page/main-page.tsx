import { useCallback, useRef, useState } from 'react';
import { AppHeader, type SectionId } from '../../components';
import { AboutSection, ContactSection, HeroSection, WorkSection } from './sections';
import styles from './main-page.module.scss';

const sectionOrder: SectionId[] = ['home', 'work', 'about', 'contact'];

const MainPage = () => {
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
      <AppHeader activeSection={activeSection} onNavigate={navigateToSection} />
      <main
        ref={scrollerRef}
        className={styles.sectionScroller}
        onScroll={updateActiveSection}
        aria-label="Portfolio sections"
      >
        <HeroSection onNavigate={navigateToSection} />
        <WorkSection onNavigate={navigateToSection} />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default MainPage;
