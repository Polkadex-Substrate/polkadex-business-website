import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { body, method } = req;
  const { email, captcha } = body;

  if (method === 'POST') {
    if (!email || !captcha) {
      return res.status(422).json({
        message: 'Unproccesable request, please provide the required fields.',
      });
    }
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://hcaptcha.com/siteverify',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        },
        data: `response=${captcha}&secret=${process.env.HCAPTCHA_SECRET_KEY}`,
      });

      if (response.data.success) {
        return res.status(200).send('Ok');
      }
    } catch (error) {
      return res.status(422).send({ message: 'Something went wrong' });
    }
  }
  return res.status(404).send('Not found');
}
