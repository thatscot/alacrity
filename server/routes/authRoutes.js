const authRouter = require("express").Router();
const passport = require("passport");
const CLIENT_URL = "http://localhost:3000/";

// Handle successful login (user authenticated).
authRouter.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successful authentication",
      user: req.user,
      cookies: req.cookies,
    });
  }
});

// Handle failed login (user not authenticated).
authRouter.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failed to authenticate",
  });
});

// Handle logout
authRouter.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

//     ---------- GOOGLE SPECIFIC ROUTES ----------     //

// Set request scope, user profile and email returned on successful auth.
authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Set redirect routes upon authentication success or failure.
authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = authRouter;
