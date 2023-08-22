import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
    
    return (
        <>
        
            <div className='Hero my-4'>
                <h3 className='slogan'>Find your perfect trip, designed by insiders who know and love their cities</h3>
                <p>Unlock the Ultimate Adventure: Discover Your Dream Path with Our App! Embark on your perfect journey with a user-friendly interface and a plethora of itinerary options at your fingertips. Let&#39;s redefine travel planning, making your next trip an effortless delight!</p>
                <Link id='call-to-action' to="/cities" className='btn'>Go Inside! Plan Now!</Link>
                
            </div>

        </>
    )
}

export default Hero