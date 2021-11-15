import { verifyToken } from '@Application/common/utils/access';
export const getHeader = (req, header) => req.headers[header];

export default async (req, res, next) => {
  const token = getHeader(req, 'authorization');

  if (!token) {
    return res.status(400).send('No token provided.');
  }
  try {
    const { id } = await verifyToken(token);
    if (!id) {
      return res.status(403).send('Wrong credentials');
    }
    req.userId = id;
    return next();
  } catch (err) {
    return res.status(401).send('Failed to authenticate token.');
  }
}