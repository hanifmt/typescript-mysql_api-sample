import { Router } from 'express';
import authorController from '../controllers/author';

const router = Router();

router.get('/', authorController.get);
router.get('/:id', authorController.find);
router.post('/', authorController.create);
router.put('/:id', authorController.update);
router.delete('/:id', authorController.del);

export = router;
