import { DataTypes } from "sequelize"
import sequelize from "../db/conection"

export const Product = sequelize.define( 'product', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

    name: {
        type: DataTypes.STRING
    },
    
    description: {
        type: DataTypes.STRING
    }
})
