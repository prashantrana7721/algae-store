import { removeAllCookies } from '@/lib/utils/loginFunctions';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

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
