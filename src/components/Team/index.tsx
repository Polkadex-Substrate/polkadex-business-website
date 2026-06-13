import * as S from './styles';

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

export const foundingTeam: TeamMember[] = [
  {
    name: 'Vivek Prasannan',
    role: 'Co-Founder / Exec Director',
    bio: 'Early blockchain adopter and architect of the OCEX engine.',
    image: '/img/vivek.jpg',
    linkedin: 'https://linkedin.com/in/vivekprasannan',
  },
  {
    name: 'Ajeesh Kumar',
    role: 'Co-Founder, CEO',
    bio: 'Ex-Netrix. Specialist in scaling tech businesses and exits.',
    image: '/img/ajeesh.jpg',
    linkedin: 'https://linkedin.com/in/ajeeshonly',
  },
  {
    name: 'Sree Charan Kunutur',
    role: 'CTO',
    bio: 'Fintech/Telecom veteran and enterprise blockchain builder.',
    image: '/img/sreeCharan.jpg',
    linkedin: 'https://www.linkedin.com/in/aiwebcharan/',
  },
  {
    name: 'Amit Singh',
    role: 'Co-Founder, Strategic Partner',
    bio: 'Leading deep-tech product engineering.',
    image: '/img/amit.jpg',
    linkedin: 'https://www.linkedin.com/in/startupamit/',
  },
];

export const TeamHero = () => {
  return (
    <S.Hero>
      <h1>Founding Team</h1>
      <p>
        Built by engineers, scaled by operators. Meet the people who started
        Polkadex and lead the mission to build a fully non-custodial,
        peer-to-peer orderbook exchange for the DeFi ecosystem.
      </p>
    </S.Hero>
  );
};

export const TeamMembers = () => {
  return (
    <S.Grid>
      {foundingTeam.map((member, index) => (
        <S.Card key={`${member.name}-${index}`}>
          <S.Avatar>
            <img src={member.image} alt={member.name} />
          </S.Avatar>
          <h3>{member.name}</h3>
          <span>{member.role}</span>
          <p>{member.bio}</p>
          <S.Social>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer noopener"
              >
                LinkedIn
              </a>
            )}
            {member.twitter && (
              <a
                href={member.twitter}
                target="_blank"
                rel="noreferrer noopener"
              >
                Twitter
              </a>
            )}
          </S.Social>
        </S.Card>
      ))}
    </S.Grid>
  );
};
