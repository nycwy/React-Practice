export default function Card(props) {
    return (
        <div className="card">
            <img className='card-img' src={props.imgSrc} alt="profile picture"/>
            <h2 className='card-title'>{props.title}</h2>
            <p className='card-text'>{props.desc}</p>
        </div>
    )
}