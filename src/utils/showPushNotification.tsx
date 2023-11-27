import ico from "@/src/app/favicon.ico";

export const ativarNotificacao = (title: string, body: string) => {
  if ("Notification" in window && Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification(title, {
          body: body,
          icon: ico.src,
          silent: false,
        });
      }
    });
  }
};
