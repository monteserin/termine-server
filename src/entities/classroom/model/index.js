import Schema from './schema';
import GenericModel from '@Application/repository/generic-model';
import Student from '../../student/model/schema';
import ClassroomStudent from "../../classroom-student/model/schema";

const Model = {
    ...GenericModel(Schema),
    getClassroomWithStudents(conditions){
        return Schema.findOne({where:conditions,include: Student});
    },
    getMostRecentCod(teacherId) {
        return Schema.findOne({ where: { teacherId },    order: [ [ 'createdAt', 'DESC' ]],
        });
    },
};

export default Model;

