import { CalendarDays, Clock3, MapPin } from "lucide-react";

const events = [
  {
    title: "Katb el-Kitab",
    date: "Thursday, Dec 10, 2026",
    time: "7:00 PM",
    location: "Al-Noor Mosque Hall",
    mapLink: "https://maps.google.com/?q=Al-Noor+Mosque+Hall",
    details: "Official marriage contract ceremony followed by family gathering.",
  },
  {
    title: "Bride's Henna",
    date: "Monday, Dec 21, 2026",
    time: "8:30 PM",
    location: "Bride Family Home",
    mapLink: "https://maps.google.com/?q=Bride+Family+Home",
    details: "Ladies-only joyful night with songs, henna art, and dinner.",
  },
  {
    title: "Groom's Henna",
    date: "Tuesday, Dec 22, 2026",
    time: "9:00 PM",
    location: "Groom Family Home",
    mapLink: "https://maps.google.com/?q=Groom+Family+Home",
    details: "Traditional men's celebration with close friends and relatives.",
  },
  {
    title: "Wedding Ceremony",
    date: "Thursday, Dec 24, 2026",
    time: "8:00 PM - 1:00 AM",
    location: "Royal Pearl Ballroom",
    mapLink: "https://maps.google.com/?q=Royal+Pearl+Ballroom",
    details: "Reception, dinner, zaffah, cake cutting, and unforgettable moments.",
  },
];

export default function Timeline() {
  return (
    <section className="section">
      <h2>Event Timeline</h2>
      <div className="timeline-grid">
        {events.map((event, index) => (
          <article
            className="card timeline-card fade-up"
            style={{ animationDelay: `${index * 120}ms` }}
            key={event.title}
          >
            <h3>{event.title}</h3>
            <p>
              <CalendarDays size={16} /> {event.date}
            </p>
            <p>
              <Clock3 size={16} /> {event.time}
            </p>
            <p>
              <MapPin size={16} /> {event.location}
            </p>
            <p className="event-details">{event.details}</p>
            <a href={event.mapLink} target="_blank" rel="noreferrer">
              Open Google Maps
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
