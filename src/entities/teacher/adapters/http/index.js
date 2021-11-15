import express from 'express';
import Controller from "../../controller";
import {asyncHandler} from "@Middlwares/error-handler";
// Para operaciones con acceso restringido, introduciremos un segundo parámetro que será la variable restrictedAccess
import restrictedAccess from "@Middlwares/restricted-access";

const router = express.Router();


router.post("/", asyncHandler(async (req, res) => {
    const {body: { auth0Id, id}} = req;

    const teacherData = await Controller.getById(id);
    if (!teacherData) {
        await Controller.create({auth0Id});
        res.send({status:'teacher created'});
    } else {
        if (teacherData.auth0Id !== auth0Id) {
            res.send({status:'Another teacher has this teacherId'});
        } else {
            res.send({status:'This teacherId is already yours'});
        }
    }
}));

export default app => app.use('/teacher', router);