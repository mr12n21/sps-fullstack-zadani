import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../database/db';
import { Visit } from './visit';

interface VisitorAttributes {
  id?: number;
  firstname: string;
  lastname: string;
}

export class Visitor extends Model<VisitorAttributes> implements VisitorAttributes {
  public id!: number;
  public firstname!: string;
  public lastname!: string;
}

Visitor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'visitors',
    timestamps: false,
  }
);

Visitor.hasMany(Visit, { foreignKey: 'visitor_id' });