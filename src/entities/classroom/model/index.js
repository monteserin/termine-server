import Schema from './schema';
import GenericModel from '@Application/repository/generic-model';
import Student from '../../student/model/schema';
import ClassroomStudent from "../../classroom-student/model/schema";

const Model = {
    ...GenericModel(Schema),
    getClassroomWithStudents(conditions){
        console.log('getClassroomWithStudents');

        return Schema.findOne({where:conditions,include: Student});
    }
};

export default Model;

