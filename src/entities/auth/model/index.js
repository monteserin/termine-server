import Schema from './schema';
import GenericModel from '@Application/repository/generic-model';

const Model = {
    ...GenericModel(Schema),
    isUserInClassroom : (auth0Id, teacherId, cod, isStudent) => Schema.findOne({
        where: {
            auth0Id,
            teacherId,
            cod,
            student: isStudent
        }
    })
};


export default Model;
