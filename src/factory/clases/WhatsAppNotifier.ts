import { INotifier } from '../interfaces/INotifier';

export class WhatsAppNotifier implements INotifier {
  send(to: string, message: string): void {
    if (!to.startsWith('+')) throw new Error('Número WhatsApp inválido');
    console.log(`WhatsApp enviado a ${to}: ${message}`);
  }
}
