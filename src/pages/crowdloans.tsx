import { Template } from 'components/CrowdloansContribute';
import { useEffect } from 'react';

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
