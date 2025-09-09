import { ConexionDB } from './clases/conexionDB';
export function runSingleton() {
  const db1 = ConexionDB.getInstance('localhost', 5173, 'admin');
  db1.conectar();

  const db2 = ConexionDB.getInstance('localhost', 5173, 'admin');
  console.log('¿Es la misma instancia?', db1 === db2);

  db2.desconectar();
}
