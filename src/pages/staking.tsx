import axios from 'axios';
import { Template } from 'components/Staking';

export const Staking = ({ data, error = '' }) => {
  return <Template data={data} error={error} />;
};

export default Staking;

Staking.getInitialProps = async (ctx) => {
  try {
    axios.defaults.headers.common['x-api-key'] = `${process.env.SUBSCAN_API}`;
    const metadata: any = await axios.get(
      `${process.env.SUBSCAN_URL}/scan/metadata`,
    );
    const tokenInfo: any = await axios.get(
      `${process.env.SUBSCAN_URL}/scan/token`,
    );

    const apy: any = await axios.get(
      `${process.env.STAKING_SCRAP}/api/infos/1`,
    );

    metadata.data.data.apy = apy.data.data.attributes.value;

    return {
      data: {
        metadata: metadata?.data?.data,
        tokenInfo: tokenInfo?.data?.data?.detail?.PDEX,
      },
    };
  } catch (error) {
    return { error: error.message };
  }
};
