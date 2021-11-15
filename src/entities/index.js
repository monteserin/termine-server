import studentRoutes from './student/adapters/http';
import studentSockets from './student/adapters/socket';
import teacherRoutes from './teacher/adapters/http';
//import teacherSockets from './teacher/adapters/socket';
import classRoomRoutes from './classroom/adapters/http';
import classRoomSockets from './classroom/adapters/socket';
import authRoutes from './auth/adapters/http';

export const Routes = (app,socketIO) => {
    studentRoutes(app,socketIO);
    teacherRoutes(app);
    classRoomRoutes(app);
    authRoutes(app);
}

export const Sockets = (io, socket) => {
    studentSockets(io, socket);
    //teacherSockets(io, socket);
  //  classRoomSockets(io, socket);
}