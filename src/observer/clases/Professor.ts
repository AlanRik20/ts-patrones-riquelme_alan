import { IPublisher } from "../interfaces/IPublisher"
import { ISubscriber } from "../interfaces/ISubscriber";

export class Professor implements IPublisher {
    private subscribers: ISubscriber[] = [];

    constructor(public name:string) {}

    subscribe(subscriber: ISubscriber): void {
        this.subscribers.push(subscriber);
    }

    unsubscribe(subscriber: ISubscriber): void {
        this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
    }

    publish(message: string): void {
        console.log(`[${this.name}] Publicó: ${message}`);
        this.subscribers.forEach(sub => sub.update(message));
    }
}

