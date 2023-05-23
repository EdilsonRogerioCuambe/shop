import { Router } from 'express';
import multer from 'multer';

import { loginAdmin, registrarAdmin, getAdmin } from '../controllers/admin.controllers.js';

const upload = multer({ dest: 'uploads/' });

const router = Router();

router.post('/cadastro', upload.single('foto'), registrarAdmin);
router.post('/login', loginAdmin);

router.get('/usuario', getAdmin);

export default router;
