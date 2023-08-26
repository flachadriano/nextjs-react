import { readFileSync, writeFileSync } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path';


type Data = {
  message: string
  feedback?: any
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const email = req.body.email;
    const feedback = req.body.feedback;

    const newFeedback = { id: new Date().toISOString(), email, feedback };
    const filePath = path.join(process.cwd(), 'data', 'feedback.json');
    const fileData = readFileSync(filePath);
    const data = JSON.parse(fileData.toString());
    data.push(newFeedback);
    writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: 'Success', feedback: newFeedback });
  } else {
    res.status(200).json({ message: 'Blank response' })
  }
}
