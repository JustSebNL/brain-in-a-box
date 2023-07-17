import { useSession, signIn } from 'next-auth/client';
import { Button } from 'react-bootstrap';

function Login() {
  const [session, loading] = useSession();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (session) {
    return <div>You are logged in as {session.user.email}</div>;
  }

  return <Button onClick={() => signIn()}>Log in</Button>;
}

export default Login;