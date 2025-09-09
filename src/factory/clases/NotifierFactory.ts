import { INotifier } from '../interfaces/INotifier';
import { EmailNotifier } from './EmailNotifier';
import { SMSNotifier } from './SMSNotifier';
import { WhatsAppNotifier } from './WhatsAppNotifier';

export class NotifierFactory {
  static create(channel: string): INotifier {
    switch (channel) {
      case 'email':
        return new EmailNotifier();
      case 'sms':
        return new SMSNotifier();
      case 'whatsapp':
        return new WhatsAppNotifier();
      default:
        throw new Error('Canal no soportado');
    }
  }
}
