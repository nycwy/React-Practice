import profilePic from './assets/male.jpg'
export default function Card() {
    return (
        <div className="card">
            <img className='card-img' src={profilePic} alt="profile picture"/>
            <h2 className='card-title'>Hello Singh</h2>
            <p className='card-text'>I am a junior Software Dev</p>
        </div>
    )
}