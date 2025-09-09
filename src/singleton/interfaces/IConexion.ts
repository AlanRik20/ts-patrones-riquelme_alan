export interface IConexion {
  conectar(): void;
  desconectar(): void;
  estadoConexion(): boolean;
}
