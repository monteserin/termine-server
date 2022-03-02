import express from 'express';
import Controller from "../../controller";
import ClassroomController from "../../../classroom/controller";

import { asyncHandler } from "@Middlwares/error-handler";
// Para operaciones con acceso restringido, introduciremos un segundo parámetro que será la variable restrictedAccess
import restrictedAccess from "@Middlwares/restricted-access";

const router = express.Router();


router.post("/", asyncHandler(async (req, res) => {
    const { body: { id, teacherId } } = req;

    // Compruebo si algún profe tiene ese teacherId

    const teacherData = await Controller.get({ teacherId });
    if (teacherData.length === 0) {
        await Controller.updateById(id, { teacherId });
        res.send({ status: 'teacher created' });
    } else {
        res.send({ status: 'Another teacher has this teacherId' });
    }
}));


router.get("/getTeacherId", asyncHandler(async (req, res) => {
    const { query: { auth0Id } } = req;
    const data = await Controller.get({ auth0Id });
    res.send(data);
}));


router.get("/getLastTeacherCod", asyncHandler(async (req, res) => {
    const { query: { teacherId } } = req;
    const lastCod = await ClassroomController.getMostRecentCod(teacherId)
    res.send(lastCod);
}));

export default app => app.use('/teacher', router);