import React from "react";

export function RepositoryIcon({ fill }: { fill: string }): JSX.Element {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M19.9453 11.0728C20.2969 11.3892 20.332 11.9165 20.0508 12.2681C19.7344 12.6196 19.207 12.6548 18.8555 12.3735L18.0117 11.6353V18.1743C18.0117 19.7563 16.7461 20.9868 15.1992 20.9868H5.07422C3.49219 20.9868 2.26172 19.7563 2.26172 18.1743V11.6353L1.38281 12.3735C1.03125 12.6548 0.503906 12.6196 0.1875 12.2681C-0.09375 11.9165 -0.0585938 11.3892 0.292969 11.0728L9.57422 3.19775C9.89062 2.95166 10.3477 2.95166 10.6641 3.19775L19.9453 11.0728ZM5.07422 19.2993H6.76172V13.9556C6.76172 13.1821 7.35938 12.5493 8.16797 12.5493H12.1055C12.8789 12.5493 13.5117 13.1821 13.5117 13.9556V19.2993H15.1992C15.7969 19.2993 16.3242 18.8071 16.3242 18.1743V10.1938L10.1367 4.95557L3.94922 10.1938V18.1743C3.94922 18.8071 4.44141 19.2993 5.07422 19.2993ZM8.44922 19.2993H11.8242V14.2368H8.44922V19.2993Z"
          fill={fill}
        />
      </svg>
    );
  }

export const CodeReviewIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M14.5547 4.09441L9.49219 20.4069C9.35156 20.8288 8.89453 21.0749 8.4375 20.9343C8.01562 20.7936 7.76953 20.3366 7.91016 19.8796L12.9727 3.56707C13.1133 3.14519 13.5703 2.8991 14.0273 3.03973C14.4492 3.18035 14.6953 3.63738 14.5547 4.09441ZM17.7188 7.15301L22.2188 11.3718C22.3945 11.5124 22.5 11.7585 22.5 11.9694C22.5 12.2155 22.3945 12.4264 22.2188 12.6022L17.7188 16.821C17.3672 17.1374 16.8398 17.1374 16.5234 16.7858C16.207 16.4343 16.207 15.9069 16.5586 15.5905L20.3906 11.9694L16.5586 8.38347C16.207 8.06707 16.207 7.53972 16.5234 7.18816C16.8398 6.8366 17.3672 6.8366 17.7188 7.15301ZM5.90625 8.38347L2.07422 11.9694L5.90625 15.5905C6.25781 15.9069 6.25781 16.4343 5.94141 16.7858C5.625 17.1374 5.09766 17.1374 4.74609 16.821L0.246094 12.6022C0.0703125 12.4264 0 12.2155 0 11.9694C0 11.7585 0.0703125 11.5124 0.246094 11.3718L4.74609 7.15301C5.09766 6.8366 5.625 6.8366 5.94141 7.18816C6.25781 7.53972 6.25781 8.06707 5.90625 8.38347Z"
      fill="#414651"
    />
  </svg>
);

export const CloudIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M18 19.875H5.0625C2.25 19.875 0 17.625 0 14.8125C0 12.6328 1.40625 10.7344 3.375 10.0664V10.0312C3.375 6.79688 6.01172 4.125 9.28125 4.125C11.0391 4.125 12.6562 4.93359 13.7461 6.19922C14.2734 5.95312 14.8359 5.8125 15.4688 5.8125C17.7891 5.8125 19.6875 7.71094 19.6875 10.0312C19.6875 10.2773 19.6523 10.4883 19.6172 10.7344C21.3047 11.4727 22.5 13.1602 22.5 15.0938C22.5 17.6602 20.4961 19.7344 18 19.875ZM13.2891 8.23828L12.4453 7.28906C11.6719 6.41016 10.5469 5.8125 9.28125 5.8125C6.92578 5.8125 5.0625 7.71094 5.0625 10.0312V11.2617L3.90234 11.6484C2.60156 12.1055 1.6875 13.3711 1.6875 14.8125C1.6875 16.6758 3.16406 18.1875 5.0625 18.1875H17.8945C19.5117 18.1172 20.8125 16.7461 20.8125 15.0938C20.8125 13.8281 20.0391 12.7383 18.9492 12.2812L17.7539 11.7539L17.9648 10.4531C17.9648 10.3125 18 10.1719 18 10.0312C18 8.66016 16.8398 7.5 15.4688 7.5C15.082 7.5 14.7305 7.60547 14.4141 7.74609L13.2891 8.23828Z"
      fill="#414651"
    />
  </svg>
);

