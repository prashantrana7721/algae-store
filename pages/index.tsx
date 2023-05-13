import { removeAllCookies } from '@/lib/utils/loginFunctions';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const logoutPlease = () => {
    removeAllCookies();
    router.push('/login');
  };
  return (
    <div>
      <button onClick={logoutPlease}>logout</button>
    </div>
  );
}
