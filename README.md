  
# My virtual CV

This is my virtual CV SPA (Single-Page Application) created using React for a school project. It contains a left-hand vertical navbar with a slider-switch for dark/light mode **(global state management using Redux)** and links **(using React-router for navigating without page reloads)** to the four pages/views:

## About  
Contains information about me as a dev and as a person, displaying a profile image, my title, a short intro and a presentation of who I am, and can be translated to either swedish or english by clicking the flag icons **(language choice managed using useContext)**.

## Experience  
Contains a list of my previous education and work experience in a time line (list created by sending props between ExperienceItem.jsx and Experience.jsx).

## Projects  
Contains a list of my public GitHub projects (fetched by using the GitHub API and **utilizing useState/useEffect**.)

## Contact
Contains links to my LinkedIn, GitHub, and email address.

# How to run this project locally:
## 1. Clone the repository
```
git clone https://github.com/Bobbyloo89/Virtual-CV.git
cd Virtual-CV
```
## 2. Install dependencies
```
npm install
```
## 3. Start the dev server
This will give you a link you can ctrl-click or copy-paste into your browser.
```
npm run dev
```
