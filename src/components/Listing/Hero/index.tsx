import axios from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import useSWR from 'swr';
import * as Yup from 'yup';

import * as S from './styles';

export const listingFormValidations = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'Enter your original name!')
    .max(30, 'Enter your original name')
    .required('Required'),
  emailListing: Yup.string()
    .email('Must be a valid email')
    .required('Required'),
  projectName: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too long!')
    .required('Required'),
  token: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too long!')
    .required('Required'),
  website: Yup.string().url('Must be a valid url').required('Required'),
  twitter: Yup.string().url('Must be a valid url').required('Required'),
  network: Yup.string().oneOf(['Ethereum', 'Polkadot']).required('Required'),
  termsAccepted: Yup.boolean().oneOf([true]).required('Required'),
  policyAccepted: Yup.boolean().oneOf([true]).required('Required'),
});
const instance = axios.create({
  baseURL: process.env.FRESHDESK_BASE_URL,
  auth: {
    username: process.env.FRESHDESK_API,
    password: '',
  },
});

export const Hero = () => {
  const [state, setState] = useState(false);
  const [succesFull, setSuccesFull] = useState(false);

  const {
    errors,
    values,
    touched,
    handleSubmit,
    getFieldProps,
    isValid,
    dirty,
  } = useFormik({
    initialValues: {
      userName: '',
      emailListing: '',
      projectName: '',
      token: '',
      network: 'Ethereum',
      website: '',
      twitter: '',
      termsAccepted: false,
      policyAccepted: false,
    },
    validationSchema: listingFormValidations,
    onSubmit: () => setState(true),
  });
  type Fetcher = {
    url: string;
    email: string;
    network: string;
    userName: string;
    website: string;
    token: string;
    twitter: string;
    projectName: string;
  };
  const fetcher = async ({
    url,
    email,
    network,
    userName,
    website,
    token,
    twitter,
    projectName,
  }: Fetcher) => {
    const { data } = await instance.post(url, {
      description: `<div style ='font-family:Arial,Helvetica,sans-serif'><h2 style ='font-size:15px;font-weight:500;'>Hello Polkadex Team, I'm interested in listing my project on your platform.</h2><table style ='width:519.140625px;height:168px'><tbody><tr style ='height:23.84375px'><td style ='width:135px;height:23.84375px'>My name</td><td style ='width:377.140625px;height:23.84375px'>${userName}</td></tr><tr style ='height:23px'><td style ='width:135px;height:23px'>Email</td><td style ='width:377.140625px;height:23px'>${email}</td></tr><tr style ='height:23px'><td style ='width:135px;height:23px'>Project name</td><td style ='width:377.140625px;height:23px'>${projectName}</td></tr><tr style ='height:23px'><td style ='width:135px;height:23px'>Token</td><td style ='width:377.140625px;height:23px'>${token}</td></tr><tr style ='height:23px'><td style ='width:135px;height:23px'>Network</td><td style ='width:377.140625px;height:23px'>${network}</td></tr><tr style ='height:23px'><td style ='width:135px;height:23px'>Website</td><td style ='width:377.140625px;height:23px'>${website}</td></tr><tr style ='height:23px'><td style ='width:135px;height:23px'>Project twitter</td><td style ='width:377.140625px;height:23px'>${twitter}</td></tr></tbody></table></div>`,
      priority: 1,
      status: 2,
      subject: `Orderbook listing ${projectName} - ${token}`,
      email,
      custom_fields: {
        cf_network: network,
      },
      type: 'Listing',
    });
    setSuccesFull(true);
    setState(false);
    return data;
  };

  useSWR(state ? '/tickets' : null, (e) =>
    fetcher({
      url: e,
      email: values.emailListing.toLowerCase(),
      network: values.network,
      userName: values.userName,
      website: values.website.toLowerCase(),
      token: values.token.toUpperCase(),
      twitter: values.twitter,
      projectName: values.projectName,
    }),
  );

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
          {succesFull ? (
            <S.Success>
              <div>
                <img src="/img/doneIcon.svg" alt="done" />
              </div>
              <p>
                Thank you for submitting your details! You will shortly receive
                an email from <strong> listing@polkadex.trade </strong> with
                further instructions.
              </p>
            </S.Success>
          ) : (
            <S.Form onSubmit={handleSubmit}>
              <Input
                {...getFieldProps('userName')}
                label="Name"
                placeholder="Enter your name"
                error={errors.userName && touched.userName && errors.userName}
              />
              <Input
                {...getFieldProps('emailListing')}
                label="Email"
                placeholder="Enter your email"
                error={
                  errors.emailListing &&
                  touched.emailListing &&
                  errors.emailListing
                }
              />
              <S.Flex>
                <Input
                  {...getFieldProps('projectName')}
                  label="Project Name"
                  placeholder="Enter your project name"
                  error={
                    errors.projectName &&
                    touched.projectName &&
                    errors.projectName
                  }
                />
                <Input
                  {...getFieldProps('token')}
                  label="Token Ticker"
                  placeholder="Enter your token ticker"
                  error={errors.token && touched.token && errors.token}
                />
              </S.Flex>
              <InputSelect
                {...getFieldProps('network')}
                label="Network"
                placeholder="Enter your project network"
                error={errors.network && touched.network && errors.network}
              />
              <Input
                {...getFieldProps('website')}
                label="Website"
                placeholder="Enter your project website"
                error={errors.website && touched.website && errors.website}
              />
              <Input
                {...getFieldProps('twitter')}
                label="Project twitter handle"
                placeholder="https://twitter.com/..."
                error={errors.twitter && touched.twitter && errors.twitter}
              />
              <S.TermsWrapper>
                <S.Terms htmlFor="terms">
                  <input
                    {...getFieldProps('policyAccepted')}
                    name="policyAccepted"
                    id="policyAccepted"
                    type="checkbox"
                  />
                  <p>
                    Visit our{' '}
                    <a
                      href="https://github.com/Polkadex-Substrate/Docs/blob/master/Polkadex_Privacy_Policy.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      privacy policy
                    </a>{' '}
                    to learn how we collect, keep, and process your private
                    information.
                  </p>
                </S.Terms>
                <S.Terms htmlFor="terms">
                  <input
                    {...getFieldProps('termsAccepted')}
                    name="termsAccepted"
                    id="termsAccepted"
                    type="checkbox"
                  />
                  <p>
                    I have read and understood{' '}
                    <a
                      href="https://github.com/Polkadex-Substrate/Docs/blob/master/Polkadex_Privacy_Policy.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Polkadex Listing Guidelines
                    </a>
                    .
                  </p>
                </S.Terms>
              </S.TermsWrapper>

              <button type="submit" disabled={!(isValid && dirty)}>
                Submit
              </button>
            </S.Form>
          )}
        </S.Content>
      </S.Container>
    </S.Wrapper>
  );
};

const Input = ({ label, error, ...props }) => (
  <S.InputWrapper>
    <S.Input>
      <label htmlFor={props.name}>
        <span>{label}</span>
        <input name={props.name} type="text" {...props} />
      </label>
    </S.Input>
    {!!error && <p>{error}</p>}
  </S.InputWrapper>
);

const InputSelect = ({ label, error, ...props }) => (
  <S.InputWrapper>
    <S.Input hasArrow>
      <label htmlFor={props.name}>
        <span>{label}</span>
        <select name={props.name} id={props.name} {...props}>
          <option value="Ethereum">Ethereum</option>
          <option value="Polkadot">Polkadot</option>
        </select>
      </label>
    </S.Input>
    {!!error && <p>{error}</p>}
  </S.InputWrapper>
);
