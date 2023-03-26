export class CreatePaqueteDTO {
  numero_guia: string;
  peso: number;
  receiver_cedula: string;
  sender_cedula: string;
  sender_nombres: string;
  sender_telefono: string;
}

export class UpdatePaqueteDTO {}

export class CreatePaqueteLogDTO {
  estado_actual: string;
}