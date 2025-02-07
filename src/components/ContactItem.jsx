

import React from "react";

// ContactItem component that displays a single item/entry in the Contact <ul> list
function ContactItem({ href, icon: Icon, label }) {
  return (
    // Each contact item is wrapped in a <li>
    <li className="contact-item">
      {/* Link to contact option, opens website in a new tab, contains icon + label */}
      <a href={href} target="_blank" rel="noopener noreferrer" className="contact-link">
        {/* Icon for contact option, clickable part of link */}
        <Icon className="contact-icon" />
        {/* Label/name of contact option, clickable part of link */}
        <p>{label}</p>
      </a>
    </li>
  );
}

export default ContactItem;