import { INotifier } from '../interfaces/INotifier';

export class SMSNotifier implements INotifier {
  send(to: string, message: string): void {
    if (!/^[0-9]{10,15}$/.test(to)) throw new Error('Número SMS inválido');
    console.log(`SMS enviado a ${to}: ${message}`);
  }
}
