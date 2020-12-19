import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import User from './User';
@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column() // passar sem nada eh igual passar varchar
  provider_id: string;

  @ManyToOne(() => User) //Tipo de relacionamento SQL
  @JoinColumn({ name: 'provider_id' }) //Qual coluna vai fazer a ligação
  provider: User;

  @Column('timestamp with time zone')// caso nao use postgres, talvez não seja possível usar Time Zone
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export default Appointment;
