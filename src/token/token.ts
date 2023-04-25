import jwt, { SignOptions } from 'jsonwebtoken';
import TokenInterface from '../interfaces/token.interfaces';

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const jwtConfig:SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generatoToken = (payload:TokenInterface) => {
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
};

export default generatoToken;
