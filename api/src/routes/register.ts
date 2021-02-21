import { Router } from 'express';
import { logIn } from '../auth';
import { guest } from '../middleware';
import { User } from '../models';
import { registerSchema } from '../validation';

const router = Router();

router.post('/register', guest, async (req, res) => {
	await registerSchema.validateAsync(req.body, { abortEarly: false });

	const { email, ...args } = req.body;

	const found = await User.exists({ email });
	if (found) return res.status(400).json({ message: 'Invalid Email...' });

	const user = await User.create({ ...args, email });

	logIn(req, user.id);

	res.json({ message: 'User created successfully' });
});

export default router;
