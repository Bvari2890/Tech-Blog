const forAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
      res.redirect('/signup?error=noLogin');
    } else {
      next();
    }
  };
  
  module.exports = forAuth;