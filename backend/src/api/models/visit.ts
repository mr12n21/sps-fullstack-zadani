import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../database/db';
import { Visitor } from './visitor';
import { Exhibit } from './exhibit';

interface VisitAttributes {
  id?: number;
  visitor_id: number;
  exhibit_id: number;
  visit_date: Date;
}

export class Visit extends Model<VisitAttributes> implements VisitAttributes {
  public id!: number;
  public visitor_id!: number;
  public exhibit_id!: number;
  public visit_date!: Date;
}

Visit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    visitor_id: {
      type: DataTypes.INTEGER,
      references: { model: 'visitors', key: 'id' },
      allowNull: false,
    },
    exhibit_id: {
      type: DataTypes.INTEGER,
      references: { model: 'exhibits', key: 'id' },
      allowNull: false,
    },
    visit_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'visits',
    timestamps: false,
  }
);

Visit.belongsTo(Visitor, { foreignKey: 'visitor_id' });
Visit.belongsTo(Exhibit, { foreignKey: 'exhibit_id' });