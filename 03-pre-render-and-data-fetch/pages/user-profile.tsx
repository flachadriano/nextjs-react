export async function getServerSideProps({ params, req, res }: any) {
  return {
    props: {
      username: 'Flach'
    }
  }
}

interface UserProfilePageProps {
  username: string
}

export default function UserProfilePage({ username }: UserProfilePageProps) {
  return (
    <h1>{username}</h1>
  )
}
