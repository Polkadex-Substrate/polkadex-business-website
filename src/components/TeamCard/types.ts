type SocialMedia = {
  name: 'github' | 'telegram' | 'twitter' | 'linkedin';
  link: string;
};
type Props = {
  name: string;
  image: string;
  position: string;
  socialMedia?: SocialMedia[];
};

export default Props;
