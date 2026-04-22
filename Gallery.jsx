import { useState } from "react";
import { X } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1200&q=80",
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="section">
      <h2>Media Gallery</h2>
      <div className="gallery-grid">
        {images.map((src) => (
          <button className="gallery-item" key={src} onClick={() => setActiveImage(src)}>
            <img src={src} alt="Wedding memory preview" loading="lazy" />
          </button>
        ))}
      </div>

      {activeImage ? (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActiveImage(null)}>
          <button className="close-btn" onClick={() => setActiveImage(null)} aria-label="Close preview">
            <X size={20} />
          </button>
          <img
            src={activeImage}
            alt="Selected wedding memory"
            className="lightbox-image"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </section>
  );
}
