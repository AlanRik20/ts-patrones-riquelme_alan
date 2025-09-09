import { NotifierFactory } from './clases/NotifierFactory';

export function runFactory() {
    console.log("\nPATRÓN FACTORY: Notificadores \n");
  const email = NotifierFactory.create('email');
  email.send('usuario@email.com', '¡Hola por email!');

  const sms = NotifierFactory.create('sms');
  sms.send('1234567890', '¡Hola por SMS!');

  const whatsapp = NotifierFactory.create('whatsapp');
  whatsapp.send('+5491123456789', '¡Hola por WhatsApp!');
}
