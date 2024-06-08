import { Model, type InferAttributes, type InferCreationAttributes, type CreationOptional, DataTypes } from 'sequelize';
import sequelize from "../config/sequelize";

class Country extends Model<InferAttributes<Country>, InferCreationAttributes<Country>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare code: string;
    declare flagUrl: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

Country.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true, // Assuming IDs are auto-incremented
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        flagUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: 'countries',
        sequelize
    }
);

export default Country;