export const BookIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M15.75 15.375C15.75 16.1133 15.2578 16.7461 14.625 16.9922V19.3125H14.9062C15.3633 19.3125 15.75 19.6992 15.75 20.1562C15.75 20.6484 15.3633 21 14.9062 21H2.8125C1.23047 21 0 19.7695 0 18.1875V5.8125C0 4.26562 1.23047 3 2.8125 3H14.0625C14.9766 3 15.75 3.77344 15.75 4.6875V15.375ZM12.9375 19.3125V17.0625H2.8125C2.17969 17.0625 1.6875 17.5898 1.6875 18.1875C1.6875 18.8203 2.17969 19.3125 2.8125 19.3125H12.9375ZM14.0625 15.375V4.6875H2.8125C2.17969 4.6875 1.6875 5.21484 1.6875 5.8125V15.6211C2.00391 15.4805 2.39062 15.375 2.8125 15.375H14.0625ZM5.34375 8.625C4.85156 8.625 4.5 8.27344 4.5 7.78125C4.5 7.32422 4.85156 6.9375 5.34375 6.9375H11.5312C11.9883 6.9375 12.375 7.32422 12.375 7.78125C12.375 8.27344 11.9883 8.625 11.5312 8.625H5.34375ZM5.34375 11.4375C4.85156 11.4375 4.5 11.0859 4.5 10.5938C4.5 10.1367 4.85156 9.75 5.34375 9.75H11.5312C11.9883 9.75 12.375 10.1367 12.375 10.5938C12.375 11.0859 11.9883 11.4375 11.5312 11.4375H5.34375Z"
      fill="#414651"
    />
  </svg>
);

export const SettingIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M5.31586 12C5.31586 10.1367 6.79242 8.625 8.69086 8.625C10.5541 8.625 12.0659 10.1367 12.0659 12C12.0659 13.8633 10.5541 15.375 8.69086 15.375C6.79242 15.375 5.31586 13.8633 5.31586 12ZM8.69086 10.3125C7.74164 10.3125 7.00336 11.0859 7.00336 12C7.00336 12.9492 7.74164 13.6875 8.69086 13.6875C9.60492 13.6875 10.3784 12.9492 10.3784 12C10.3784 11.0859 9.60492 10.3125 8.69086 10.3125ZM9.99164 3C10.7651 3 11.433 3.5625 11.6088 4.30078L11.8901 5.46094C12.2065 5.60156 12.4877 5.77734 12.7338 5.95312L13.894 5.60156C14.6323 5.39062 15.4409 5.70703 15.8276 6.375L17.1284 8.66016C17.5151 9.32812 17.3745 10.1719 16.812 10.6992L15.9682 11.5078C15.9682 11.6836 16.0034 11.8594 16.0034 12C16.0034 12.1758 15.9682 12.3516 15.9682 12.4922L16.812 13.3359C17.3745 13.8633 17.5151 14.707 17.1284 15.375L15.8276 17.6602C15.4409 18.3281 14.6323 18.6445 13.894 18.4336L12.7338 18.082C12.4877 18.2578 12.2065 18.4336 11.8901 18.5742L11.6088 19.7344C11.433 20.4727 10.7651 21 9.99164 21H7.35492C6.58148 21 5.91352 20.4727 5.73773 19.7344L5.45648 18.5742C5.14008 18.4336 4.85883 18.2578 4.61273 18.082L3.45258 18.4336C2.7143 18.6445 1.9057 18.3281 1.51898 17.6602L0.218203 15.375C-0.168515 14.707 -0.0278903 13.8633 0.53461 13.3359L1.37836 12.4922C1.37836 12.3516 1.37836 12.1758 1.37836 12C1.37836 11.8594 1.37836 11.6836 1.37836 11.5078L0.53461 10.6992C-0.0278903 10.1719 -0.168515 9.32812 0.218203 8.66016L1.51898 6.375C1.9057 5.70703 2.7143 5.39062 3.45258 5.60156L4.61273 5.95312C4.85883 5.77734 5.14008 5.60156 5.45648 5.46094L5.73773 4.30078C5.91352 3.5625 6.58148 3 7.35492 3H9.99164ZM6.89789 6.65625L6.51117 6.83203C6.05414 7.00781 5.63227 7.25391 5.2807 7.53516L4.92914 7.81641L2.99555 7.21875L1.69477 9.50391L3.13617 10.875L3.10102 11.2969C3.06586 11.543 3.06586 11.7891 3.06586 12C3.06586 12.2461 3.06586 12.4922 3.10102 12.7383L3.13617 13.1602L1.69477 14.5312L2.99555 16.8164L4.92914 16.2188L5.2807 16.5C5.63227 16.7812 6.05414 17.0273 6.51117 17.2031L6.89789 17.3789L7.35492 19.3125H9.99164L10.4487 17.3789L10.8354 17.2031C11.2924 17.0273 11.7143 16.7812 12.0659 16.5L12.4174 16.2188L14.351 16.8164L15.6518 14.5312L14.2104 13.1602L14.2455 12.7383C14.2807 12.4922 14.3159 12.2461 14.3159 12C14.3159 11.7891 14.2807 11.543 14.2455 11.2969L14.2104 10.875L15.6518 9.50391L14.351 7.21875L12.4174 7.81641L12.0659 7.53516C11.7143 7.25391 11.2924 7.00781 10.8354 6.83203L10.4487 6.65625L9.99164 4.6875H7.35492L6.89789 6.65625Z"
      fill="#414651"
    />
  </svg>
);

