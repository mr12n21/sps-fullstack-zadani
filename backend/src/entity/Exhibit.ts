import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Visit } from "./Visit";

@Entity()
export class Exhibit {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column() name!: string;
  @Column() description!: string;
  @OneToMany(() => Visit, (v) => v.exhibit)
  visits!: Visit[];
}
