import './navbar.css'
import Logo from '../../assets/logo.jpeg'
import ProfileIcon from '../../assets/profile-icon.jpg'

function Navbar() {
    return (
        <>
            <div className="nav-container">
                <img className='nav-img' src={Logo} alt="Logo" />
                <a href="">Community Connect</a>
                <div className='nav-items'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Our Reach</a></li>
                    <li><a href="">Gallery</a></li>
                    <li><a href="">Contact</a></li>
                    <img className='profile-icon' src={ProfileIcon} alt="profile" />
                </div>
            </div>
        </>
    );
}

export default Navbar