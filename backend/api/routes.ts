import { Router } from 'express';
import * as visitorController from './controllers/visitorController';
import * as exhibitController from './controllers/exhibitController';

const router = Router();

router.get('/visitors', visitorController.listVisitors);
router.get('/visitors/:id', visitorController.getVisitor);
router.post('/visitors', visitorController.createVisitor);
router.put('/visitors/:id', visitorController.updateVisitor);
router.delete('/visitors/:id', visitorController.deleteVisitor);

router.get('/exhibits', exhibitController.listExhibits);
router.get('/exhibits/:id', exhibitController.getExhibit);
router.post('/exhibits', exhibitController.createExhibit);
router.put('/exhibits/:id', exhibitController.updateExhibit);
router.delete('/exhibits/:id', exhibitController.deleteExhibit);

export default router;