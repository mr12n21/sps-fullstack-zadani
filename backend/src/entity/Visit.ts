import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from "typeorm";
import { Visitor } from "./Visitor";
import { Exhibit } from "./Exhibit";

@Entity()
export class Visit {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn({ name: "visit_date", type: "timestamp" })
  visit_date!: Date;

  @ManyToOne(() => Visitor, (visitor) => visitor.visits, { onDelete: "CASCADE" })
  @JoinColumn({ name: "visitorId" })
  visitor!: Visitor;

  @ManyToOne(() => Exhibit, (exhibit) => exhibit.visits, { onDelete: "CASCADE" })
  @JoinColumn({ name: "exhibitId" })
  exhibit!: Exhibit;
}
