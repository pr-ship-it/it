import "./navbar.css"
import BrainLogo from "./BrainLogo"

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__background-pattern"></div>
      <div className="navbar__container">
        <div className="navbar__brand">
          <BrainLogo className="navbar__logo" />
          <span className="navbar__brand-name">Alverse</span>
        </div>

        <nav className="navbar__nav">
          <ul className="navbar__nav-list">
            <li className="navbar__nav-item">
              <a href="#" className="navbar__nav-link navbar__nav-link--active">
                Home
              </a>
            </li>
            <li className="navbar__nav-item">
              <a href="#" className="navbar__nav-link">
                About
              </a>
            </li>
            <li className="navbar__nav-item">
              <a href="#" className="navbar__nav-link">
                Features
              </a>
            </li>
            <li className="navbar__nav-item">
              <a href="#" className="navbar__nav-link">
                Library
              </a>
            </li>
            <li className="navbar__nav-item">
              <a href="#" className="navbar__nav-link">
                Pricing
              </a>
            </li>
          </ul>
        </nav>

        <div className="navbar__actions">
          <a href="#" className="navbar__button navbar__button--primary">
            Contact Us
          </a>
          <a href="#" className="navbar__button navbar__button--secondary">
            Get Started
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar