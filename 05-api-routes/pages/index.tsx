import { useRef } from "react"

export default function Home() {
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
      .then(data => console.log(data));
  }

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
    </div>
  )
}
