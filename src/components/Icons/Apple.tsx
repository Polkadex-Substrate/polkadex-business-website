import * as React from 'react';

export function Apple(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 22"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.3062 11.3006C14.335 14.5116 17.096 15.5729 17.1295 15.5846C17.1124 15.6586 16.6974 17.1162 15.6618 18.5956C14.7968 19.8982 13.8904 21.1728 12.4507 21.1946C11.0531 21.2258 10.582 20.3669 8.97883 20.3669C7.36006 20.3669 6.8594 21.1728 5.5186 21.2266C4.14743 21.2787 3.0994 19.8375 2.20397 18.5457C0.413125 15.9108 -0.982179 11.1199 0.888089 7.85826C1.79364 6.25817 3.44589 5.2296 5.21182 5.20235C6.58532 5.17354 7.85761 6.13515 8.70164 6.13515C9.52777 6.13515 11.1037 4.98433 12.7272 5.15641C13.4053 5.17743 15.3387 5.42659 16.586 7.25793C16.4848 7.31867 14.2829 8.62287 14.3062 11.3006ZM8.53657 4.91348C8.38318 3.7066 8.9765 2.42342 9.64223 1.6409C10.3944 0.751701 11.7001 0.0703994 12.7443 0.0236816C12.8813 1.27728 12.3861 2.51452 11.6659 3.4224C10.9129 4.31783 9.70997 5.00146 8.53579 4.91348H8.53657Z"
        fill="#8BA1BE"
      />
    </svg>
  );
}
