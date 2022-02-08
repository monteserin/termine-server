import {db} from '@Application/database';

const {DataTypes} = require('sequelize');

export default db.define('teacher', {
    auth0Id: DataTypes.STRING,
    teacherId: DataTypes.STRING,
    email: DataTypes.STRING,
});

