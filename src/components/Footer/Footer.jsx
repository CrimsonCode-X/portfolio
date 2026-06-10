import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p>
          © {new Date().getFullYear()} Aman Goswami. All Rights Reserved.
        </p>

        <p className="footer-tag">
          Built with React + Vite
        </p>
      </div>
    </footer>
  );
}

export default Footer;