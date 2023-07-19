import React from "react";

export const LogoIcon = ({ className, onClick }) => {
  return (
    <svg
      width="172"
      height="32"
      viewBox="0 0 172 32"
      fill="var(--primary)"
      className={className}
      onClick={onClick}
    >
      <path d="M13.4049 16.2645H5.97964V24.7603H0V2.31405H14.4891L15.0477 7.04132H5.97964V11.5372H12.8464L13.4049 16.2645Z" />
      <path d="M16.3647 16.6612C16.3647 13.9725 17.2408 11.8898 18.9931 10.4132C20.7673 8.9146 22.9029 8.16529 25.3999 8.16529C28.0283 8.16529 30.1858 8.89256 31.8724 10.3471C33.5808 11.8017 34.4351 13.9614 34.4351 16.8264C34.4351 19.5152 33.548 21.5758 31.7738 23.0083C29.9996 24.4187 27.8312 25.124 25.2685 25.124C22.7058 25.124 20.5811 24.4298 18.8946 23.0413C17.208 21.6529 16.3647 19.5262 16.3647 16.6612ZM22.5415 16.6612C22.5415 17.741 22.7824 18.6116 23.2643 19.2727C23.7462 19.9118 24.4361 20.2314 25.3342 20.2314C26.276 20.2314 26.9988 19.9449 27.5026 19.3719C28.0064 18.7989 28.2583 17.9504 28.2583 16.8264C28.2583 15.7466 28.0173 14.854 27.5355 14.1488C27.0536 13.4215 26.3636 13.0579 25.4656 13.0579C24.5237 13.0579 23.8009 13.3774 23.2972 14.0165C22.7934 14.6556 22.5415 15.5372 22.5415 16.6612Z" />
      <path d="M48.0158 24.7603L45.2231 21.3223L42.4961 24.7603H35.7608L41.609 16.7934L35.7608 9.4876L41.9376 8.66116L45.026 12.595L48.1144 8.72727H54.7183L48.6401 17.124L54.7183 24.7603H48.0158Z" />
      <path d="M80.5886 24.7603H64.5553V2.28099H70.535V20.0331H80.0301L80.5886 24.7603Z" />
      <path d="M85.8573 6.54545C84.9811 6.54545 84.2255 6.22589 83.5903 5.58678C82.9551 4.94766 82.6375 4.18733 82.6375 3.30578C82.6375 2.4022 82.9551 1.63085 83.5903 0.991735C84.2255 0.330578 84.9811 0 85.8573 0C86.7553 0 87.5219 0.330578 88.1572 0.991735C88.8143 1.63085 89.1428 2.4022 89.1428 3.30578C89.1428 4.18733 88.8143 4.94766 88.1572 5.58678C87.5219 6.22589 86.7553 6.54545 85.8573 6.54545ZM82.9003 24.7603V8.72727H88.88V24.7603H82.9003Z" />
      <path d="M92.8146 24.7603V1.78512L98.7943 1.42149V9.02479C99.2104 8.80441 99.7252 8.60606 100.338 8.42975C100.974 8.25344 101.62 8.16529 102.277 8.16529C104.84 8.16529 106.756 8.95868 108.027 10.5455C109.297 12.1322 109.932 14.1157 109.932 16.4959C109.932 18.8981 109.297 20.9366 108.027 22.6116C106.778 24.2865 104.752 25.124 101.948 25.124C101.05 25.124 100.141 24.9366 99.2214 24.562C98.3234 24.1873 97.5239 23.7355 96.823 23.2066L95.8373 24.7603H92.8146ZM103.755 16.6281C103.755 15.6804 103.493 14.854 102.967 14.1488C102.463 13.4215 101.729 13.0579 100.766 13.0579C100.525 13.0579 100.207 13.1019 99.8128 13.1901C99.4185 13.2782 99.079 13.3884 98.7943 13.5207V19.2397C99.1009 19.5262 99.4842 19.7686 99.9442 19.9669C100.404 20.1432 100.842 20.2314 101.258 20.2314C102.156 20.2314 102.792 19.8347 103.164 19.0413C103.558 18.2259 103.755 17.4215 103.755 16.6281Z" />
      <path d="M112.9 24.7603V8.76033H115.89L117.335 10.3802C117.992 9.93939 118.77 9.55372 119.668 9.22314C120.566 8.89256 121.464 8.72727 122.362 8.72727L123.578 13.5537C122.789 13.5537 121.979 13.6639 121.147 13.8843C120.314 14.1047 119.559 14.4793 118.88 15.0083V24.7603H112.9Z" />
      <path d="M129.871 19.3719C129.871 19.6364 129.98 19.8568 130.199 20.0331C130.418 20.2094 130.67 20.2975 130.955 20.2975C131.305 20.2975 131.656 20.2204 132.006 20.0661C132.357 19.9118 132.707 19.6915 133.058 19.405V18.2149H131.218C130.823 18.2149 130.495 18.3251 130.232 18.5455C129.991 18.7438 129.871 19.0193 129.871 19.3719ZM125.402 9.68595C126.235 9.31129 127.286 8.9697 128.556 8.66116C129.827 8.33058 131.119 8.16529 132.433 8.16529C134.602 8.16529 136.245 8.77135 137.362 9.98347C138.479 11.1956 139.037 12.8154 139.037 14.843V24.7603H136.376L135.292 23.5372C134.81 24.022 134.175 24.4077 133.386 24.6942C132.598 24.9807 131.754 25.124 130.856 25.124C128.841 25.124 127.341 24.6171 126.355 23.6033C125.369 22.5895 124.877 21.2562 124.877 19.6033C124.877 17.8623 125.457 16.595 126.618 15.8017C127.779 14.9862 129.279 14.5785 131.119 14.5785H133.025C132.937 14.0937 132.707 13.719 132.335 13.4545C131.962 13.1901 131.502 13.0579 130.955 13.0579C130.407 13.0579 129.761 13.157 129.016 13.3554C128.272 13.5317 127.593 13.7521 126.979 14.0165L125.402 9.68595Z" />
      <path d="M142.643 24.7603V8.76033H145.633L147.078 10.3802C147.735 9.93939 148.513 9.55372 149.411 9.22314C150.309 8.89256 151.207 8.72727 152.105 8.72727L153.321 13.5537C152.532 13.5537 151.722 13.6639 150.89 13.8843C150.057 14.1047 149.302 14.4793 148.623 15.0083V24.7603H142.643Z" />
      <path d="M159.811 24.8264L159.942 24.4628L153.962 9.32231L159.811 8.72727L162.998 17.7851L166.053 8.72727H172L165.002 26.6446C164.498 27.9449 163.556 29.0689 162.176 30.0165C160.796 30.9862 159.318 31.6474 157.741 32L155.737 27.3388C156.525 27.0083 157.358 26.6226 158.234 26.1818C159.11 25.7631 159.635 25.3113 159.811 24.8264Z" />
    </svg>
  );
};

