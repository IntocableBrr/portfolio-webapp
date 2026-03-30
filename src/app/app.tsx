// Uncomment this line to use CSS modules
// import styles from './app.module.scss';

import { Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import HomePage from './pages/home/home';
import ProjectsPage from './pages/projects/projects';

export function App() {
      
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}

export default App;
