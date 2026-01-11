import React from "react"

interface IconProps {
  name?: string
  width?: number | string
  height?: number | string
  className?: string
  style?: React.CSSProperties
}

const icons: Record<string, React.ReactNode> = {
  search: (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="32" height="32" fill="url(#pattern0_2616_33)" />
      <defs>
        <pattern
          id="pattern0_2616_33"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2616_33" transform="scale(0.03125)" />
        </pattern>
        <image
          id="image0_2616_33"
          width="32"
          height="32"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAmZJREFUWIW9l7trFFEYxc/dSBJBDTYGdyWVgpBGsRAsVkR8kQQxf4OBdBZW2iqInZWPws6AWATxFRW0MtomNmqhhUYJASPxkdk1mJ/FzJJ19t6db3aznmbgMuc7v7nfnXtnpJwCHLAxry8kZwgckHRK0pCkQUnbJG2Q9F3SR0nPJD2Q9Nw5t7peYAKKwFXgNzbNAsPrFV4GFozBaU201SLgNLDSYnhNL4Etlrx/1gBwRNIjxT1Oa0XStKQ3kiJJRUnl5OrTlKQR59wf65MXgUXP00TARWCrx+OAE8T99+m8KTwpds1TYB7Yb/D2Arc8/p/ADkv4AI2rPbKE19XoAh57IC5bzGc8xgvW8Lo6JWA5VWcO6MoyPk2Zqnh6boS47nmYwdD9heSavuGFc+5bKwCS7nvG9gYBgILi7bVeb1sMl6R3nrH+IICkbjW+91EbAL88Y91BAOdcRdJSajy0uVjk8y4GAZLrp9R4Gcg8KQM66Bl739QBXPGs3ON5k4EC8DpVpwJszjIe9gDMAL05AcY8dR5ayWc85onMTWStxgHi3TOto1b6IY8Z4AlQyoAfC4TPA30mgKTYzQDEMnADGAZ2AduBfcBZGnue1hwwYgXoAaYzCraq20B6w/NCbALudQhiAThkgegCzhGf53kDslQFxq0tKQGXgM9NClaAKeAY0Efcc4tGJcN/QW1GJO1WfKrV3oglSR8kvXLO/ai796Sku4ays655r6ZZyCvgjmEGVoHgIdUuQD/wJQMgIv4U6IyId8ZqE4DJjoXXQYwHwr8COzsOkECMsnbORMDkfwtPgfTg+cb4C+NeZUCJawwwAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  ),
  arrowRight: (
    <svg
      width="7"
      height="12"
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.75 0.75L6 6L0.75 11.25"
        stroke="#008ECC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  star: (
    <svg
      width="41"
      height="41"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.9831 4.25816C19.4186 2.91787 21.3147 2.91787 21.7502 4.25816L24.6126 13.0678C24.8074 13.6672 25.366 14.073 25.9962 14.073L35.2592 14.073C36.6685 14.073 37.2544 15.8764 36.1143 16.7047L28.6204 22.1494C28.1105 22.5198 27.8971 23.1764 28.0919 23.7758L30.9543 32.5855C31.3898 33.9258 29.8558 35.0403 28.7157 34.2119L21.2217 28.7673C20.7119 28.3968 20.0214 28.3968 19.5116 28.7673L12.0176 34.2119C10.8775 35.0403 9.34351 33.9258 9.779 32.5855L12.6414 23.7758C12.8362 23.1764 12.6228 22.5198 12.1129 22.1494L4.61902 16.7047C3.47891 15.8764 4.06485 14.073 5.47411 14.073L14.7371 14.073C15.3674 14.073 15.9259 13.6672 16.1207 13.0678L18.9831 4.25816Z"
        fill="white"
      />
    </svg>
  ),

  whatsapp: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.7228 14.0602C16.4673 13.9289 15.1946 13.3055 14.9579 13.2211C14.7212 13.132 14.5478 13.0898 14.3767 13.3523C14.2032 13.6125 13.711 14.1914 13.5563 14.3672C13.4063 14.5406 13.254 14.5617 12.9985 14.4328C11.4798 13.6734 10.4837 13.0781 9.48291 11.3602C9.21807 10.9031 9.74775 10.9359 10.2423 9.94922C10.3267 9.77578 10.2845 9.62813 10.2188 9.49688C10.1532 9.36563 9.6376 8.09531 9.42197 7.57734C9.21338 7.07344 8.99775 7.14375 8.84072 7.13437C8.69072 7.125 8.51963 7.125 8.34619 7.125C8.17275 7.125 7.89385 7.19063 7.65713 7.44609C7.42041 7.70625 6.75244 8.33203 6.75244 9.60234C6.75244 10.8727 7.67822 12.1031 7.80478 12.2766C7.93603 12.45 9.62588 15.0563 12.2204 16.1789C13.861 16.8867 14.5032 16.9477 15.3235 16.8258C15.8228 16.7508 16.8517 16.2023 17.0649 15.5953C17.2782 14.9906 17.2782 14.4727 17.2149 14.3648C17.1517 14.25 16.9782 14.1844 16.7228 14.0602Z"
        fill="white"
      />
      <path
        d="M21.6843 7.93125C21.1546 6.67266 20.3952 5.54297 19.4272 4.57266C18.4593 3.60469 17.3296 2.84297 16.0686 2.31563C14.7796 1.77422 13.4108 1.5 11.9999 1.5H11.953C10.5327 1.50703 9.15692 1.78828 7.86317 2.34141C6.61395 2.87578 5.49364 3.63516 4.53505 4.60312C3.57645 5.57109 2.82411 6.69609 2.3038 7.95C1.76473 9.24844 1.49286 10.6289 1.49989 12.0492C1.50692 13.6758 1.89598 15.2906 2.62489 16.7344V20.2969C2.62489 20.8922 3.1077 21.375 3.70301 21.375H7.26786C8.71161 22.1039 10.3265 22.493 11.953 22.5H12.0022C13.4061 22.5 14.7679 22.2281 16.0499 21.6961C17.3038 21.1734 18.4311 20.4234 19.3968 19.4648C20.3647 18.5063 21.1265 17.3859 21.6585 16.1367C22.2116 14.843 22.4929 13.4672 22.4999 12.0469C22.5069 10.6195 22.2304 9.23438 21.6843 7.93125ZM18.1429 18.1969C16.4999 19.8234 14.3202 20.7188 11.9999 20.7188H11.96C10.5468 20.7117 9.14286 20.3602 7.90301 19.6992L7.70614 19.5938H4.40614V16.2938L4.30067 16.0969C3.63973 14.857 3.28817 13.4531 3.28114 12.0398C3.27176 9.70312 4.16473 7.50937 5.80301 5.85703C7.43895 4.20469 9.62567 3.29062 11.9624 3.28125H12.0022C13.1741 3.28125 14.3108 3.50859 15.3819 3.95859C16.4272 4.39687 17.3647 5.02734 18.171 5.83359C18.9749 6.6375 19.6077 7.57734 20.046 8.62266C20.5007 9.70547 20.728 10.8539 20.7233 12.0398C20.7093 14.3742 19.7929 16.5609 18.1429 18.1969Z"
        fill="white"
      />
    </svg>
  ),
  phone: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5317 12.4724C15.5208 16.4604 16.4258 11.8467 18.9656 14.3848C21.4143 16.8328 22.8216 17.3232 19.7192 20.4247C19.3306 20.737 16.8616 24.4943 8.1846 15.8197C-0.493478 7.144 3.26158 4.67244 3.57397 4.28395C6.68387 1.17385 7.16586 2.58938 9.61449 5.03733C12.1544 7.5765 7.54266 8.48441 11.5317 12.4724Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.353 6.04297C16.124 6.38697 17.508 7.77197 17.853 9.54297"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  notification: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#EFEFEF"
    >
      <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Z" />
    </svg>
  ),
  user: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#EFEFEF"
    >
      <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z" />
    </svg>
  ),
  translate: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#EFEFEF"
    >
      <path d="m476-80 182-480h84L924-80h-84l-43-122H603L560-80h-84ZM160-200l-56-56 202-202q-35-35-63.5-80T190-640h84q20 39 40 68t48 58q33-33 68.5-92.5T484-720H40v-80h280v-80h80v80h280v80H564q-21 72-63 148t-83 116l96 98-30 82-122-125-202 201Zm468-72h144l-72-204-72 204Z" />
    </svg>
  ),
  menu: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#EFEFEF"
    >
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
    </svg>
  ),
  close: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#EFEFEF"
    >
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    </svg>
  ),

  default: (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" fill="currentColor" />
    </svg>
  ),
}

const Icon: React.FC<IconProps> = ({
  name = "default",
  width = 32,
  height = 32,
  className = "",
  style = {},
}) => {
  const icon = icons[name] || icons.default

  // Clone the icon and override width/height attributes
  const iconWithSize = React.isValidElement(icon)
    ? React.cloneElement(icon as React.ReactElement<any>, {
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        style: {
          width: typeof width === "number" ? `${width}px` : width,
          height: typeof height === "number" ? `${height}px` : height,
        },
      })
    : icon

  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        ...style,
      }}
    >
      {iconWithSize}
    </span>
  )
}

export default Icon
