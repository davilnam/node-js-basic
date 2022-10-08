import express from 'express';
import homeController from '../controller/homeController'

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/detail/user/:userId', homeController.getDatailPage);
    router.post('/create-new-user', homeController.createNewUser)
    router.get('/about', (req, res) => {
        res.send("I'm Nam");
    })

    return app.use('/', router);
}

export default initWebRoute;