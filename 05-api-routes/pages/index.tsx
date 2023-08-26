import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [feedbacks, setFeedbacks] = useState<any[]>([]);
  const emailRef = useRef<HTMLInputElement>(null);
  const feedbackRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: any) => {
    event.preventDefault();
    const email = emailRef.current?.value;
    const feedback = feedbackRef.current?.value;
    const reqBody = { email, feedback };

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(data => setFeedbacks([...feedbacks, data.feedback]));
  }

  const loadFeedbacks = () => fetch('/api/feedback').then(res => res.json()).then(json => setFeedbacks(json.data));

  useEffect(() => {
    loadFeedbacks();
  }, []);

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={onSubmit}>
        <div>
          <span>E-mail</span>
          <input ref={emailRef} />
        </div>
        <div>
          <span>Feedback</span>
          <input ref={feedbackRef} />
        </div>
        <button type="submit">Submitt</button>
      </form>
      <hr></hr>
      <h1>Feedbacks</h1>
      <div>
        {feedbacks.map(feedback => <div key={feedback.email}>{feedback.feedback}</div>)}
      </div>
    </div>
  )
}
