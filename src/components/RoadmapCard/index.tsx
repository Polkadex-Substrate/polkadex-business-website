import * as Icons from 'components/Icons';
import { Tooltip, TooltipContent, TooltipHeader } from 'components/Tooltip';

import * as S from './styles';
import Props from './types';

const RoadmapCard = ({
  title = 'Example',
  content,
  position,
  invert = false,
  alignRight = false,
}: Props) => (
  <S.Wrapper position={position} invert={invert} alignRight={alignRight}>
    <S.Line invert={invert}>
      <div />
    </S.Line>
    <div>
      <S.Title>
        <p>{title}</p>
      </S.Title>
      <S.Content>
        {content &&
          content.map((item, index) => {
            const IconComponent = item.status ? Icons.Selected : Icons.Waiting;
            return (
              <div key={index}>
                <S.Item isHighligh={!!item.subItems?.length}>
                  {item.timeline && (
                    <span className={item.status ? 'checked' : ''}>
                      {item.timeline}
                    </span>
                  )}
                  {item.isHoverable ? (
                    <Tooltip>
                      <TooltipHeader>
                        <div style={{ display: 'flex' }}>
                          {item.status && <IconComponent />}
                          <p>{item.title}</p>
                        </div>
                      </TooltipHeader>
                      <TooltipContent style={{ textAlign: 'left' }}>
                        {item.subInfo}
                      </TooltipContent>
                    </Tooltip>
                  ) : (
                    <>
                      {item.status && <IconComponent />}
                      <p>{item.title}</p>
                    </>
                  )}
                </S.Item>
                {!!item.subItems?.length &&
                  item.subItems.map((subItem) => (
                    <S.Item>
                      {subItem.timeline &&
                        (subItem.isHoverable ? (
                          <Tooltip>
                            <TooltipHeader>
                              <span className={subItem.status ? 'checked' : ''}>
                                {subItem.timeline}
                              </span>
                            </TooltipHeader>
                            <TooltipContent style={{ textAlign: 'left' }}>
                              To go out along with orderbook mainnet
                            </TooltipContent>
                          </Tooltip>
                        ) : (
                          <span className={subItem.status ? 'checked' : ''}>
                            {subItem.timeline}
                          </span>
                        ))}
                      {subItem.status && <IconComponent />}
                      <p>
                        {!!subItem?.subInfo?.length && (
                          <Tooltip>
                            <TooltipHeader>
                              <S.Icon>
                                <Icons.Info />
                              </S.Icon>
                            </TooltipHeader>
                            <TooltipContent style={{ textAlign: 'left' }}>
                              {subItem.subInfo}
                            </TooltipContent>
                          </Tooltip>
                        )}
                        {subItem.title}
                      </p>
                    </S.Item>
                  ))}
                <S.SubItem />
              </div>
            );
          })}
      </S.Content>
    </div>
  </S.Wrapper>
);

export default RoadmapCard;
