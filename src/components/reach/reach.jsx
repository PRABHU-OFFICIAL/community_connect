import './reach.css'
import Reach1 from '../../assets/reach-1.png'
import Reach2 from '../../assets/reach-2.png'
import Reach3 from '../../assets/reach-3.png'
import Reach4 from '../../assets/reach-4.png'
import HeroConnect from '../../assets/hero-connect.webp'
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'

function Reach() {

    return (
        <>
            <div className='reach-container'>
                <h1 className='reach-title'>Our Connections</h1>
                <div className="reach-contents">
                    <div className="reach-content">
                        <img className='reach-img' src={Reach1} alt="" />
                        <div className="reach-content-details">
                            <h3 className='reach-detail-name'>Maria Andrews | +363 678 563</h3>
                            <h4 className='reach-detail-loc'>Greenwich Village | New York</h4>
                            <div className="reach-detail-icon">
                                <button className='btn-insta'><i><BsInstagram /> Instagram</i></button>
                                <button className='btn-fb'><i><BsFacebook /> Facebook</i></button>
                            </div>
                        </div>
                    </div>
                    <div className="reach-content">
                        <img className='reach-img' src={Reach2} alt="" />
                        <div className="reach-content-details">
                            <h3 className='reach-detail-name'>Ashley | +363 756 593</h3>
                            <h4 className='reach-detail-loc'>Puri | Odisha</h4>
                            <div className="reach-detail-icon">
                                <button className='btn-insta'><i><BsInstagram /> Instagram</i></button>
                                <button className='btn-fb'><i><BsFacebook /> Facebook</i></button>
                            </div>
                        </div>
                    </div>
                    <div className="reach-content">
                        <img className='reach-img' src={Reach3} alt="" />
                        <div className="reach-content-details">
                            <h3 className='reach-detail-name'>Vijay Ram | +91 7584747493</h3>
                            <h4 className='reach-detail-loc'>Tiruvananthampuran | Kerala</h4>
                            <div className="reach-detail-icon">
                                <button className='btn-insta'><i><BsInstagram /> Instagram</i></button>
                                <button className='btn-fb'><i><BsFacebook /> Facebook</i></button>
                            </div>
                        </div>
                    </div>
                    <div className="reach-content">
                        <img className='reach-img' src={Reach4} alt="" />
                        <div className="reach-content-details">
                            <h3 className='reach-detail-name'>Aliska Das | +91 7586347978</h3>
                            <h4 className='reach-detail-loc'>Bhubaneswar | Odisha</h4>
                            <div className="reach-detail-icon">
                                <button className='btn-insta'><i><BsInstagram /> Instagram</i></button>
                                <button className='btn-fb'><i><BsFacebook /> Facebook</i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="reach-users">
                    <h1 className='reach-users-title'>Our Engagement</h1>
                    <img className='reach-engage-img' src={HeroConnect} alt="" />
                </div>
            </div>
        </>
    );
}

export default Reach;