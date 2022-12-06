import pin from "../images/map_pin.png"

export default function Location(location) {
  return (
    <section className="location">
      <img src={location.image} alt={location.title} width="200" className="location-photo" />
      <section className="location-text-block">
        <section className="location-where">
          <img src={pin} alt="pin" className="pin" />
          <p className="location-country">{location.country}</p>
          <a href={location.googleMapsLink}>View on Google Maps</a>
        </section>
        <h2 className="location-title">{location.title}</h2>
        <p className="location-dates">{location.startDate} - {location.endDate}</p>
        <p className="location-description">{location.description}</p>
      </section>
    </section>
  )
}