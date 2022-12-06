import pin from "../images/map_pin.png"

export default function Location(location) {
  return (
    <section className="location">
      <img src={location.image} alt={location.title} className="location-photo" />
      <section className="location-text-block">
        <img src={pin} alt="pin" className="pin" />
        <p className="country">{location.country}</p>
        <a href={location.googleMapsLink}>View on google maps</a>
        <h2 className="location-title">{location.title}</h2>
        <p className="travel-dates">{location.startDate} - {location.endDate}</p>
        <p className="location-description">{location.description}</p>
      </section>
    </section>
  )
}