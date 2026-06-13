import { Seo } from 'components';
import dynamic from 'next/dynamic';

const AccessDeniedTemplate = dynamic(
  () =>
    import('components/AccessDenied').then((mod) => mod.AccessDeniedTemplate),
  {
    ssr: false,
  },
);
const AccessDenied = () => (
  <>
    <Seo title="Polkadex - Access Denied" path="/accessDenied" noindex />
    <AccessDeniedTemplate />
  </>
);

export default AccessDenied;
