export type CreatePaqueteParams = {
  numero_guia: string;
  peso: number;
  receiver_cedula: string;
  sender_cedula: string;
  sender_nombres: string;
  sender_telefono: string;
};

export type UpdatePaqueteParams = {};