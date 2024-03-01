import { Entity, Column, PrimaryColumn, Timestamp } from 'typeorm';

@Entity()
export class Player {
  @PrimaryColumn()
  nickname: string;

  @Column()
  email: string;

  @Column()
  registered: number;

  @Column()
  status: string;
}
