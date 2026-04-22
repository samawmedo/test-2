import { useEffect } from "react";

const EIGHT_HOURS_MS = 8 * 60 * 60 * 1000;

export default function NotificationSystem() {
  useEffect(() => {
    if (!("Notification" in window)) return;

    let intervalId;

    const sendWeddingNotification = () => {
      new Notification("Sama & Medo Wedding", {
        body: "A gentle reminder: our celebration is getting closer.",
        icon: "/favicon.ico",
      });
    };

    const setupNotifications = async () => {
      if (Notification.permission === "default") {
        await Notification.requestPermission();
      }

      if (Notification.permission === "granted") {
        sendWeddingNotification();
        intervalId = window.setInterval(sendWeddingNotification, EIGHT_HOURS_MS);
      }
    };

    setupNotifications();

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return null;
}