export const ChevronIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
    <path
      d="M13.7614 1.68179L7.79263 7.40055C7.60513 7.5568 7.41763 7.6193 7.26138 7.6193C7.07388 7.6193 6.88638 7.5568 6.73013 7.4318L0.730135 1.68179C0.417635 1.40054 0.417635 0.900545 0.698885 0.619295C0.980135 0.306795 1.48013 0.306795 1.76138 0.588045L7.26138 5.83805L12.7301 0.588045C13.0114 0.306795 13.5114 0.306795 13.7926 0.619295C14.0739 0.900545 14.0739 1.40054 13.7614 1.68179Z"
      fill="#181D27"
    />
  </svg>
);

export const CodeAntAI: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="32" viewBox="0 0 29 32" fill="none">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18.9451 0.164219C18.5544 0.240206 17.9465 0.41389 17.5882 0.544153C17.23 0.674416 16.4701 1.01093 15.9057 1.29317C15.3412 1.5754 14.3642 2.15073 13.7346 2.57409C13.105 2.99744 12.128 3.74645 11.5636 4.25665C10.9991 4.75599 10.2175 5.52672 9.82673 5.97178C9.43594 6.40599 8.7412 7.28527 8.26357 7.91487C7.79679 8.54448 7.08034 9.61915 6.6787 10.303C6.2662 10.9869 5.6583 12.1376 5.31094 12.854C4.97442 13.5705 4.47508 14.7211 4.21456 15.405C3.94317 16.0889 3.60666 17.1418 3.45469 17.7389C3.24844 18.5856 3.17245 19.2043 3.12903 20.5613C3.08561 21.7011 3.11817 22.5803 3.20502 23.1122C3.281 23.5573 3.45469 24.2412 3.58495 24.632C3.71521 25.0228 3.96488 25.6089 4.12771 25.9346C4.29054 26.2603 4.63791 26.803 4.88758 27.1287C5.13725 27.4543 5.58232 27.9211 5.87541 28.1599C6.1685 28.3988 6.7764 28.8004 7.22146 29.0501C7.66653 29.3106 8.77376 29.8099 9.6639 30.1573C10.5649 30.5155 11.8784 30.9823 12.5948 31.1994C13.3113 31.4165 14.4836 31.6879 15.2001 31.8182C16.2747 32.0027 16.8067 32.0244 18.2396 31.981C19.5096 31.9376 20.2152 31.8724 20.8448 31.6987C21.3224 31.5793 22.1257 31.2645 22.6251 31.0149C23.2113 30.7218 23.7649 30.331 24.1557 29.9511C24.4922 29.6145 24.9047 29.0718 25.0784 28.7027C25.3497 28.1491 25.404 27.8994 25.4366 27.0201C25.4692 26.1951 25.4257 25.7826 25.2086 24.9576C25.0675 24.3932 24.7419 23.4487 24.4922 22.8734C24.2534 22.2872 23.7974 21.3537 23.4826 20.8109C23.1678 20.2573 22.5491 19.3129 22.0932 18.7159C21.6481 18.1188 20.8882 17.2395 20.4106 16.7511C19.933 16.2734 19.1405 15.5678 18.6521 15.177C18.1744 14.7971 17.6968 14.4823 17.5991 14.4823C17.5014 14.4823 17.4254 14.504 17.4254 14.5366C17.4254 14.5691 17.7294 14.884 18.0876 15.2422C18.4567 15.6004 19.0211 16.2083 19.3359 16.5991C19.6507 16.9899 19.9221 17.3481 19.9221 17.4132C19.9221 17.4784 19.4228 16.9899 18.804 16.3277C18.1853 15.6655 17.4146 14.9274 17.0889 14.6777C16.7632 14.428 16.2096 14.0481 15.8514 13.831C15.4932 13.6247 14.8093 13.3208 14.3317 13.158C13.6478 12.9409 13.2353 12.8757 12.3777 12.8757C11.6613 12.8649 11.0859 12.93 10.6951 13.0494C10.3695 13.1471 9.87015 13.3751 9.58791 13.5596L9.06686 13.8853C8.89317 13.3425 8.84975 13.006 8.84975 12.7997C8.84975 12.5935 8.94745 12.105 9.056 11.7142C9.17541 11.3234 9.51192 10.6395 9.81587 10.1945C10.109 9.74941 10.6843 9.02211 11.0859 8.57704C11.4984 8.14283 12.2257 7.48066 12.7034 7.12244C13.181 6.76422 13.9951 6.26487 14.5271 6.00435C15.0481 5.74382 15.8948 5.39645 16.4267 5.23363C17.2843 4.9731 17.534 4.94053 19.1622 4.94053C20.5517 4.92968 21.1488 4.9731 21.8218 5.13593C22.2994 5.24448 23.081 5.47244 23.5586 5.64613C24.0363 5.81981 24.6659 6.14547 24.959 6.37343C25.2629 6.59053 25.6537 6.98132 25.8274 7.23099C26.0119 7.48066 26.2724 7.87145 26.4136 8.09941C26.5438 8.32737 26.8044 8.59876 26.978 8.70731C27.1626 8.80501 27.434 8.89185 27.5859 8.89185C27.7488 8.89185 27.9876 8.76158 28.183 8.56619C28.4326 8.30566 28.4978 8.14283 28.4978 7.78461C28.4978 7.46981 28.3892 7.1333 28.183 6.77507C28.0201 6.48198 27.5642 5.95007 27.1843 5.6027C26.8044 5.25534 26.1205 4.78856 25.6754 4.5606C25.2303 4.32178 24.5465 4.03955 24.1557 3.92014C23.7649 3.80073 22.9833 3.64876 22.4188 3.57277C21.7567 3.47507 20.9534 3.45336 20.1935 3.49678C19.5313 3.5402 18.5869 3.67047 18.0767 3.77902C17.5665 3.89843 16.7849 4.12639 16.3399 4.27836C15.8948 4.44119 15.2109 4.73428 14.8201 4.92968C14.4294 5.12507 13.6695 5.58099 13.1376 5.93922C12.6057 6.29744 11.7481 6.97047 11.2488 7.4481C10.7494 7.91487 9.98955 8.76158 9.5662 9.32606C9.13199 9.89053 8.56752 10.7481 8.30699 11.2257C7.89449 11.953 7.80765 12.0507 7.78594 11.8228C7.76423 11.6708 7.90534 11.0846 8.08988 10.5201C8.27442 9.95566 8.62179 9.11981 8.86061 8.67474C9.09942 8.22968 9.55534 7.52409 9.881 7.10073C10.1958 6.68823 10.8146 6.00435 11.2488 5.59185C11.6938 5.16849 12.4646 4.5606 12.9748 4.23494C13.4849 3.90928 14.2991 3.45336 14.7984 3.2254C15.2869 2.99744 16.1662 2.67178 16.7415 2.4981C17.3277 2.33527 18.1419 2.12902 18.5652 2.06389C18.9886 1.9879 19.8896 1.89021 20.5734 1.83593C21.5396 1.75994 21.8652 1.69481 22.0172 1.54284C22.1257 1.43428 22.2126 1.20632 22.2126 1.02178C22.2126 0.82639 22.1149 0.609285 21.9629 0.468166C21.8218 0.337903 21.6047 0.175074 21.4636 0.109943C21.3333 0.0448111 20.8665 -0.00946518 20.4323 0.00139008C20.009 0.00139008 19.3359 0.0773769 18.9451 0.164219ZM11.1077 16.1108C10.8146 16.1977 10.4238 16.4365 10.2284 16.6319C10.0004 16.849 9.82676 17.1746 9.73992 17.522C9.65308 17.8368 9.63137 18.2493 9.67479 18.499C9.70735 18.7378 9.84847 19.1503 9.96788 19.4217C10.0981 19.6931 10.4672 20.1815 10.8037 20.5181C11.1837 20.9088 11.7047 21.2779 12.2692 21.5602C12.7468 21.799 13.5067 22.1355 13.9518 22.2875C14.3968 22.4503 15.5692 22.8302 16.557 23.1342C17.7837 23.5141 18.5544 23.6878 18.9777 23.6986C19.5422 23.7095 19.6399 23.6769 19.8787 23.4164C20.0307 23.2319 20.1393 22.9713 20.1393 22.7868C20.1393 22.6131 20.0633 22.2766 19.9656 22.0595C19.8787 21.8315 19.5856 21.3539 19.336 20.9957C19.0754 20.6375 18.2396 19.7039 17.4689 18.9115C16.6113 18.0322 15.7754 17.3049 15.3087 17.001C14.8853 16.7404 14.2557 16.4148 13.8975 16.2736C13.5175 16.1325 12.9097 16.0131 12.432 15.9914C11.9001 15.9588 11.4442 16.0023 11.0968 16.1108H11.1077Z"
      fill="#181D27"
    />
    <path
      d="M2.66225 15.0468C2.28232 15.5136 1.79383 16.2083 1.56587 16.5991C1.33791 16.9899 1.02311 17.6412 0.86028 18.0645C0.697451 18.4879 0.480345 19.1609 0.371793 19.5843C0.26324 20.0076 0.122122 20.8543 0.0569901 21.4839C-0.0189967 22.2655 -0.0189967 22.9603 0.0569901 23.7093C0.122122 24.3063 0.26324 25.1639 0.382648 25.6089C0.491201 26.054 0.719161 26.7379 0.88199 27.1287C1.05567 27.5195 1.29449 28.0188 1.43561 28.2468C1.57673 28.4639 1.86982 28.8547 2.08692 29.0935C2.31488 29.3432 2.79252 29.7557 3.15074 30.0053C3.50896 30.2659 4.09515 30.6132 4.45337 30.7978C4.81159 30.9714 5.58232 31.2754 6.15765 31.4599C6.74383 31.6445 7.49284 31.829 7.82936 31.8833C8.26357 31.9376 8.45896 31.9267 8.55666 31.8182C8.6435 31.7241 8.65074 31.6481 8.57837 31.5902C8.51324 31.5359 8.02475 31.2645 7.49284 30.9823C6.95008 30.7001 6.15765 30.2224 5.71258 29.9076C5.26752 29.6037 4.62706 29.0826 4.3014 28.757C3.96488 28.4313 3.48725 27.8668 3.24844 27.5086C2.99877 27.1504 2.70567 26.6619 2.58627 26.4231C2.456 26.1843 2.26061 25.6741 2.1412 25.2833C2.02179 24.8925 1.85896 24.1435 1.79383 23.6007C1.69613 22.8517 1.68528 22.3524 1.78298 21.4297C1.85896 20.7784 2.01094 19.7688 2.1412 19.2043C2.26061 18.6399 2.53199 17.6846 2.73824 17.0876C2.94449 16.4905 3.27015 15.709 3.44383 15.3507C3.61752 14.9925 3.74778 14.6017 3.72607 14.4823C3.70436 14.3629 3.61752 14.2543 3.50896 14.2326C3.40041 14.2109 3.09646 14.4932 2.66225 15.0468Z"
      fill="#181D27"
    />
  </svg>
);

