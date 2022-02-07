import Model from "../model";
import ClassroomModel from '../../classroom/model';
import ClassroomStudentModel from '../../classroom-student/model';
import ClassroomController from "../../classroom/controller";

const Controller = {
    get(conditions) {
        return Model.get(conditions);
    },
    getById(id) {
        return Model.getById(id);
    },
    create(data) {
        return Model.create(data);
    },
    updateById(id, data) {
        return Model.updateById(id, data);
    },
    deleteById(id) {
        return Model.deleteById(id);
    },
    async studentHasTerminated(msg) {
        const [classroom] = await ClassroomModel.get({teacherId: msg.teacherId, cod: msg.cod});
        const conditions = {classroomId: classroom.dataValues.id, studentId: msg.studentId};
        const data = {hasTerminated: msg.hasTerminated};
        await ClassroomStudentModel.update(conditions, data);
        return await ClassroomController.getClassroomWithStudents(msg.cod, msg.teacherId);

    },
    async studentHasDoubts(msg) {
        const [classroom] = await ClassroomModel.get({teacherId: msg.teacherId, cod: msg.cod});
        const conditions = {classroomId: classroom.dataValues.id, studentId: msg.studentId};
        const data = {hasDoubts: msg.hasDoubts};
        await ClassroomStudentModel.update(conditions, data);
        return await ClassroomController.getClassroomWithStudents(msg.cod, msg.teacherId);
    },

    async studentIsInClassroom(msg) {
        const [classroom] = await ClassroomModel.get({teacherId: msg.teacherId, cod: msg.cod});
        const conditions = {classroomId: classroom.dataValues.id, studentId: msg.studentId};
        const data = {isInClassroom: msg.isInClassroom};
        await ClassroomStudentModel.update(conditions, data);
        return await ClassroomController.getClassroomWithStudents(msg.cod, msg.teacherId);
    },

    async removeStudentFromClassroom(studentId, classroomId, cod, teacherId) {
        await ClassroomStudentModel.deleteByConditions({ studentId, classroomId})
        return await ClassroomController.getClassroomWithStudents(cod, teacherId);
    },

    async getStudentClassroomAndSuscribeToItIfIsNotSuscribed(msg) {
        const [classroom] = await ClassroomModel.get({teacherId: msg.teacherId, cod: msg.cod});
        if (classroom) {

            const [student] = await Model.findOrCreate({auth0Id: msg.auth0Id}, {
                auth0Id: msg.auth0Id,
                picture: msg.picture,
                name: msg.name
            });
            await ClassroomStudentModel.findOrCreate({studentId: student.id, classroomId: classroom.id}, {
                studentId: student.id,
                classroomId: classroom.id
            });
            return classroom;
        } else {
            return null;
        }
    },

    async doIt(data) {
        const [classroom] = await ClassroomModel.get({cod: data.cod, teacherId: data.teacherId});
        await ClassroomStudentModel.update({classroomId: classroom.id}, {doIt: data.doIt});
        return await ClassroomController.getClassroomWithStudents(data.cod, data.teacherId);
    },
    async insertImageIntoDatabase(id, imageName){
        await Model.update({auth0Id: id}, {uploadedPicture:imageName});
        return await ClassroomController.getClassroomWithStudents(data.cod, data.teacherId);
    },

    async setAvatarType(data) {
        await Model.update({id: data.studentId}, {avatarType: data.avatarType});
        return await ClassroomController.getClassroomWithStudents(data.cod, data.teacherId);
    },


    async saveStudentName(data) {
        await Model.update({id: data.id}, {name: data.studentName});
        return await ClassroomController.getClassroomWithStudents(data.cod, data.teacherId);
    },





}

export default Controller;
