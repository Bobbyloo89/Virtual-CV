

import React from "react";
import { CirclePlay } from "lucide-react"; // Using lucide-react library for icons

// ProjectItem component, receives project details as props
function ProjectItem({ name, url, language, description, updatedAt }) {
  return (
    // List item representing a single project
    <li className="project-item">
      {/* Repo link, opens the repo in a new tab, contains name + icon */}
      <a href={url} target="_blank" rel="noopener noreferrer" className="project-link">
        {/* Repo name, clickable part of link */}
        {name}
        {/* Icon, clickable part of link */}
        <CirclePlay className="project-icon" />
      </a>
      {/* Repo description displayed below the icon+name-link */}
      <p className="project-description">{description}</p>
      {/* Container for language + date */}
      <article className="project-info">
        {/* Programming language/s used in repo */}
        <p className="project-language">{language}</p>
         {/* Date of last update of repo, with location formatting */}
        <p className="project-updated">{new Date(updatedAt).toLocaleDateString()}</p>
      </article>
    </li>
  );
}

export default ProjectItem;