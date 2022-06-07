import axios from 'axios';
import { Preview as PreviewComponent } from 'components/Careers';

export const Preview = ({ data, error = '' }) => {
  return <PreviewComponent data={data} error={error} />;
};

export default Preview;

Preview.getInitialProps = async (ctx) => {
  try {
    const { data }: any = await axios.get(
      `${process.env.WORKABLE_URL}/spi/v3/jobs/${ctx.query.id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.WORKABLE_TOKEN}`,
          'Content-Type': 'application/json',
        },
      },
    );
    return { data };
  } catch (error) {
    return { error: error.message };
  }
};
