import * as S from './styles';

export const Timeline = () => {
  return (
    <S.Wrapper id="timeline">
      <S.Title>
        <div>
          <h2>Crowdloan Timeline and Rules</h2>
        </div>
        <div />
      </S.Title>
      <S.Content>
        <S.Timeline>
          {/* <S.TimelineControls>
            <div>
              <Icon name="ArrowLeft" />
            </div>
            <div>
              <Icon name="ArrowRight" />
            </div>
          </S.TimelineControls> */}
          <S.TimelineContent>
            <TimelineCard
              date="April 5th"
              title="Contributions open"
              description="Join the Polkadex Crowdloan by contributing DOT via partners, exchanges and wallets."
              isActive
            />
            <TimelineCard
              date="April 5th"
              title="Auction starts"
              description="Each auction takes place over the course of seven days and assigns a total slot duration of 96 weeks."
            />
            <TimelineCard
              date="May 6"
              title="Crowdloan ends"
              description="Polkadex wins Polkadot parachain slot  with 973k DOT ($13.8M) contributed to the Polkadex Crowdloan!"
            />
          </S.TimelineContent>
        </S.Timeline>
      </S.Content>
    </S.Wrapper>
  );
};

const TimelineCard = ({ date, title, description, isActive = false }) => (
  <S.TimelineCard isActive={isActive}>
    <span>{date}</span>
    <strong>{title}</strong>
    <p>{description}</p>
  </S.TimelineCard>
);
