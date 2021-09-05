import React from "react";
import { Link } from "react-router-dom";

// styles and assets
import "../styles/navbar.scss";
import navLogo from "../../../assets/weatherly/AppIcon.png";

export default function Navbar(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark nav-bg">
			<div className="container-fluid">
				<Link className="navbar-brand" to={`/weatherly`}>
					<img src={navLogo} alt="Weatherly" />
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#weatherlyNavbarContent"
					aria-controls="weatherlyNavbarContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="weatherlyNavbarContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link" to={`/`}>
								All Apps
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to={`/weatherly/privacy_policy`}>
								Privacy Policy
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to={`/weatherly/contact`}>
								Contact Us
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
