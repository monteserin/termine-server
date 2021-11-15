import {socketHandler} from '@Middlwares/error-handler';
import Controller from '../../controller';
import ClassroomController from '../../../classroom/controller';

const StartSocketServer = (io, socket) => {
    socket.on('studentSuscribeOrLogInClassroom', socketHandler(async (msg) => {
        const classroom = await Controller.getStudentClassroomAndSuscribeToItIfIsNotSuscribed(msg);
        io.emit('classroomStudents', classroom);
    }));


    socket.on('studentHasDoubts', socketHandler(async (msg) => {
        const updatedClassroom  =await Controller.studentHasDoubts(msg);
        io.emit('studentHasTerminated', updatedClassroom);
    }));

    socket.on('emitStudentsUpdated',socketHandler(async (msg) => {
        const updatedClassroom = await ClassroomController.getClassroomWithStudents(msg.cod, msg.teacherId);
        io.emit('studentsUpdated', updatedClassroom);
    }))
};

export default StartSocketServer;
