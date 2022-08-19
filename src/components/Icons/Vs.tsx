import * as React from 'react';

function SvgVs(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 44 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5.42289 23.6197C5.12308 23.3627 4.71619 22.5917 4.20222 21.3068C3.73108 20.0219 3.25994 18.5228 2.7888 16.8096C2.36049 15.0963 2.01785 13.5116 1.76086 12.0553C1.58954 11.1987 1.3968 10.4706 1.18265 9.87098C1.01133 9.27135 0.861418 8.7788 0.732925 8.39332C0.518771 7.62236 0.583018 6.80858 0.925664 5.95196C1.31114 5.09535 1.76086 4.51713 2.27483 4.21732C2.48899 4.08883 2.87446 4.00316 3.43126 3.96033C4.03089 3.87467 4.41637 3.85326 4.58769 3.89609C5.10166 4.06741 5.5728 4.85978 6.00111 6.2732C6.42942 7.64378 6.8149 9.46409 7.15754 11.7341C7.32886 13.0619 7.45736 14.047 7.54302 14.6894C7.67151 15.2891 7.73576 15.6746 7.73576 15.8459C7.90708 16.1885 8.01416 16.6168 8.05699 17.1308C8.14265 17.6019 8.3568 17.6662 8.69945 17.3235C8.87077 17.1522 9.12776 16.8524 9.4704 16.4241C9.85588 15.9958 10.3056 15.439 10.8196 14.7537C11.719 13.5544 12.4257 12.5693 12.9397 11.7984C13.4965 10.9846 14.1175 10.1494 14.8028 9.29276C15.1026 8.86446 15.5095 8.39332 16.0235 7.87935C16.5375 7.36538 17.0514 6.89424 17.5654 6.46593C18.0794 5.99479 18.5077 5.71639 18.8503 5.63073C19.8783 5.45941 20.4993 5.84489 20.7135 6.78716C20.9705 7.68661 20.6707 8.73597 19.814 9.93523C19.4714 10.4492 19.193 10.9417 18.9788 11.4129C18.8075 11.8412 18.6362 12.141 18.4649 12.3123C18.1222 12.9976 17.5868 13.8757 16.8587 14.9464C16.1306 15.9744 15.4239 16.9381 14.7386 17.8375C14.0533 18.6941 13.5822 19.2509 13.3252 19.5079C13.1538 19.6792 12.7684 20.0005 12.1687 20.4716C11.6119 20.9427 11.0766 21.5424 10.5626 22.2705C9.53465 23.2556 8.54954 23.8552 7.60726 24.0694C6.66499 24.2835 5.93686 24.1336 5.42289 23.6197Z" />
      <path d="M27.6556 27.4102C26.285 27.4102 25.0215 27.1104 23.8651 26.5107C22.7515 25.8683 21.852 25.0973 21.1667 24.1979C20.4814 23.2556 20.1388 22.3562 20.1388 21.4995C20.1388 21.1141 20.203 20.8357 20.3315 20.6643C20.5028 20.493 20.7384 20.4074 21.0382 20.4074C21.2524 20.4502 21.5094 20.5573 21.8092 20.7286C22.109 20.8999 22.4088 21.0926 22.7086 21.3068C23.3939 21.7779 24.1435 22.0778 24.9572 22.2062C25.771 22.3347 26.4991 22.2919 27.1416 22.0777C27.7841 21.8208 28.1481 21.4353 28.2338 20.9213C28.2338 20.75 28.1481 20.3859 27.9768 19.8291C27.8055 19.2723 27.5913 18.737 27.3343 18.223C26.2636 16.6382 25.5997 15.1392 25.3427 13.7257C25.0857 12.2695 24.9144 10.8133 24.8287 9.35701C24.8287 8.75738 25.1071 8.0935 25.6639 7.36538C26.2207 6.59443 26.906 5.84489 27.7198 5.11676C28.6193 4.34581 29.6044 3.61769 30.6751 2.93239C31.7887 2.2471 32.8809 1.66889 33.9517 1.19775C35.0225 0.726611 35.9219 0.448211 36.65 0.362549C37.421 0.362549 38.2348 0.40538 39.0914 0.491041C39.9908 0.533872 40.5905 0.683779 40.8903 0.940764C41.4899 1.4119 42.0467 2.18286 42.5607 3.25363C43.0747 4.3244 43.3316 5.22384 43.3316 5.95196C43.3316 6.29461 43.1389 6.72292 42.7534 7.23689C42.4108 7.70803 42.0895 8.24341 41.7897 8.84304C41.6184 9.14286 41.4685 9.46409 41.34 9.80673C41.2115 10.1494 41.0616 10.492 40.8903 10.8347C40.6333 11.4343 40.1622 11.6913 39.4769 11.6056C38.8344 11.4771 38.2348 11.1345 37.678 10.5777C37.1212 9.97806 36.8428 9.29276 36.8428 8.52181C36.8428 7.87935 37.0355 7.32255 37.421 6.85141C37.8065 6.38027 37.9992 6.05904 37.9992 5.88772C37.9992 5.80206 37.9564 5.73781 37.8707 5.69498C37.7851 5.65215 37.6351 5.63073 37.421 5.63073C37.1212 5.63073 36.6286 5.75923 35.9433 6.01621C35.3009 6.23036 34.6156 6.5516 33.8875 6.9799C33.1593 7.40821 32.4955 7.92218 31.8958 8.52181C31.4675 8.99295 31.1035 9.50692 30.8036 10.0637C30.5467 10.5777 30.4182 11.1345 30.4182 11.7341C30.4182 12.3338 30.5252 13.0405 30.7394 13.8542C30.9964 14.6252 31.2748 15.2677 31.5746 15.7816C31.6603 15.8673 31.7887 16.1029 31.9601 16.4883C32.1742 16.831 32.4098 17.2593 32.6668 17.7733C34.2515 21.0284 34.5085 23.4483 33.4377 25.0331C32.4098 26.6178 30.4824 27.4102 27.6556 27.4102Z" />
    </svg>
  );
}

export default SvgVs;
