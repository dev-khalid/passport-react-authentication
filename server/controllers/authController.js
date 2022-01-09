import passport from 'passport';
import { Strategy as GitHubStrategy } from 'passport-github2';
// console.log(
//   '🎈🎈🎈',
//   process.env.GITHUB_CLIENT_ID,
//   process.env.GITHUB_CLIENT_SECRET
// );
passport.use(
  new GitHubStrategy(
    {
      clientID: '437bac6c1744a9c0c591',
      clientSecret: '02b9be0e29d74568a8f58a23015ac57a052642a1',
      callbackURL: '/auth/github/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      console.log('Profile object from strategy', profile);
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  //sign in the user with cookie session setup
  // console.log('User form serialize', user);
  done(null, user);
});

passport.deserializeUser((user, done) => {
  //verify the user with cookie session setup
  // console.log('User from deserialize', user);
  done(null, user);
});