export const PhoneIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M16.875 14.2759C17.6836 14.6275 18.1406 15.5064 17.8945 16.3853L17.1562 19.5845C17.0156 20.4282 16.2773 20.9907 15.3984 20.9907C6.89062 20.9907 0 14.1001 0 5.5923C0 4.71339 0.5625 3.97511 1.40625 3.79933L4.60547 3.06105C5.48438 2.85011 6.36328 3.30714 6.71484 4.11573L8.22656 7.63136C8.54297 8.36964 8.29688 9.24855 7.69922 9.77589L6.50391 10.7251C7.41797 12.272 8.71875 13.5728 10.3008 14.4868L11.25 13.3267C11.7773 12.6939 12.6562 12.4478 13.4297 12.7993L16.875 14.2759ZM16.2773 15.9985C16.3125 15.9282 16.2773 15.8579 16.207 15.7876L12.7617 14.311C12.6914 14.2759 12.6211 14.311 12.5859 14.3462L11.1797 16.0689C10.9336 16.3853 10.4766 16.4556 10.125 16.2798C7.76953 15.1196 5.83594 13.186 4.67578 10.8306C4.5 10.479 4.60547 10.0571 4.88672 9.81105L6.60938 8.4048C6.67969 8.36964 6.67969 8.29933 6.64453 8.22901L5.16797 4.7837C5.13281 4.74855 5.09766 4.67823 5.02734 4.67823L4.99219 4.71339L1.79297 5.45167C1.72266 5.45167 1.65234 5.52198 1.65234 5.5923C1.65234 13.1509 7.83984 19.3032 15.3984 19.3032C15.4688 19.3032 15.5391 19.2329 15.5391 19.1978L16.2773 15.9985Z"
      fill="#414651"
    />
  </svg>
);

