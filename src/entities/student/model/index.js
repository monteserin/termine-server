import Schema from './schema';
import GenericModel from '@Application/repository/generic-model';

const Model = {
    ...GenericModel(Schema),
    isUserInClassroom: (auth0Id, teacherId, cod) => Schema.findOne({
        where: {
            auth0Id,
            teacherId,
            cod
        }
    })
};


export default Model;
