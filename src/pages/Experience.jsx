

import Header from "../components/Header";
import Footer from "../components/Footer";
import ExperienceItem from "../components/ExperienceItem"; // Component for individual items/entries in list of Experience


function Experience() {
  return (
    <section className="experience-container"> {/* Container for styling purposes*/}
      <Header title="Experience" /> {/* Unique page/view header */}

      {/* date: timespan for activity
          institution: name of workplace/school
          title: your title, f.ex. student/CEO
          info: information about activity/experience */}
          
      {/* Education section */}
      <h2>Education</h2>
      <ul>
        <ExperienceItem date="Aug 24 - Now" institution="KYH" title="Student" info="Higher Vocational Education, Front-End Dev program - Agile Work Methods, Javascript, HTML, CSS, Sass, Tailwind, React" />
        <ExperienceItem date="Aug 21 - Nov 22" institution="Uppsala University" title="Student" info="Bachelor's Program in Information Systems - C#, OOP, Algorithmics, Computational Thinking" />
        <ExperienceItem date="Aug 04 - Jun 07" institution="Rekarnegymnasiet" title="Student" info="High school education with a focus on IT with CISCO cert." />
      </ul>

      {/* Work Experience section */}
      <h2>Work Experience</h2>
      <ul>
        <ExperienceItem date="Nov 13 - Jul 19" institution="PhoneHero" title="Regional Manager" info="Managed operations for multiple retail locations specializing in smartphone and tablet repairs. Oversaw daily financial management and budgeting for stores within the region. Developed and executed advertising strategies to enhance brand visibility and drive sales. Recruited, trained, and managed store employees, ensuring high performance and customer satisfaction." />
        <ExperienceItem date="Sep 12 - Nov 13" institution="PhoneHero" title="Service Technician" info="Repair and maintenance of smartphones and tablets, specializing in uncommon models and high-precision soldering. Provided front-desk customer service, including handling transactions and assisting clients with technical inquiries." />
        <ExperienceItem date="Aug 10 - Sep 12" institution="Gökstensskolan" title="Educational Assistant / Interim Teacher" info="Adapted to various educational roles to support students and teachers in a dynamic school environment. Led classes as a substitute teacher across different subjects. Assisted teachers with classroom management and student engagement. Provided one-on-one support to students with special needs." />
        <ExperienceItem date="Aug 10 - Sep 12" institution="Gökstensskolan" title="Youth Center Staff" info="Organized recreational and educational activities to promote social development. Supervised and mentored students, fostering a positive and inclusive atmosphere. Assisted with conflict resolution and encouraged teamwork among attendees." />
      </ul>
      
      <Footer />
    </section>
  );
}


export default Experience;