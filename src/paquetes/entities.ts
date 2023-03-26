import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn
} from 'typeorm';

@Entity({ name: 'paquetes' })
export class Paquetes {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id_paquete: number;

  @Column()
  numero_guia: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  peso: number;

  @Column()
  receiver_cedula: string;

  @Column()
  sender_cedula: string;

  @Column()
  sender_nombres: string;

  @Column()
  sender_telefono: string;

  @Column()
  createdAt: Date;

  @OneToMany(() => Paquetes_estados, estado => estado.id_paquete)
  estados: Paquetes_estados[];
}

@Entity({ name: 'paquetes_estados' })
export class Paquetes_estados {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id_paquete_estado: number;

  @Column()
  id_paquete: number;

  @Column()
  estado_actual: string;

  @Column()
  createdAt: Date;

  @ManyToOne(() => Paquetes, paquete => paquete.id_paquete)
  @JoinColumn({ name: "id_paquete" })
  paquete: Paquetes;
}