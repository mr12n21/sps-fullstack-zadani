import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Visitor } from "./Visitor";
import { Exhibit } from "./Exhibit";

@Entity()
export class Visit {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Visitor, (visitor) => visitor.visits, { onDelete: 'CASCADE' })
  visitor!: Visitor;

  @ManyToOne(() => Exhibit, (exhibit) => exhibit.visits, { onDelete: 'CASCADE' })
  exhibit!: Exhibit;

  @Column()
  visit_date!: Date;
}
