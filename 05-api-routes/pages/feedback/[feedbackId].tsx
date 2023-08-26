import { useRouter } from "next/router";
import { useEffect, useState } from "react"

export default function FeedbackDetailPage() {
  const router = useRouter();
  const [feedback, setFeedback] = useState<any>();
  const feedbackId = router.query.feedbackId;

  useEffect(() => {
    fetch(`/api/${feedbackId}`).then(res => res.json()).then(res => setFeedback(res.feedback));
  }, [feedbackId]);

  if (!feedback) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <div>
        <span>Email: </span>
        <span>{feedback.email}</span>
      </div>
      <div>
        <span>Feedback: </span>
        <span>{feedback.feedback}</span>
      </div>
    </div>
  )
}