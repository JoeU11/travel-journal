import Logo from "../images/logo.png"

export default function Navbar() {
  return (
    <nav>
      <img src={Logo} alt="logo" id="nav-logo" />
      <p id="nav-text">my travel journal.</p>
    </nav>
  )
}