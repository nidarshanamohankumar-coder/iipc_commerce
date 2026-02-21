import { Link } from "react-router-dom";
import logo from "../assets/images/pkrlogo.jpg";
import image from "../assets/images/iipcimage.png";
import "./Header.css";

function Header(){
    return (
        <>
        <header className="top-header">
            <div className="top-left">
                <img src={logo} alt="logo" className="top-logo" />

                <div className="college-text">
                    <h1>P.K.R. ARTS COLLEGE FOR WOMEN</h1>
          <p>
            Autonomous Institution – Affiliated to Bharathiar University <br />
            <b>Re-Accredited with 'A' Grade by NAAC</b>
          </p>
          <p>Gobichettipalayam</p>
        </div>
                </div>
            
            <nav className="top-nav">
                <Link  to="/">Home</Link>
                <Link to="/about">Objectives</Link>
                <Link to="/about">Programmes</Link>
            </nav>
        </header>
        <div className="iipc-image">
            <img src={image} alt="iipc" />
        </div>
        </>
    );
}



export default Header;