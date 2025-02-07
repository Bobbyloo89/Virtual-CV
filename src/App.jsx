

import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";


function App() {
  const darkMode = useSelector((state) => state.theme.darkMode); // Retrieve the current theme state (darkmode) from the Redux store

  return (
    <LanguageProvider>
    <div className={`appContainer ${darkMode ? "dark-mode" : ""}`}> {/* Apply a dynamic class based on the darkmode state */}
      <Router> {/* Wrap the application in a Router to enable client-side routing */}
        <Navbar /> {/* Navbar component displayed on all pages/views */}
        <main>
          <Routes> {/* Define the routes for different pages/views */}
            <Route path="/" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </div>
    </LanguageProvider>
  );
}

export default App;