// Estructura de los datos a importar

export interface AduanasInterface {
  id_reservation: number;
  hin: number;
  date_entry_confirmed: string;
  date_exit_confirmed: string;
  port_name: string;
  installation_name: string;
  name_captain: string;
  id_captain: number;
  hour_log: string;
}
