const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(
  '634958844879-f75bn063gdfcgk9e4a4c41h280nq48gq.apps.googleusercontent.com'
);

const googleAuth = async (token) => {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience:
      '634958844879-f75bn063gdfcgk9e4a4c41h280nq48gq.apps.googleusercontent.com',
  });
  const payload = ticket.getPayload();
  const { sub, email, name, picture } = payload;
  const userId = sub;
  return { userId, email, fullName: name, photoUrl: picture };
};

module.exports = googleAuth;
