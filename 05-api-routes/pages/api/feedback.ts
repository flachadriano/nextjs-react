import { readFileSync, writeFileSync } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path';

type Data = {
  message: string
  feedback?: any
  data?: any
}

function getPath() {
  return path.join(process.cwd(), 'data', 'feedback.json');
}

function getData() {
  const fileData = readFileSync(getPath());
  const data = JSON.parse(fileData.toString());
  return data;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const email = req.body.email;
    const feedback = req.body.feedback;

    const newFeedback = { id: new Date().toISOString(), email, feedback };
    const data = getData();
    data.push(newFeedback);
    writeFileSync(getPath(), JSON.stringify(data));
    res.status(201).json({ message: 'Success', feedback: newFeedback });
  } else if (req.method === 'GET') {
    res.status(200).json({ message: 'Success', data: getData() })
  } else {
    res.status(200).json({ message: 'Blank response' })
  }
}
