

import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactItem from "../components/ContactItem"; // Component for individual items/entries in list of contact options
import { Github, Linkedin, Mail } from "lucide-react"; // Using lucide-react library for icons

function Contact() {
  return (
    <section className="contact-container"> {/* Container for styling purposes */}
      <Header title="Contact" /> {/* Unique page/view header */}

      {/* herf: URL to my profile (or to open email client)
          icon: tag of Lucide icon displayed, needs to be imported on line 6
          label: label of contact option (LinkedIn, GitHub, etc.) */}
      <ul>
        <ContactItem href="https://www.linkedin.com/in/mikael-lindstedt-46a379b2/" icon={Linkedin} label="LinkedIn" />
        <ContactItem href="https://www.github.com/Bobbyloo89" icon={Github} label="GitHub" />
        <ContactItem href="mailto:mikael.lindstedt@live.se" icon={Mail} label="E-mail" />
      </ul>
      <Footer />
    </section>
  );
}

export default Contact;