export const SearchIcon = ({ className }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="var(--textLight)"
      className={className}
    >
      <path d="M12.8645 11.3208H12.0515L11.7633 11.0429C12.7719 9.86964 13.3791 8.34648 13.3791 6.68954C13.3791 2.99485 10.3842 0 6.68954 0C2.99485 0 0 2.99485 0 6.68954C0 10.3842 2.99485 13.3791 6.68954 13.3791C8.34648 13.3791 9.86964 12.7719 11.0429 11.7633L11.3208 12.0515V12.8645L16.4666 18L18 16.4666L12.8645 11.3208ZM6.68954 11.3208C4.12693 11.3208 2.05832 9.25214 2.05832 6.68954C2.05832 4.12693 4.12693 2.05832 6.68954 2.05832C9.25214 2.05832 11.3208 4.12693 11.3208 6.68954C11.3208 9.25214 9.25214 11.3208 6.68954 11.3208Z" />
    </svg>
  );
};

export const CloseIcon = ({ className, onClick }) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="var(--textLight)"
      className={className}
      onClick={onClick}
    >
      <path d="M16 2.5805L14.3886 0.971375L8 7.3508L1.61143 0.971375L0 2.5805L6.38857 8.95992L0 15.3393L1.61143 16.9485L8 10.569L14.3886 16.9485L16 15.3393L9.61143 8.95992L16 2.5805Z" />
    </svg>
  );
};

export const ArrowIcon = ({ className }) => {
  return (
    <svg
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="var(--text)"
      className={className}
    >
      <path d="M14.12 0L8 6.10667L1.88 0L0 1.88L8 9.88L16 1.88L14.12 0Z" />
    </svg>
  );
};

