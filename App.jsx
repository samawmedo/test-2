import { Heart } from "lucide-react";
import Timeline from "./components/Timeline";
import ZaffahMap from "./components/ZaffahMap";
import Gallery from "./components/Gallery";
import Countdown from "./components/Countdown";
import MusicPlayer from "./components/MusicPlayer";
import NotificationSystem from "./components/NotificationSystem";
import MessageForm from "./components/MessageForm";
import QRCodeSection from "./components/QRCodeSection";

function App() {
  return (
    <div className="app">
      <header className="hero section">
        <p className="eyebrow">By the grace of Allah</p>
        <h1>
          Sama <Heart size={26} className="heart-icon" /> Medo
        </h1>
        <p className="hero-subtitle">We joyfully invite you to celebrate our wedding</p>
      </header>

      <main>
        <Countdown />
        <Timeline />
        <ZaffahMap />
        <Gallery />
        <MessageForm />
        <QRCodeSection />
      </main>

      <MusicPlayer />
      <NotificationSystem />
    </div>
  );
}

export default App;
