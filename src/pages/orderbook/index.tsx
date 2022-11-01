import axios from 'axios';
import { Template } from 'components/Careers';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const Orderbook = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/orderbook');
  });
  return <div />;
};

export default Orderbook;
