

import { useLanguage } from "../context/LanguageContext"; // useLanguage hook from LanguageContext, to access language settings

function LanguageSwitcher() {
  const { setLanguage } = useLanguage(); // Destructure setLanguage function from context to change language

  return (
    <div className="language-switcher">
        
        {/* Button for switching to Swedish (sv) */}
        <button className="language-button" onClick={() => setLanguage("sv")}>
            <img className="language-flag" alt="Svenska" src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/SE.svg"/>
        </button>

        {/* Button for switching to English (en) */}
        <button className="language-button" onClick={() => setLanguage("en")}>
            <img className="language-flag" alt="English" src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/GB.svg"/>
        </button>
    </div>
  );
}

export default LanguageSwitcher;