import { db, DataTypes } from '@Application/database';
import ClassroomStudent from "../../classroom-student/model/schema";

const Student = db.define('student', {
    auth0Id: {
        type: DataTypes.STRING,
        unique: true
    },
    picture: DataTypes.STRING,
    uploadedPicture: {
        type: DataTypes.STRING,
        defaultValue: 'https://pablomonteserin.com/termine/defaultAvatar.png'
    },
    monteserinAvatarPicture: DataTypes.STRING,
    avatarType: {
        type: DataTypes.SMALLINT,
        defaultValue: 1
    },
    name: {
        type: DataTypes.STRING,
        defaultValue: ''
    },
    email: DataTypes.STRING,
    isBlocked: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
});

Student.associate = ({ classroom }) => {
    Student.belongsToMany(classroom, { through: ClassroomStudent, onDelete: 'cascade' });
};

export default Student;