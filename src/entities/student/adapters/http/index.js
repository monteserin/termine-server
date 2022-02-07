import express from 'express';
import Controller from "../../controller";
import {asyncHandler} from "@Middlwares/error-handler";
import multer from "multer";
import path from "path";
import {uploadStream} from '../../../../application/utils/cloudinary';

// Para operaciones con acceso restringido, introduciremos un segundo parámetro que será la variable restrictedAccess
import restrictedAccess from "@Middlwares/restricted-access";


const router = express.Router();

router.post("/", asyncHandler(async (req, res) => {
    const {body: {teacherId, auth0Id, cod, picture, name}} = req;
    const data = await Controller.getStudentClassroomAndSuscribeToItIfIsNotSuscribed({
        teacherId,
        auth0Id,
        cod,
        picture,
        name
    })

    console.log(data)
    res.send(data);
}));

router.post("/removeFromClassroom", asyncHandler(async (req, res) => {
    const {body: {studentId, classroomId, cod, teacherId}} = req;
    await Controller.removeStudentFromClassroom(studentId, classroomId, cod, teacherId);
    const updatedClassroom = await Controller.studentHasTerminated(req.body);
    req.io.emit('classroomUpdated', updatedClassroom);
}));


router.post("/hasTerminated", asyncHandler(async (req, res) => {
    const updatedClassroom = await Controller.studentHasTerminated(req.body);
    req.io.emit('classroomUpdated', updatedClassroom);
    res.send(200);
}));

router.post("/hasDoubts", asyncHandler(async (req, res) => {
    const updatedClassroom = await Controller.studentHasDoubts(req.body);
    req.io.emit('classroomUpdated', updatedClassroom);
    res.send(200);
}));

router.post("/isInClassroom", asyncHandler(async (req, res) => {
    const updatedClassroom = await Controller.studentIsInClassroom(req.body);
    req.io.emit('classroomUpdated', updatedClassroom);
    res.send(200);
}));

router.post("/doit", asyncHandler(async (req, res) => {
    const updatedClassroom = await Controller.doIt(req.body);
    req.io.emit('classroomUpdated', updatedClassroom);
    res.send(200);
}));


// Multer debe usarse como middleware
const storage2 = multer.diskStorage({
    destination: "./public/uploads/",
    filename: function (req, file, cb) {
        const imageName = "image-" + req.userId + path.extname(file.originalname);
        cb(null, imageName);
    }
});

const storage = multer.memoryStorage({
    destination: "./public/uploads/",
});
const upload = multer({storage})


router.post('/uploadavatar', upload.single('file'), asyncHandler(async (req, res) => {
    const auth0Id = req.body.auth0Id;

    if (req.file) {
        const result = await uploadStream(req.file.buffer, {folder:'termine'});
        const updatedClassroom = await Controller.insertImageIntoDatabase(auth0Id, result.secure_url);
        req.io.emit('classroomUpdated', updatedClassroom);
    }
    res.send(200);
}));

router.post('/setAvatarType', asyncHandler(async (req, res) => {
    const {body: {avatarType, studentId, cod, teacherId}} = req;
    const updatedClassroom = await Controller.setAvatarType({avatarType,studentId, cod, teacherId});
    req.io.emit('classroomUpdated', updatedClassroom);
    res.send(200);
}));

router.post('/saveStudentName', asyncHandler(async (req, res) => {
    const {body: {id, studentName, cod, teacherId}} = req;
    console.log('ooooooooooooooooooooooooooo')
    const updatedClassroom = await Controller.saveStudentName({id,studentName, cod, teacherId});
    req.io.emit('classroomUpdated', updatedClassroom);
    res.send(200);
}));


export default app => app.use('/student', router);