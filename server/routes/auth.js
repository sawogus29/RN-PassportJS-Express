const express = require('express');
const passport = require('passport');
const NaverStrategy = require('passport-naver').Strategy;

const MOBILE_APP_URL = process.env['MOBILE_APP_URL'];

passport.use(
  new NaverStrategy(
    {
      clientID: process.env['NAVER_CLIENT_ID'],
      clientSecret: process.env['NAVER_CLIENT_SECRET'],
      callbackURL: '/auth/my-redirect/naver',
    },
    // 4. Save User Info to DB & req.user
    function verify(accessToken, refreshToken, profile, cb) {
      /*
			// DB에서 기존유저 확인 및 신규 유저 저장
			if (profile.id not in DB) { insertNewUserToDB(profile) }			// Pseudo Code
			// DB에서 유저 정보 가져오기
			const user = getUserFromDB(profile.id)  // Pseudo Code
      */
      // const user = {
      //   name: profile.displayName,
      //   email: profile.emails[0].value,
      // };
      const user = profile;
      // req.user로 유저 정보 넘기기
      cb(null, user);
    }
  )
);

const router = express.Router();

// 1. Send Authorization Request
router.get('/my-signin/naver', passport.authenticate('naver'));

// 2. Get Authorization Code
router.get(
  '/my-redirect/naver',
  // 3. Get Access Token & User Info
  passport.authenticate('naver', {
    // successRedirect: 'http://google.com',
    failureRedirect: `${MOBILE_APP_URL}/redirect?error=true`,
    session: false,
  }),
  // 5. Issue JWT Token & Redirect to Mobile App
  (req, res, next) => {
    // const jwt_token = issueJwtToken(req.user); // Pseudo Code
    const jwt_token = 'xxxxxx';
    return res.redirect(`${MOBILE_APP_URL}/redirect?token=${jwt_token}`);
  }
);

module.exports = router;
