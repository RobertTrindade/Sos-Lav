import ico from "@/src/app/favicon.ico";
import { Howl } from 'howler';

export const ativarNotificacao = (title: string, body: string) => {
  if ("Notification" in window && Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        const notificationOptions: NotificationOptions = {
          body: body,
          icon: ico.src,
          requireInteraction: true,
          silent: false,
        };

        const somPersonalizado = new Howl({
          src: ['/assets/sons/beepbeep.wav'],
          volume: 1.0,
        });

        // Adiciona um evento para repetir o áudio duas vezes
        let repeatCount = 0;
        somPersonalizado.on('end', () => {
          repeatCount++;
          if (repeatCount < 2) {
            somPersonalizado.play();
          }
        });

        // Toca o som personalizado pela primeira vez
        somPersonalizado.play();

        // Cria e exibe a notificação
        const notification = new Notification(title, notificationOptions);

        // Adiciona um evento para pausar o som quando a notificação for fechada
        notification.onclose = () => {
          somPersonalizado.stop();
        };
      }
    });
  }
};