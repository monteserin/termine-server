import express from 'express';
import Controller from '../../controller';
import {asyncHandler} from "@Middlwares/error-handler";
// Para operaciones con acceso restringido, introduciremos un segundo parámetro que será la variable restrictedAccess
import restrictedAccess from "@Middlwares/restricted-access";

const router = express.Router();
/*
// GET BY ID
router.get('/:id', asyncHandler(async (req, res) => {
    const {query: {id}} = req;
    const data = await Controller.getById(id);
    res.send(data);
}));

// GET BY CONDITIONS
router.get('/:teacherId/:cod', asyncHandler(async (req, res) => {
    const {params: {teacherId, cod}} = req;
    const data = await Controller.get({teacherId, cod});
    res.send(data);
}));
*/
// CREATE
router.post("/", asyncHandler(async (req, res) => {
    const {body: {teacherId, cod}} = req;
    const data = await Controller.createIfNotExistsAndGetClassroom(teacherId, cod);
    res.send(data);
}));

router.get("/getClassroom", asyncHandler(async (req, res) => {
    const {query: {cod, teacherId}} = req;
    const classroom = await Controller.getClassroomWithStudents(cod, teacherId);
    res.send(classroom);
}));

router.post("/updateTxt", asyncHandler(async (req, res) => {
    const {body: {cod, teacherId, txt}} = req;
    const classroom = await Controller.updateTxt(cod, teacherId,txt);
    req.io.emit('classroomUpdated', classroom);
}));

router.post("/newExercise", asyncHandler(async (req, res) => {
    const {body: {cod, teacherId}} = req;
    const updatedClassroom = await Controller.newExercise(cod, teacherId);
    req.io.emit('classroomUpdated', updatedClassroom);

   // await Controller.
//    const classroom = await Controller.newExercise(cod, teacherId);
 //   req.io.emit('newExercise', classroom);
}));


export default app => app.use('/classroom', router);