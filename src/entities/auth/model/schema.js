import { db } from '@Application/database';
const { DataTypes } = require('sequelize');

export default db.define('user', {
	auth0Id: DataTypes.STRING,
	teacherId: DataTypes.STRING,
	cod: DataTypes.STRING,
	student: DataTypes.BOOLEAN
});

