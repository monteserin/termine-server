import {db, DataTypes} from '@Application/database'
import ClassroomStudent from "../../classroom-student/model/schema";

const Classroom = db.define('classroom', {
    teacherId: DataTypes.STRING,
    cod: DataTypes.STRING,
    txt: {
        type:DataTypes.TEXT,
        defaultValue:''
    }
});

Classroom.associate = ({student, classroomstudent}) => {
    Classroom.belongsToMany(student, {through: ClassroomStudent, onDelete: 'cascade'});
    // Classroom.hasMany(classroomstudent, { onDelete: 'cascade'});
};


export default Classroom;