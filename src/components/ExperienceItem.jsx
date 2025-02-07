

import React from "react";

// ExperienceItem component that displays a single item/entry in the experience <ul> list
function ExperienceItem({ date, title, info, institution }) {
  return (
    // Each experience item is wrapped in a <li>
    <li className="experience-item">
        <div className="experience-divider" /> {/* Dotted line, visual divider between items in list */}
        <div className="experience-header"> {/* Container for date + institution, for styling reasons */}
            <article className="experience-date">{date}</article> {/* Display date (timespan for activity) */}
            <article className="experience-institution">{institution}</article> {/* Display institution (name of workplace/school) */}
        </div>
        <article className="experience-title">{title}</article> {/* Display title (f.ex. student, CEO) */}
        <article className="experience-info">{info}</article> {/* Display info about activity/experience */}
    </li>
  );
}

export default ExperienceItem;