import Schema from './schema';
import GenericModel from '@Application/repository/generic-model';

const Model = {
    ...GenericModel(Schema),
    updateHasTerminated(conditions, hasTerminated){
        return Schema.update({hasTerminated},{where:conditions});
    }
};

export default Model;

