var GitHubStrategy = require('passport-github').Strategy;
const passport = require('passport');

const githubPassport = passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/user/callback",
},
async function(_, __, profile, done) {
  return done(null, profile);
},
));

module.exports = githubPassport;