export const InstagramLogo = ({ className }) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="var(--textDark)"
      className={className}
    >
      <path d="M8.66772 13.0005C8.66772 10.6073 10.6073 8.66667 13.0005 8.66667C15.3938 8.66667 17.3344 10.6073 17.3344 13.0005C17.3344 15.3938 15.3938 17.3344 13.0005 17.3344C10.6073 17.3344 8.66772 15.3938 8.66772 13.0005ZM6.32489 13.0005C6.32489 16.6875 9.31354 19.6762 13.0005 19.6762C16.6875 19.6762 19.6762 16.6875 19.6762 13.0005C19.6762 9.31354 16.6875 6.32489 13.0005 6.32489C9.31354 6.32489 6.32489 9.31354 6.32489 13.0005ZM18.3803 6.06026C18.3803 6.92136 19.0786 7.62074 19.9408 7.62074C20.8019 7.62074 21.5013 6.92136 21.5013 6.06026C21.5013 5.19916 20.8029 4.50083 19.9408 4.50083C19.0786 4.50083 18.3803 5.19916 18.3803 6.06026ZM7.74781 23.5826C6.48031 23.5249 5.79143 23.3138 5.33358 23.1353C4.7266 22.899 4.29395 22.6176 3.8382 22.1628C3.3835 21.7081 3.10101 21.2755 2.86579 20.6685C2.68727 20.2107 2.47619 19.5218 2.41843 18.2543C2.35543 16.8839 2.34282 16.4722 2.34282 13.0005C2.34282 9.52882 2.35648 9.11822 2.41843 7.74676C2.47619 6.47926 2.68832 5.79143 2.86579 5.33253C3.10206 4.72555 3.3835 4.2929 3.8382 3.83715C4.2929 3.38245 4.72555 3.09996 5.33358 2.86474C5.79143 2.68621 6.48031 2.47514 7.74781 2.41738C9.11822 2.35438 9.52987 2.34177 13.0005 2.34177C16.4722 2.34177 16.8828 2.35543 18.2543 2.41738C19.5218 2.47514 20.2096 2.68727 20.6685 2.86474C21.2755 3.09996 21.7081 3.38245 22.1639 3.83715C22.6186 4.29185 22.9 4.72555 23.1363 5.33253C23.3148 5.79038 23.5259 6.47926 23.5837 7.74676C23.6467 9.11822 23.6593 9.52882 23.6593 13.0005C23.6593 16.4712 23.6467 16.8828 23.5837 18.2543C23.5259 19.5218 23.3138 20.2107 23.1363 20.6685C22.9 21.2755 22.6186 21.7081 22.1639 22.1628C21.7092 22.6176 21.2755 22.899 20.6685 23.1353C20.2107 23.3138 19.5218 23.5249 18.2543 23.5826C16.8839 23.6456 16.4722 23.6582 13.0005 23.6582C9.52987 23.6582 9.11822 23.6456 7.74781 23.5826ZM7.6407 0.0787592C6.25663 0.141767 5.31152 0.361242 4.48508 0.68258C3.63028 1.01442 2.90569 1.45967 2.18216 2.18216C1.45967 2.90464 1.01442 3.62923 0.68258 4.48508C0.361242 5.31152 0.141767 6.25663 0.0787592 7.6407C0.0147017 9.02686 0 9.47001 0 13.0005C0 16.531 0.0147017 16.9742 0.0787592 18.3604C0.141767 19.7444 0.361242 20.6895 0.68258 21.516C1.01442 22.3708 1.45862 23.0964 2.18216 23.8189C2.90464 24.5414 3.62923 24.9856 4.48508 25.3185C5.31257 25.6398 6.25663 25.8593 7.6407 25.9223C9.02791 25.9853 9.47001 26.0011 13.0005 26.0011C16.5321 26.0011 16.9742 25.9863 18.3604 25.9223C19.7444 25.8593 20.6895 25.6398 21.516 25.3185C22.3708 24.9856 23.0954 24.5414 23.8189 23.8189C24.5414 23.0964 24.9856 22.3708 25.3185 21.516C25.6398 20.6895 25.8603 19.7444 25.9223 18.3604C25.9853 16.9731 26 16.531 26 13.0005C26 9.47001 25.9853 9.02686 25.9223 7.6407C25.8593 6.25663 25.6398 5.31152 25.3185 4.48508C24.9856 3.63028 24.5414 2.90569 23.8189 2.18216C23.0964 1.45967 22.3708 1.01442 21.517 0.68258C20.6895 0.361242 19.7444 0.140717 18.3614 0.0787592C16.9752 0.0157518 16.5321 0 13.0016 0C9.47001 0 9.02791 0.0147017 7.6407 0.0787592Z" />
    </svg>
  );
};

export const FacebookLogo = ({ className }) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="var(--textDark)"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.125 0H4.875C2.18263 0 0 2.18263 0 4.875V21.125C0 23.8174 2.18263 26 4.875 26H21.125C23.8174 26 26 23.8174 26 21.125V4.875C26 2.18263 23.8174 0 21.125 0ZM20.4647 14.0024H18.0324V23.0066H13.9682V14.0024H12.3911V10.9679H13.9682V9.035C13.9682 6.50342 15.0218 4.99816 18.005 4.99816H21.0292V8.01895H19.2708C18.1076 8.01895 18.0324 8.45342 18.0324 9.26079L18.0289 10.9645H20.7932L20.4613 13.9989L20.4647 14.0024Z"
      />
    </svg>
  );
};
