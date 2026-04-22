import { useState } from "react";
import { Send } from "lucide-react";

export default function MessageForm() {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", text: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY",
          subject: "Wedding Invitation Message",
          from_name: formData.name,
          name: formData.name,
          message: formData.message,
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.success) throw new Error("Unable to send message.");

      setStatus({ type: "success", text: "Thank you. Your lovely message was sent successfully." });
      setFormData({ name: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        text: "Message could not be sent. Please check your Web3Forms key and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section card">
      <h2>Send Your Blessings</h2>
      <form className="message-form" onSubmit={onSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onInputChange}
            required
            placeholder="Your full name"
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={onInputChange}
            required
            placeholder="Write your warm wishes..."
          />
        </label>
        <button type="submit" disabled={isSubmitting}>
          <Send size={16} />
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        {status.text ? <p className={`feedback ${status.type}`}>{status.text}</p> : null}
      </form>
    </section>
  );
}
