import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  job: string;


  @Column()
  salary: number;

  @Column({ default: false })
  admin: boolean;
}