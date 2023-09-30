export default function Places(props){
    return(
        <main>
            <img src={props.imageUrl}></img>
            <p>{props.location}</p>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
            <h2>{props.title}</h2>
            <p>{props.startDate}</p>
            <p>{props.endDate}</p>
            <p>{props.description}</p>
        </main>
    )
}