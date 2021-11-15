import Model from "../model";
import Service from '../service';

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
    login(token, isTeacher) {
        return Service().signIn(token, isTeacher);
    }
}

export default Controller;
