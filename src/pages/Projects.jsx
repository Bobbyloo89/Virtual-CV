

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectItem from "../components/ProjectItem"; // // Component for individual items/entries in list of Projects
import { useState, useEffect } from "react";


function Projects() {
  const [repos, setRepos] = useState([]); // State variable to store the data fetched from the GitHub API

  useEffect(() => { // useEffect hook to fetch data from the GitHub API when component mounts
    fetch("https://api.github.com/users/Bobbyloo89/repos") // Fetch data from the GitHub API
      .then((response) => response.json()) // Convert the response to JSON
      .then((data) => setRepos(data)); // Update the state with the fetched data (repo info)
  }, []); // Empty dependency array, runs only once, on mount



  return (
    <section className="projects-container"> {/* Container for projects list */}
      <Header title="Projects" /> {/* Unique header for Projects view/page */}
      <ul> {/* List of projects */}
        {/* Map through each repo and display it using ProjectItem component */}
        {repos.map((repo) => ( 
          <ProjectItem
            key={repo.id} // Use the repo ID as a unique key for each item in the list (not displayed)
            name={repo.name} // Prop containing repo name
            url={repo.html_url} // Prop containing repo URL
            language={repo.language} // Prop containging main language/s used in repo
            description={repo.description} // Prop containing repo description
            updatedAt={repo.updated_at} // Prop containing info on when repo was last updated
          />
        ))}
      </ul>
      <Footer />
    </section>
  );
}


export default Projects;