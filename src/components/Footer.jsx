

function Footer() {
    return (
      <footer className="footer">
        {/* Display the copyright symbol followed by the current year and name */}
        <p>© {new Date().getFullYear()} Mikael Lindstedt</p>
      </footer>
    );
}
  

export default Footer;