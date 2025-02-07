

// Header component, accepts a 'title' prop
function Header({ title }) {
    return <h1 className="header">{title}</h1>; // Display the 'title' (unique for each page/view) passed as a prop
}


export default Header;