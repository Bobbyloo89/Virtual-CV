

import Header from "../components/Header";
import Footer from "../components/Footer";
import myImage from "../assets/images/20220420_115139.jpg";
import { useLanguage } from "../context/LanguageContext"; // Custom hook to get language context
import LanguageSwitcher from "../components/LanguageSwitcher"; // Component to switch languages


function About() {

  // Destructure current language from context using custom hook
  const { language } = useLanguage();

  // Define text content for both English ('en') and Swedish ('sv')
  const text = {
    en: {
      intro: "Proficient in HTML, CSS, and JavaScript, with hands-on experience in modern frameworks and libraries such as React, Redux, and React Router. Skilled in styling and responsive design using Sass and Tailwind CSS. Experienced in Git-based version control and adept at working within agile development environments to build scalable and user-friendly web applications.",
      main: "I am a passionate and driven 35-year-old web development student from Sweden, with a lifelong fascination for computing and gaming. My creative drive extends beyond the screen—whether it’s drawing, writing, or building, I have always sought out ways to express and expand my imagination. Over the years, this creativity has evolved into a deep appreciation for problem-solving and the art of creating experiences that seamlessly blend functionality with form.\n\n In addition to my creative pursuits, I am naturally inclined toward logic, which draws me toward challenges that require analytical thinking. I thrive in environments where logic and creativity intersect—whether I'm designing a sleek user interface or developing intricate, scalable web solutions. As a web developer, I enjoy the challenge of constructing systems that not only function at a high level but also stand the test of time. 'True scalability' is a core focus in my approach, ensuring that projects are built to adapt and grow alongside user needs and technology advancements.\n\n My passion for puzzles and quizzes shapes the way I approach development: I am always looking ahead, anticipating potential roadblocks and finding proactive solutions. I take pride in putting myself in the shoes of the end-user, aiming to design intuitive, accessible, and smooth experiences before any issues arise.\n\n The balance of creative thinking and logical problem-solving is what drives me as a developer. Every line of code I write is an opportunity to shape a user’s journey and create something that is both functional and beautiful. Whether it’s refining the smallest UI element or architecting a large-scale application, I bring a holistic perspective that merges artistic intuition with precision engineering. I am deeply committed to continual growth, constantly honing my skills to craft better, more efficient web solutions while staying curious about new technologies and methods that can help me achieve these goals."
    },
    sv: {
      intro: "Självsäker inom HTML, CSS och JavaScript, med praktisk erfarenhet av moderna ramverk och bibliotek såsom React, Redux och React Router. Skicklig på styling och responsiv design med hjälp av Sass och Tailwind CSS. Erfaren inom versionshantering med Git och van att arbeta i agila utvecklingsmiljöer för att bygga skalbara och användarvänliga webbapplikationer.",
      main: "Jag är en passionerad och målmedveten 35-årig webbutvecklingsstudent från Sverige, med en livslång fascination för datorer och spel. Min kreativa drivkraft sträcker sig bortom skärmen—oavsett om det handlar om att rita, skriva eller bygga har jag alltid letat efter sätt att uttrycka och utveckla min fantasi. Med tiden har denna kreativitet utvecklats till en djup uppskattning för problemlösning och konsten att skapa upplevelser som sömlöst kombinerar funktionalitet med form.\n\n Utöver mina kreativa intressen har jag en naturlig fallenhet för logik, vilket gör att jag dras till utmaningar som kräver analytiskt tänkande. Jag trivs i miljöer där logik och kreativitet möts—oavsett om det handlar om att designa ett elegant användargränssnitt eller utveckla intrikata, skalbara webblösningar. Som webbutvecklare njuter jag av utmaningen att bygga system som inte bara fungerar på hög nivå utan också står emot tidens test. 'Äkta skalbarhet' är en kärnpunkt i mitt arbetssätt, där jag säkerställer att projekt byggs för att anpassas och växa i takt med användarnas behov och teknologins framsteg.\n\n Min passion för pussel och frågesporter präglar mitt sätt att närma mig utveckling: Jag ligger alltid steget före, förutser potentiella hinder och hittar proaktiva lösningar. Jag är noga med att sätta mig i slutanvändarens position och strävar efter att designa intuitiva, tillgängliga och smidiga upplevelser innan några problem ens uppstår.\n\n Balansen mellan kreativt tänkande och logisk problemlösning är det som driver mig som utvecklare. Varje rad kod jag skriver är en möjlighet att forma en användares resa och skapa något som är både funktionellt och vackert. Oavsett om det handlar om att finslipa den minsta UI-detaljen eller att arkitektera en storskalig applikation, närmar jag mig alltid arbetet med ett helhetsperspektiv där konstnärlig intuition möter teknisk precision. Jag är djupt engagerad i kontinuerlig utveckling och strävar ständigt efter att förbättra mina färdigheter för att skapa bättre, mer effektiva webblösningar, samtidigt som jag är nyfiken på nya teknologier och metoder som kan hjälpa mig att nå dessa mål."
    }
  };

  return (
    <section className="about-container">
      <Header title="Mikael Lindstedt" />
      <img className="profile-pic" src={myImage} alt="Description" />
      <article className="about-title">Front-End Developer</article>
      <LanguageSwitcher />{/* Component to switch between Eng and Swe */}
      <article className="about-intro">{text[language].intro}</article>{/* Display intro based on current language */}
      <article className="about-main">{text[language].main}</article>{/* Display main based on current language */}
      <Footer />
    </section>
  );
}


export default About;