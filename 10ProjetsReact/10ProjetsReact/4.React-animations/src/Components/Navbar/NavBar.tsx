import './Navbar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <Link to="/">LISTE</Link>
      <Link to="/stateAnim">STATE</Link>
      <Link to="/scroll">SCROLL</Link>
    </nav>
  )
}