export const LogoutIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M6.75 19.0312C6.75 19.5234 6.36328 19.875 5.90625 19.875H3.375C1.47656 19.875 0 18.3984 0 16.5V7.5C0 5.63672 1.47656 4.125 3.375 4.125H5.90625C6.36328 4.125 6.75 4.51172 6.75 4.96875C6.75 5.46094 6.36328 5.8125 5.90625 5.8125H3.375C2.42578 5.8125 1.6875 6.58594 1.6875 7.5V16.5C1.6875 17.4492 2.42578 18.1875 3.375 18.1875H5.90625C6.36328 18.1875 6.75 18.5742 6.75 19.0312ZM17.7539 11.4375L13.2891 6.65625C12.9727 6.30469 12.4453 6.30469 12.0938 6.62109C11.7422 6.9375 11.7422 7.46484 12.0586 7.81641L15.1875 11.1562H6.43359C5.97656 11.1562 5.625 11.543 5.625 12C5.625 12.4922 5.97656 12.8438 6.43359 12.8438H15.1523L11.9883 16.2188C11.6719 16.5703 11.6719 17.0977 12.0234 17.4141C12.2344 17.5547 12.4453 17.625 12.6211 17.625C12.832 17.625 13.043 17.5547 13.2188 17.3789L17.6836 12.5977C18.0703 12.2812 18.0703 11.7539 17.7539 11.4375Z"
      fill="#414651"
    />
  </svg>
);

