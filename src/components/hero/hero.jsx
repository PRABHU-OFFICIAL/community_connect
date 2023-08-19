import './hero.css'
import Social from '../../assets/social.jpg'
import Social2 from '../../assets/social2.jpg'
import HeroConnect from '../../assets/networking.mp4'

function Hero() {
    return (
        <>
            <div className="hero-container-video">
                <video src={HeroConnect} autoPlay muted loop></video>
            </div>
            <h1 className='hero-title'>Our Vision</h1>
            <div className='hero-container'>
                <img className='hero-img' src={Social} alt="Social-1-image" />
                <div className="hero-text-1">
                    <h1>Use Social Media & Connect Your Community</h1>
                    <h3>CommunityConnect: Uniting Communities Through Social Media</h3>
                    <h4>Join CommunityConnect today and embark on a journey of connection, friendship, and community engagement. Together, let's harness the power of social media to build stronger, more united communities. Rediscover the joy of being part of something bigger – join the movement and experience the transformative impact of CommunityConnect</h4>
                    <div className='hero-buttons'>
                        <button className='hero-btn-1'><span class="front">
                            Join Society
                        </span>
                        </button>
                        <button className='hero-btn-2'><span class="front">
                            Create Society
                        </span></button>
                    </div>
                </div>
            </div>
            <div className='hero-container'>
                <div className="hero-text-1">
                    <h1>You Build, We Connect</h1>
                    <h3>CommunityConnect: Building Bridges, One Connection at a Time</h3>
                    <h4>CommunityConnect is more than just a platform; it's a movement towards fostering a sense of belonging and social cohesion. We believe that together, we can overcome the barriers that divide us, creating a world where everyone feels valued, supported, and connected</h4>
                    <div className='hero-buttons'>
                        <button className='hero-btn-1'><span class="front">
                            Social Metaverse
                        </span>
                        </button>
                        <button className='hero-btn-2'><span class="front">
                            Meet New People
                        </span></button>
                    </div>
                </div>
                <img className='hero-img' src={Social2} alt="Social-2-image" />

            </div>
        </>
    );
}

export default Hero