import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { Visitor } from "./Visitor";
import { Exhibit } from "./Exhibit";

@Entity()
export class Visit {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Visitor, (visitor) => visitor.visits)
  visitor: Visitor;

  @ManyToOne(() => Exhibit, (exhibit) => exhibit.visits)
  exhibit: Exhibit;

  @Column({ type: "date" })
  date: string;
}