export const SearchIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M17.7188 19.8086C18.0703 20.1602 18.0703 20.6875 17.7188 21.0039C17.5781 21.1797 17.3672 21.25 17.1562 21.25C16.9102 21.25 16.6992 21.1797 16.5234 21.0039L11.8125 16.293C10.5469 17.3125 8.96484 17.875 7.27734 17.875C3.26953 17.875 0 14.6055 0 10.5625C0 6.55469 3.23438 3.25 7.27734 3.25C11.2852 3.25 14.5898 6.55469 14.5898 10.5625C14.5898 12.2852 14.0273 13.8672 13.0078 15.0977L17.7188 19.8086ZM1.6875 10.5625C1.6875 13.6914 4.18359 16.1875 7.3125 16.1875C10.4062 16.1875 12.9375 13.6914 12.9375 10.5625C12.9375 7.46875 10.4062 4.9375 7.3125 4.9375C4.18359 4.9375 1.6875 7.46875 1.6875 10.5625Z"
      fill="#414651"
    />
  </svg>
);

export const RefreshIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M15.9609 11.4102C16.418 11.5508 16.6641 12.0078 16.5234 12.4648C15.5391 15.8047 12.4453 18.125 8.96484 18.125C6.1875 18.125 3.62109 16.6133 2.21484 14.2578V17.8438C2.21484 18.3359 1.86328 18.6875 1.37109 18.6875C0.914062 18.6875 0.527344 18.3359 0.527344 17.8438V12.2188C0.527344 11.7617 0.914062 11.375 1.37109 11.375H6.99609C7.48828 11.375 7.83984 11.7617 7.83984 12.2188C7.83984 12.7109 7.45312 13.0625 6.99609 13.0625H3.44531C4.5 15.1016 6.60938 16.4375 8.96484 16.4375C11.707 16.4375 14.168 14.6094 14.9062 11.9727C15.0469 11.5156 15.5039 11.2695 15.9609 11.4102ZM16.5938 1.8125C17.0508 1.8125 17.4375 2.19922 17.4375 2.65625V8.28125C17.4375 8.77344 17.0508 9.125 16.5938 9.125H10.9688C10.4766 9.125 10.125 8.77344 10.125 8.28125C10.125 7.82422 10.4766 7.4375 10.9688 7.4375H14.4844C13.4297 5.43359 11.3203 4.0625 9 4.0625C6.25781 4.0625 3.79688 5.92578 3.02344 8.52734C2.91797 8.98438 2.46094 9.23047 2.00391 9.08984C1.54688 8.98438 1.30078 8.49219 1.40625 8.07031C2.39062 4.73047 5.51953 2.375 9 2.375C11.7773 2.375 14.3438 3.92188 15.75 6.27734V2.65625C15.75 2.19922 16.1016 1.8125 16.5938 1.8125Z"
      fill="#414651"
    />
  </svg>
);

