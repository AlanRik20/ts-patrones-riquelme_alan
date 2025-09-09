import { IConexion } from '../interfaces/IConexion';

export class ConexionDB implements IConexion {
  private static instance: ConexionDB;
  private host: string;
  private puerto: number;
  private usuario: string;
  private conectado: boolean = false;

  private constructor(host: string, puerto: number, usuario: string) {
    this.host = host;
    this.puerto = puerto;
    this.usuario = usuario;
  }

  public static getInstance(host: string, puerto: number, usuario: string): ConexionDB {
    if (!ConexionDB.instance) {
      ConexionDB.instance = new ConexionDB(host, puerto, usuario);
    }
    return ConexionDB.instance;
  }

  public conectar(): void {
    if (!this.conectado) {
      this.conectado = true;
      console.log(`Conectado a DB en ${this.host}:${this.puerto} como ${this.usuario}`);
    }
  }

  public desconectar(): void {
    if (this.conectado) {
      this.conectado = false;
      console.log(`Desconectado de la DB`);
    }
  }

  public estadoConexion(): boolean {
    return this.conectado;
  }
}
