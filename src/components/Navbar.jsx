import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../css/navbar.css";
import {Link} from 'react-router-dom';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<a href="">
        <img src="https://ednext.in/wp-content/uploads/2021/07/imgonline-com-ua-ReplaceColor-zmWDVbhFTA1-300x128.jpg" alt="" />
      </a>
			<nav ref={navRef}>
				<Link to='/'>Home</Link>
				<Link to="/courses">Courses</Link>
				<a href="/#">Careers</a>
				<a href="/#">Contact</a>
        <a href="#footer">Book a Trial</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;