import { getData } from "../api/feedback"

export async function getStaticProps() {
  const data = await getData();

  return {
    props: {
      feedbackItems: data
    }
  }
}

interface FeedbackPageProps {
  feedbackItems: any[]
}

export default function FeedbackPage({ feedbackItems }: FeedbackPageProps) {
  return (
    <ul>
      {feedbackItems.map(i => <li key={i.id}>{i.feedback}</li>)}
    </ul>
  )
}