export const AddIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M15.1875 10.25C15.1875 10.7422 14.8008 11.0938 14.3438 11.0938H8.71875V16.7188C8.71875 17.2109 8.33203 17.5977 7.875 17.5977C7.38281 17.5977 7.03125 17.2109 7.03125 16.7188V11.0938H1.40625C0.914062 11.0938 0.5625 10.7422 0.5625 10.2852C0.5625 9.79297 0.914062 9.40625 1.40625 9.40625H7.03125V3.78125C7.03125 3.32422 7.38281 2.97266 7.875 2.97266C8.33203 2.97266 8.71875 3.32422 8.71875 3.78125V9.40625H14.3438C14.8008 9.40625 15.1875 9.79297 15.1875 10.25Z"
      fill="white"
    />
  </svg>
);

export const Circle: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
    <circle cx="4" cy="4" r="4" fill="#1570EF" />
  </svg>
);

export const DatabaseIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
    <path
      d="M5.25 12C2.34375 12 0 11.1797 0 10.125V1.875C0 0.84375 2.34375 0 5.25 0C8.13281 0 10.5 0.84375 10.5 1.875V10.125C10.5 11.1797 8.13281 12 5.25 12ZM9.375 2.03906L9.35156 2.01562C9.23438 1.92188 8.97656 1.75781 8.57812 1.61719C7.78125 1.33594 6.58594 1.125 5.25 1.125C3.89062 1.125 2.69531 1.33594 1.89844 1.61719C1.5 1.75781 1.24219 1.92188 1.125 2.01562V4.10156C1.42969 4.26562 1.85156 4.42969 2.39062 4.57031C3.1875 4.75781 4.17188 4.875 5.25 4.875C6.30469 4.875 7.28906 4.75781 8.08594 4.57031C8.625 4.42969 9.04688 4.26562 9.375 4.10156V2.03906ZM9.375 5.34375C9.04688 5.46094 8.71875 5.57812 8.34375 5.67188C7.45312 5.88281 6.375 6 5.25 6C4.10156 6 3.02344 5.88281 2.13281 5.67188C1.75781 5.57812 1.42969 5.46094 1.125 5.34375V7.10156C1.42969 7.26562 1.85156 7.42969 2.39062 7.57031C3.1875 7.75781 4.17188 7.875 5.25 7.875C6.30469 7.875 7.28906 7.75781 8.08594 7.57031C8.625 7.42969 9.04688 7.26562 9.375 7.10156V5.34375ZM1.125 10.0078C1.24219 10.1016 1.5 10.2656 1.89844 10.4062C2.69531 10.6875 3.89062 10.875 5.22656 10.875C6.58594 10.875 7.78125 10.6875 8.57812 10.4062C8.97656 10.2656 9.23438 10.1016 9.35156 10.0078L9.375 9.98438V8.34375C9.04688 8.46094 8.71875 8.57812 8.34375 8.67188C7.45312 8.88281 6.375 9 5.22656 9C4.10156 9 3.02344 8.88281 2.13281 8.67188C1.75781 8.57812 1.42969 8.46094 1.10156 8.34375V9.98438L1.125 10.0078ZM9.42188 9.9375L9.39844 9.96094C9.42188 9.9375 9.42188 9.9375 9.42188 9.9375ZM1.07812 9.96094C1.07812 9.9375 1.05469 9.9375 1.05469 9.9375L1.07812 9.96094ZM1.07812 2.0625C1.05469 2.08594 1.05469 2.08594 1.05469 2.08594L1.07812 2.0625ZM9.42188 2.08594C9.42188 2.08594 9.42188 2.08594 9.39844 2.0625L9.42188 2.08594Z"
      fill="#181D27"
    />
  </svg>
);

