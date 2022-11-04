import * as S from './styles';

export const Hero = () => {
  return (
    <S.Wrapper id="hero">
      <S.Container>
        <S.Content>
          <S.Title>
            <div>
              <h1>Want to list your token on Polkadex Orderbook? </h1>
              <p>
                Listing is now available for projects building on the
                <strong> Ethereum</strong> and{' '}
                <strong>Polkadot ecosystems</strong>!
              </p>
            </div>
            <div>
              <p>
                If your Token is an ERC-20 token or is Substrate- based, we
                would love to hear from you!
                <strong> Share your details below to get started.</strong>
              </p>
            </div>
          </S.Title>
          <S.Form>
            <Input label="Name" placeholder="Enter your name" />
            <Input label="Email" placeholder="Enter your email" />
            <S.Flex>
              <Input
                label="Project name"
                placeholder="Enter your project name"
              />
              <Input label="Token" placeholder="Enter your token name" />
            </S.Flex>
            <Input label="Network" placeholder="Enter your project network" />
            <Input label="Website" placeholder="Enter your project website" />
            <Input
              label="Project twitter handle"
              placeholder="https://twitter.com/..."
            />
            <S.Terms htmlFor="terms">
              <input name="terms" id="terms" type="checkbox" />
              <p>
                Visit our{' '}
                <a href="/testing.com" target="_blank">
                  privacy policy
                </a>{' '}
                to learn how we collect, keep, and process your private
                information.
              </p>
            </S.Terms>
            <button type="button" onClick={() => console.log('Sending...')}>
              Submit
            </button>
          </S.Form>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  );
};

const Input = ({ label, ...props }) => (
  <S.Input>
    <label htmlFor={props.name}>
      <span>{label}</span>
      <input name={props.name} type="text" {...props} />
    </label>
  </S.Input>
);
