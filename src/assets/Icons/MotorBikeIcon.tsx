import React from 'react';

const MotorBikeIcon: React.FC<any> = ({ width, height }) => {
  const w = width;
  const h = height;
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.0156 11.318C19.8216 11.318 19.6311 11.3326 19.4444 11.3596L19.2003 10.4484C19.4656 10.404 19.7379 10.3805 20.0156 10.3805C20.402 10.3805 20.7875 10.4257 21.1612 10.5147C21.342 10.5578 21.5311 10.4901 21.6433 10.3421C22.732 8.90708 22.7944 8.05142 21.8907 6.95117C20.7244 5.53133 19.6513 4.80176 18.6099 4.72086C17.8298 4.66006 17.0786 4.96348 16.3109 5.64772C16.2099 5.73767 16.1527 5.86691 16.154 6.00219C16.1553 6.13747 16.215 6.26553 16.3177 6.35356L17.0831 7.00962C17.0518 7.14551 17.0249 7.27386 17 7.39273C16.936 7.69817 16.8853 7.93859 16.8045 8.13795C16.6941 8.07364 16.5853 8.01003 16.4785 7.94745C14.9055 7.02631 13.6632 6.29867 12.3984 6.64869C11.5582 6.88119 10.8209 7.57208 10.0939 8.81277L6.53878 7.79544L6.31927 7.11641C6.09333 6.41741 5.61084 6.03537 4.80108 5.91453L0.78 5.23348C0.611297 5.2048 0.440437 5.27052 0.334219 5.40467C0.228 5.53878 0.203344 5.72014 0.269812 5.87783C1.2713 8.25172 1.65066 8.87881 3.0802 9.58911L6.53072 11.3034C7.42111 11.7458 7.74 12.0839 8.01431 12.8767L8.69142 14.8336H7.94025C7.70737 12.8569 6.02269 11.318 3.98437 11.318C1.78739 11.318 0 13.1054 0 15.3024C0 17.4994 1.78739 19.2868 3.98437 19.2868C6.02273 19.2868 7.70742 17.7479 7.94025 15.7711H9.0158L9.47428 17.0963C9.53962 17.2851 9.71747 17.4118 9.91725 17.4118H14.8794C15.029 17.4118 15.1697 17.3404 15.258 17.2195C15.3462 17.0987 15.3715 16.943 15.326 16.8005C15.1718 16.3173 15.0936 15.8133 15.0936 15.3024C15.0936 13.1935 16.4269 11.3905 18.2947 10.6912L18.5389 11.6029C17.0711 12.1909 16.0311 13.627 16.0311 15.3024C16.0311 17.4994 17.8185 19.2868 20.0155 19.2868C22.2125 19.2868 23.9999 17.4994 23.9999 15.3024C23.9999 13.1054 22.2126 11.318 20.0156 11.318ZM3.98437 18.3493C2.30433 18.3493 0.9375 16.9824 0.9375 15.3024C0.9375 13.6223 2.30433 12.2555 3.98437 12.2555C5.50505 12.2555 6.76898 13.3753 6.99516 14.8336H6.04064C5.82684 13.8955 4.98637 13.193 3.98437 13.193C2.82127 13.193 1.875 14.1393 1.875 15.3024C1.875 16.4655 2.82127 17.4118 3.98437 17.4118C4.98637 17.4118 5.8268 16.7093 6.04064 15.7711H6.99516C6.76898 17.2294 5.50505 18.3493 3.98437 18.3493ZM3.98437 15.7711H5.05814C4.87692 16.1846 4.46395 16.4743 3.98437 16.4743C3.3382 16.4743 2.8125 15.9485 2.8125 15.3024C2.8125 14.6562 3.3382 14.1305 3.98437 14.1305C4.46395 14.1305 4.87692 14.4202 5.05814 14.8336H3.98437C3.72548 14.8336 3.51562 15.0435 3.51562 15.3024C3.51562 15.5612 3.72548 15.7711 3.98437 15.7711ZM12.6485 7.55225C13.5311 7.30808 14.6227 7.94722 16.0048 8.75642C16.0416 8.77798 16.079 8.79987 16.1163 8.82172C16.0371 8.86039 15.9498 8.89845 15.8523 8.93652L13.5997 9.81598L11.0276 9.07995C11.5725 8.20419 12.1053 7.70253 12.6485 7.55225ZM15.1477 12.0446H13.6168C13.358 12.0446 13.1481 12.2545 13.1481 12.5133C13.1481 12.7722 13.358 12.9821 13.6168 12.9821H14.6357C14.5056 13.2825 14.4001 13.5958 14.3214 13.9196H12.5623C12.3034 13.9196 12.0935 14.1295 12.0935 14.3884C12.0935 14.6472 12.3034 14.8571 12.5623 14.8571H14.173C14.1619 15.0041 14.1562 15.1526 14.1562 15.3024C14.1562 15.6979 14.1956 16.09 14.2737 16.4743H10.2511L8.90025 12.5702C8.50115 11.4167 7.90612 10.94 6.94781 10.4638L3.49734 8.74948C2.52905 8.26841 2.18705 7.90794 1.47347 6.30176L4.64925 6.8397C4.65253 6.84026 4.65577 6.84078 4.65905 6.84125C5.17636 6.91766 5.32809 7.09822 5.42723 7.40478L5.72362 8.32156C5.77167 8.47016 5.89055 8.58505 6.04069 8.62803L13.4938 10.7608C13.5924 10.7891 13.6977 10.7841 13.7932 10.7468L16.1932 9.80984C17.5632 9.27505 17.7274 8.49195 17.9175 7.58516C17.9591 7.38706 18.0021 7.18222 18.0604 6.96097C18.1063 6.7872 18.0487 6.60251 17.9122 6.48551L17.3612 6.01325C17.7688 5.74025 18.1507 5.62587 18.5372 5.65555C19.2999 5.71484 20.1844 6.35098 21.1663 7.54625C21.3988 7.82933 21.5844 8.05592 21.582 8.38161L20.9439 8.11897C20.7043 8.02034 20.4305 8.13467 20.332 8.37397C20.2334 8.61336 20.3476 8.88734 20.587 8.98587L21.2542 9.26052C21.2004 9.34756 21.1396 9.43962 21.0702 9.53811C20.7231 9.47492 20.3696 9.44305 20.0155 9.44305C17.9895 9.443 16.2004 10.4768 15.1477 12.0446ZM20.0156 18.3493C18.3355 18.3493 16.9687 16.9824 16.9687 15.3024C16.9687 14.0606 17.7158 12.9906 18.7838 12.5165L19.0307 13.4378C18.3625 13.7922 17.9062 14.4948 17.9062 15.3024C17.9062 16.4655 18.8525 17.4118 20.0156 17.4118C21.1787 17.4118 22.125 16.4655 22.125 15.3024C22.125 14.1393 21.1787 13.193 20.0156 13.193C19.989 13.193 19.9626 13.194 19.9362 13.195L19.6892 12.2732C19.7965 12.2617 19.9053 12.2555 20.0156 12.2555C21.6957 12.2555 23.0625 13.6223 23.0625 15.3024C23.0625 16.9824 21.6956 18.3493 20.0156 18.3493ZM19.5628 15.4237C19.6189 15.6331 19.8083 15.7713 20.0153 15.7713C20.0554 15.7713 20.0963 15.7661 20.1369 15.7551C20.387 15.6881 20.5354 15.4311 20.4683 15.1811L20.1904 14.1436C20.754 14.2282 21.1875 14.7156 21.1875 15.3024C21.1875 15.9485 20.6617 16.4743 20.0156 16.4743C19.3694 16.4743 18.8437 15.9485 18.8437 15.3024C18.8437 14.9323 19.0163 14.602 19.285 14.387L19.5628 15.4237Z"
        fill="#004777"
      />
      <path
        d="M11.5073 12.0446H11.5069C11.248 12.0446 11.0383 12.2545 11.0383 12.5133C11.0383 12.7721 11.2484 12.9821 11.5073 12.9821C11.7662 12.9821 11.976 12.7721 11.976 12.5133C11.976 12.2545 11.7662 12.0446 11.5073 12.0446Z"
        fill="#004777"
      />
    </svg>
  );
};

export { MotorBikeIcon };
