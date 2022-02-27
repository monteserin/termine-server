import { db, DataTypes } from '@Application/database';

const ClassroomStudent = db.define('classroomstudent', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    hasTerminated: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    isInClassroom: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    hasDoubts: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    doIt: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    doubtTime: DataTypes.INTEGER

});

ClassroomStudent.associate = ({ classroom, student }) => {
    ClassroomStudent.belongsTo(classroom, { foreignKey: { allowNull: false } });
    ClassroomStudent.belongsTo(student, { foreignKey: { allowNull: false } });
};

export default ClassroomStudent;