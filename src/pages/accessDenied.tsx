import dynamic from 'next/dynamic';

const AccessDeniedTemplate = dynamic(
  () =>
    import('components/AccessDenied').then((mod) => mod.AccessDeniedTemplate),
  {
    ssr: false,
  },
);
const AccessDenied = () => <AccessDeniedTemplate />;

export default AccessDenied;
