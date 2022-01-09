import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/login/success', (req, res) => {
  //this route should be called from frontend . to authenticate .
  if (req.user) {
    res.status(200).json({
      success: true,
      message: 'successful login',
      user: req.user,
    });
  }
});
router.get('/login/failed', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'failed login',
  });
});
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('http://localhost:3000/login');
});
router.get('/github', passport.authenticate('github', { scope: 'profile' })); //naming the route path as /github is just a convention that increase code readability . we can use whatever we want .
// console.log(process.env.CLIENT_URL);
router.get(
  '/github/callback',
  passport.authenticate('github', {
    successRedirect: 'http://localhost:3000',
    failureRedirect: '/login/failed',
  })
);

export default router;
