import {db, DataTypes} from '@Application/database';
import ClassroomStudent from "../../classroom-student/model/schema";

const Student = db.define('student', {
    auth0Id: {
        type: DataTypes.STRING,
        unique: true
    },
    picture: DataTypes.STRING,
    uploadedPicture: DataTypes.STRING,
    avatarType: DataTypes.SMALLINT,
    name: DataTypes.STRING,
});

Student.associate = ({classroom}) => {
    Student.belongsToMany(classroom, {through: ClassroomStudent, onDelete: 'cascade'});
};

export default Student;