export const Hamburger: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M2 4.125C2 3.51562 2.46875 3 3.125 3H21.875C22.4844 3 23 3.51562 23 4.125C23 4.78125 22.4844 5.25 21.875 5.25H3.125C2.46875 5.25 2 4.78125 2 4.125ZM2 11.625C2 11.0156 2.46875 10.5 3.125 10.5H21.875C22.4844 10.5 23 11.0156 23 11.625C23 12.2812 22.4844 12.75 21.875 12.75H3.125C2.46875 12.75 2 12.2812 2 11.625ZM21.875 20.25H3.125C2.46875 20.25 2 19.7812 2 19.125C2 18.5156 2.46875 18 3.125 18H21.875C22.4844 18 23 18.5156 23 19.125C23 19.7812 22.4844 20.25 21.875 20.25Z"
      fill="#181D27"
    />
  </svg>
);

export const CloseIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M19.6484 17.1016C20.0703 17.5703 20.0703 18.2734 19.6484 18.6953C19.1797 19.1641 18.4766 19.1641 18.0547 18.6953L12.5234 13.1172L6.94531 18.6953C6.47656 19.1641 5.77344 19.1641 5.35156 18.6953C4.88281 18.2734 4.88281 17.5703 5.35156 17.1016L10.9297 11.5234L5.35156 5.94531C4.88281 5.47656 4.88281 4.77344 5.35156 4.35156C5.77344 3.88281 6.47656 3.88281 6.89844 4.35156L12.5234 9.97656L18.1016 4.39844C18.5234 3.92969 19.2266 3.92969 19.6484 4.39844C20.1172 4.82031 20.1172 5.52344 19.6484 5.99219L14.0703 11.5234L19.6484 17.1016Z"
      fill="#181D27"
    />
  </svg>
);