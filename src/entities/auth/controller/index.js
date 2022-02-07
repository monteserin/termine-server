import Model from "../model";
import Service from '../service';

const Controller = {
    login(token, isTeacher) {
        return Service().signIn(token, isTeacher);
    }
}

export default Controller;
