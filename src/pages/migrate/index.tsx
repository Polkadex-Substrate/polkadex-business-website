import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function Migration() {
  const router = useRouter();
  useEffect(() => {
    router.push('/migrate/mainnet');
  }, []);
  return <div />;
}
