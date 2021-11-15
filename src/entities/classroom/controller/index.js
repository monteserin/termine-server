import Model from "../model";
import ClassroomStudent from "../../classroom-student/model";

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
    async getClassroomWithStudents(cod, teacherId) {
        const classroom = await Model.getClassroomWithStudents({cod, teacherId});
        return classroom;
    },
    async createIfNotExistsAndGetClassroom(teacherId, cod) {
        let data = await this.getClassroomWithStudents(teacherId, cod);
        if (!data) {
            await Model.create({teacherId, cod});
            return await this.getClassroomWithStudents(teacherId, cod);
        }
        return data;
    },
    async updateTxt(cod, teacherId, txt) {
        const [classroom] = await Model.get({cod, teacherId});
        await Model.updateById( classroom.id, {txt});
        return await Model.getClassroomWithStudents({cod, teacherId});
    },
    async newExercise(cod, teacherId) {
        const [classroom] = await Model.get({cod, teacherId});
        await ClassroomStudent.update({classroomId:classroom.dataValues.id},{hasTerminated:false});
        return await Model.getClassroomWithStudents({cod, teacherId});
    },
}

export default Controller;
