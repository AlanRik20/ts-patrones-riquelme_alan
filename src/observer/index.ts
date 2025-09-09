import { Professor } from "./clases/Professor";
import { Student } from "./clases/Student";

// Crear profesor y alumnos
export const runObserver = () => {
  console.log("\nPATRÓN OBSERVADOR: PROFESORES Y ESTUDIANTES\n");
  const prof = new Professor("Ale Sanabria");
  const student1 = new Student("Ana");
  const student2 = new Student("Luis");
  const student3 = new Student("Sofía");

  // Suscribir alumnos
  prof.subscribe(student1);
  prof.subscribe(student2);
  prof.subscribe(student3);

  prof.publish("TP N°4: Patrones de Diseño");

  prof.unsubscribe(student2);

  prof.publish("TP N°5: Patrones de Diseño con Fetch");
};
