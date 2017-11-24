// Register the API routes with express router
import express from 'express';
import {
  signUp,
  signIn,
  getUserProfile,
  updateUserProfile
} from '../controllers';

// Express router
const router = express.Router();

router.route('/signup')
  .get(signUp);
router.route('/signin')
  .get(signIn);
router.route('/profile')
  .get(getUserProfile);
router.route('/update-profile')
  .get(updateUserProfile);

export default router;
