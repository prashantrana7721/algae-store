import { ADMIN_AUTHENTICATION } from '@/lib/demo-data/loginDemoData';
import { setCookieDetails } from '@/lib/utils/loginFunctions';
import { useRouter } from 'next/router';
import { useState } from 'react';
const index = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const loginPlz = () => {
    setCookieDetails(ADMIN_AUTHENTICATION);
    router.push('/home');
  };
  return (
    <div>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={loginPlz}>Login</button>
    </div>
  );
};

export default index;
