import { useEffect, useMemo, useState } from "react";
import { Timer } from "lucide-react";

const weddingDate = new Date("2026-12-24T20:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = weddingDate.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, ended: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    ended: false,
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const items = useMemo(
    () => [
      { label: "Days", value: timeLeft.days },
      { label: "Hours", value: timeLeft.hours },
      { label: "Minutes", value: timeLeft.minutes },
      { label: "Seconds", value: timeLeft.seconds },
    ],
    [timeLeft]
  );

  return (
    <section className="section card countdown">
      <h2>
        <Timer size={20} /> Countdown to Our Big Day
      </h2>
      {timeLeft.ended ? (
        <p className="celebrate">The celebration has started. Welcome!</p>
      ) : (
        <div className="count-grid">
          {items.map((item) => (
            <div key={item.label} className="count-item">
              <span>{String(item.value).padStart(2, "0")}</span>
              <small>{item.label}</small>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
