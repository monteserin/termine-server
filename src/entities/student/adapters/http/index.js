import express from 'express';
import Controller from "../../controller";
import {asyncHandler} from "@Middlwares/error-handler";
import multer from "multer";
import path from "path";

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
    res.send(data);
}));
router.post("/hasTerminated", asyncHandler(async (req, res) => {
    const updatedClassroom  = await Controller.studentHasTerminated(req.body);
    req.io.emit('classroomUpdated', updatedClassroom);
}));

router.post("/hasDoubts", asyncHandler(async (req, res) => {
    const updatedClassroom  = await Controller.studentHasDoubts(req.body);
    req.io.emit('classroomUpdated', updatedClassroom);
}));

router.post("/isInClassroom", asyncHandler(async (req, res) => {
    const updatedClassroom  = await Controller.studentIsInClassroom(req.body);
    req.io.emit('classroomUpdated', updatedClassroom);
}));

router.post("/doit", asyncHandler(async (req, res) => {
    const updatedClassroom  = await Controller.doIt(req.body);
    req.io.emit('classroomUpdated', updatedClassroom);
}));

router.post('/uploadavatar', restrictedAccess, asyncHandler(async (req, res) => {
    console.log("Request ---", req.body);

    upload(req, res, (err) => {
        console.log("Request ---", req.body);
        console.log("Request file ---", req.file);//Here you get file.
        /*Now do where ever you want to do*/
        if(!err && req.file){
            //req.userId
            Controller.insertImageIntoDatabase(req.body.studentId, req.file.filename);
            return res.send(200).end();

        }
        else{
            console.log('22222222222222')
            return res.send(400).end();
        }
    });

}));

const storage = multer.diskStorage({
    destination: "./public/uploads/",
    filename: function(req, file, cb){
        const imageName = "image-" + req.userId + path.extname(file.originalname);
        cb(null, imageName);
    }
});
 const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
}).single("myImage");


export default app => app.use('/student', router);