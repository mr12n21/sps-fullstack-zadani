import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../database/db';
import { Visit } from './visit';

interface ExhibitAttributes {
  id?: number;
  name: string;
  description?: string;
}

export class Exhibit extends Model<ExhibitAttributes> implements ExhibitAttributes {
  public id!: number;
  public name!: string;
  public description?: string;
}

Exhibit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'exhibits',
    timestamps: false,
  }
);

Exhibit.hasMany(Visit, { foreignKey: 'exhibit_id' });