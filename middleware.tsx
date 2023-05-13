import { NextResponse } from 'next/server';

const protectedPages = ['home', 'contact-us'];
export default function middleware(req: any) {
  let verify = req.cookies.get('jwtToken');
  let url = req.url;

  if (!verify && url.includes(...protectedPages)) {
    return NextResponse.redirect('http://localhost:3000/login');
  }
}
