import type { NextApiRequest, NextApiResponse } from 'next'
import { getData } from './feedback';

type Data = {
  feedback: any
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const feedbackId = req.query.feedbackId;
  const data = getData();
  const feedback = data.find((f: any) => f.id === feedbackId);
  res.status(200).json({ feedback })
}
