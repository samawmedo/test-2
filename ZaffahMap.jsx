import { Flag, MapPinned } from "lucide-react";

const routeSteps = [
  "Gathering at Royal Pearl Ballroom Gate",
  "Live drums and dabke at Main Avenue",
  "Family salute near Golden Fountain",
  "Grand entry to the ceremony hall",
];

export default function ZaffahMap() {
  return (
    <section className="section card">
      <h2>
        <MapPinned size={20} /> Zaffah Route
      </h2>
      <p className="section-intro">
        A ceremonial procession path for our grand entrance and celebration.
      </p>
      <div className="zaffah-route">
        {routeSteps.map((step, idx) => (
          <div className="route-step" key={step}>
            <span className="dot">{idx + 1}</span>
            <p>{step}</p>
            {idx < routeSteps.length - 1 ? <span className="connector" /> : <Flag size={16} />}
          </div>
        ))}
      </div>
    </section>
  );
}
