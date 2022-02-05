import Model from "../model";
import Service from '../service';

const Controller = {
    login(token, isTeacher) {
        console.log('ññññññññññññññññññññññññññ');
        return Service().signIn(token, isTeacher);
    }
}

export default Controller;
