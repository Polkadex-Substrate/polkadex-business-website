import { staggerChildProps, staggerGroupProps } from 'components';
import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { HomeTranslations } from 'translations';

import * as S from './styles';

// Compact roadmap for the homepage. Reads the same `releases` array the
// detailed /roadmap page uses, so the two never drift.
export const RoadmapTeaser = () => {
  const { releases } = HomeTranslations['en-US'];

  // Progress line draws downward as the timeline scrolls through view —
  // kinetic reinforcement of the "we keep shipping" story.
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 55%'],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
  });

  return (
    <S.Wrapper id="roadmap">
      <S.Header>
        <span>Roadmap</span>
        <h2>
          Where we are, <strong>where we&apos;re going</strong>
        </h2>
        <p>
          Polkadex 2.0 is live on testnet and heading into a full mainnet
          relaunch in Q4 2026. Here&apos;s the full timeline.
        </p>
      </S.Header>

      <S.TimelineWrap ref={timelineRef}>
        <S.ProgressTrack aria-hidden="true">
          <S.ProgressLine as={motion.div} style={{ scaleY: lineScale }} />
        </S.ProgressTrack>
        <S.Timeline as={motion.div} {...staggerGroupProps}>
          {releases.map((r, i) => {
            const variant: 'completed' | 'active' | 'upcoming' = r.completed
              ? 'completed'
              : r.active
              ? 'active'
              : 'upcoming';
            return (
              <S.Phase
                as={motion.div}
                {...staggerChildProps}
                key={i}
                $active={!!r.active}
              >
                <S.PhaseLabel>
                  <span>{r.emoji}</span>
                  <span>{r.phase}</span>
                </S.PhaseLabel>
                <S.PhaseBody>
                  <h3>{r.title}</h3>
                  <p>{r.items[0]}</p>
                </S.PhaseBody>
                <S.Status variant={variant}>
                  {variant === 'completed'
                    ? 'Completed'
                    : variant === 'active'
                    ? 'In progress'
                    : 'Upcoming'}
                </S.Status>
              </S.Phase>
            );
          })}
        </S.Timeline>
      </S.TimelineWrap>

      <S.Footer>
        <Link href="/roadmap">See the full roadmap →</Link>
      </S.Footer>
    </S.Wrapper>
  );
};
