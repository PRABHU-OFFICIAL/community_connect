import './gallery.css'
import Collage from '../../assets/collage.jpeg'

function Gallery() {
    return (
        <>
        <div className='gallery-container'>
            <h1 className='gallery-title'>Our Memories</h1>
            <img className='gallery-collage' src={Collage} alt="" />
        </div>
        </>
    );
}

export default Gallery