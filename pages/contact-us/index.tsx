import { getCookieObject } from '@/lib/utils/loginFunctions';

const ContactUs = () => {
  const userLogginDetails = getCookieObject();
  return <div>{userLogginDetails.name}</div>;
};

export default ContactUs;
