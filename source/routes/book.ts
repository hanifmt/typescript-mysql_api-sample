import { Router } from 'express';
import bookController from '../controllers/book';

const router = Router();

router.get('/', bookController.get);
router.get('/:id', bookController.find);
router.post('/', bookController.create);
router.put('/:id', bookController.update);
router.delete('/:id', bookController.del);

export = router;
