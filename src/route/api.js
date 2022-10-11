import express from "express";
import APIController from "../controller/APIController";

let router = express.Router();

const initAPIRoute = (app) => {
    router.get('/users', APIController.getAllUsers); // method get -> read data
    router.post('/create-user', APIController.createNewUser); // method post -> create data
    router.put('/update-user', APIController.updateUser); // method put -> update data
    router.delete('/delete-user/:id', APIController.deleteUser); // method delete -> delete data
    return app.use('/api/v1', router);
}

export default initAPIRoute;