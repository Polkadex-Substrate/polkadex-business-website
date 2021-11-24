import { motion } from 'framer-motion';
import { useState } from 'react';

import * as S from './styles';
import Props from './types';

const Announcement = ({ content }: Props) => {
  const [state, setState] = useState(true);

  return (
    <S.Wrapper visible={state}>
      <S.Container>
        <S.Content>{content}</S.Content>
        <S.Content
          as={motion.div}
          whileHover={{ opacity: 0.5 }}
          onClick={() => setState(false)}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.7033 13.1286C13.977 12.8549 14.4207 12.8549 14.6944 13.1286L18.7454 17.1796C19.1325 17.5667 19.1325 18.1944 18.7454 18.5815C18.3582 18.9687 17.7305 18.9687 17.3434 18.5815L13.2924 14.5306C13.0187 14.2569 13.0187 13.8132 13.2924 13.5395L13.7033 13.1286Z"
              fillOpacity="0.5"
            />
            <path d="M6.82809 18.5815C6.44094 18.9687 5.81325 18.9687 5.4261 18.5815C5.03896 18.1944 5.03896 17.5667 5.4261 17.1795L10.6836 11.9221L5.4261 6.66464C5.03896 6.27749 5.03896 5.6498 5.4261 5.26265C5.81325 4.8755 6.44094 4.8755 6.82809 5.26265L12.0855 10.5201L17.343 5.26265C17.7301 4.8755 18.3578 4.8755 18.745 5.26265C19.1321 5.6498 19.1321 6.27749 18.745 6.66464L6.82809 18.5815Z" />
          </svg>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  );
};

export default Announcement;
