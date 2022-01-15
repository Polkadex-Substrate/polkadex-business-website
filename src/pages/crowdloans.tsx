import { Template } from 'components/Crowdloans';
import Head from 'next/head';
import { useEffect } from 'react';

<Head>
  <title>Help Polkadex secure a Parachain slot. Join the Crowdloan now!</title>
</Head>;
export const Crowdloans = () => {
  useEffect(() => {
    const path = window.location.hash;
    if (path && path.includes('#')) {
      const id = path.replace('#', '');
      const el = window.document.getElementById(id);
      const r = el.getBoundingClientRect();
      window.scrollTo({
        top: r.top,
        behavior: 'smooth',
      });
    }
  });

  return <Template />;
};

export default Crowdloans;
