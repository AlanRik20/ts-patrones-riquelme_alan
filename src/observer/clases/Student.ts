import { ISubscriber } from "../interfaces/ISubscriber";

export class Student implements ISubscriber {
	constructor(public name: string) {}

	update(task: string): void {
		console.log(`[Alumno ${this.name}] recibió la tarea: ${task}`);
	}
}

