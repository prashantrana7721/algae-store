import { LoggingDetails } from '@/interfaces/authentication/authenticationInterface';
import Cookies from 'js-cookie';

export const setCookieDetails = (authenticationDetails: LoggingDetails) => {
  Cookies.set('emailId', authenticationDetails.emailId);
  Cookies.set('name', authenticationDetails.name);
  Cookies.set('role', authenticationDetails.role);
  Cookies.set('jwtToken', authenticationDetails.jwtToken);
};

export const getCookieObject = () => {
  const authenticationObj: LoggingDetails = {
    name: Cookies.get('name')!,
    emailId: Cookies.get('emailId')!,
    role: Cookies.get('role')!,
    jwtToken: Cookies.get('jwtToken')!,
  };
  return authenticationObj;
};

export const removeAllCookies = () => {
  Cookies.remove('emailId');
  Cookies.remove('name');
  Cookies.remove('role');
  Cookies.remove('jwtToken');
};
