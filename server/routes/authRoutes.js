import express from 'express';

import {
	getUsers,
	getUser,
	login,
	register,
	updateUser,
	updatePassword,
	deleteUser,
} from '../controllers/authController.js';

import protectRoute from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protectRoute, getUsers);
router.get('/user/:id', protectRoute, getUser);
router.post('/login', login);
router.post('/register', register);
router.put('/:id', protectRoute, updateUser);
router.put('/password/:id', protectRoute, updatePassword);
router.delete('/:id', protectRoute, deleteUser);

export default router;
