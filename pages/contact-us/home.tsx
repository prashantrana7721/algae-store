import { getCookieObject } from '@/lib/utils/loginFunctions';

const home = () => {
  const userLogginDetails = getCookieObject();
  return <div>{userLogginDetails.name}</div>;
};

export default home;
