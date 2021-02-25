import { Router } from 'express';
import { catchAsync, auth } from '../middleware';
import { User } from '../models';

const router = Router();

router.get(
	'/home',
	auth,
	catchAsync(async (req, res) => {
		const user = await User.findById(req.session!.userId);
		return res.json(user);
	})
);

export default router;
