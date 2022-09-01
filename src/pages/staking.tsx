import axios from 'axios';
import { Template } from 'components/Staking';

export const Staking = ({ data, error = '' }) => (
  <Template data={data} error={error} />
);

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
    /* Getting the APY from the staking scraper. */
    const apy: any = await axios.get(
      `${process.env.STAKING_SCRAP}/api/infos/1`,
    );
    return {
      data: {
        metadata: metadata?.data?.data,
        tokenInfo: tokenInfo?.data?.data?.detail?.PDEX,
        apy: apy?.data?.data?.attributes?.value,
        apyValidator: apy?.data?.data?.attributes?.apyValidator,
      },
    };
  } catch (error) {
    return { error: error.message };
  }
};
