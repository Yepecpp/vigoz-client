import React, { useEffect } from 'react';
import Cookies from 'universal-cookie';
function NoPage() {
  const cookies = new Cookies();
  useEffect(() => {
    cookies.remove();
    console.log('removed auth cookie');
    console.log(cookies.get('auth'));
  });
  return <div>NoPagehey</div>;
}

export default NoPage;
