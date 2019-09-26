import React from "react";
const floatingSrc = require("../assets/FEATURES-FLOAT.png");
// const svgDeco: any = [
//     <g id="circle" transform="translate(417.355161, 0.000000)" fill="#DDEEDD">
//         <path
//             d="M50.0292226,98.8122313 C22.843364,98.8122313 0.644839171,76.7264793 0.644839171,49.4613252 C0.644839171,22.1961712 22.7455732,0.110419108 50.0292226,0.110419108 C77.2150813,0.110419108 99.4136061,22.1961712 99.4136061,49.4613252 C99.4136061,76.7264793 77.2150813,98.8122313 50.0292226,98.8122313 Z"
//             id="Path"
//         />
//     </g>,
//     <g id="triangleORange" transform="translate(12.000000, 90.997240)">
//         <path
//             d="M52.6967346,51.9091677 L4.34312438,42.9349132 C2.41449035,42.5667386 0.853215186,41.1860841 0.256257035,39.3452114 C-0.340701115,37.5043387 0.118497462,35.4333568 1.49609319,34.0527023 L32.4919972,1.65334243 C33.7318333,0.364731527 35.5227078,-0.233552107 37.2676624,0.088600619 C39.012617,0.410753345 40.4820524,1.60732061 41.2167702,3.26410606 L58.5744764,44.6377204 C59.355114,46.4325714 59.033675,48.5035532 57.8397587,50.0222732 C56.5540026,51.5409931 54.5794488,52.2773422 52.6967346,51.9091677 Z"
//             id="Path"
//             fill="#FFE9DF"
//         />
//         <path
//             d="M36.9990712,5.02510919 C36.860698,4.98002799 36.5839517,4.98002799 36.3533297,5.25051515 L5.21936434,36.9876748 C4.94261798,37.2581619 4.98874237,37.5286491 5.03486676,37.7089739 C5.08099116,37.8442174 5.21936434,38.1147046 5.58835948,38.204867 L54.1573455,46.9956995 C54.5263406,47.0407807 54.7569626,46.860456 54.8492114,46.7252124 C54.9414601,46.5899688 55.0798333,46.3645628 54.9414601,46.0039133 L37.5064395,5.47592111 C37.4141907,5.11527157 37.1374444,5.02510919 36.9990712,5.02510919 Z"
//             id="Path"
//             fill="#FFFFFF"
//         />
//     </g>,
//     <g
//         id="triangle"
//         transform="translate(104.881115, 220.747512) rotate(29.000000) translate(-104.881115, -220.747512) translate(55.881115, 174.747512)"
//         fill="#FFE7F2"
//     >
//         <path
//             d="M49.1742499,87.478001 L1.62968085,14.7686741 C-0.233223902,11.8473172 -0.39521562,8.19562105 1.22470156,5.19311536 C2.84461873,2.19060967 6.00345722,0.243038415 9.48627915,0.243038415 L88.5382373,0.405336019 C91.6970758,0.405336019 94.6129267,2.02831207 96.3948356,4.62507375 C98.0957486,7.30298423 98.4197321,10.6300851 97.1237983,13.4702932 L65.6164093,86.0984714 C64.2394797,89.2632747 61.2426329,91.3731436 57.8408068,91.6977388 C54.3579849,91.9411852 51.0371547,90.3993579 49.1742499,87.478001 Z"
//             id="Path"
//         />
//     </g>,
//     <g id="airplane" transform="translate(555.000000, 190.000000)">
//         <g transform="translate(139.000000, 0.000000)" id="Path">
//             <polygon fill="#241784" points="27 78 89 0 35.5899238 55.0350671" />
//             <path
//                 d="M0,38.908 C0,38.908 71.9066909,9.946 89,1 C89,1 63.8891576,62.002 59.4588875,82 L36.2492946,55 L27.5681177,48.502 L0,38.908 Z"
//                 fill="#C89DC3"
//             />
//             <polygon
//                 fill="#241784"
//                 points="27.1991241 78 35.7614599 55.0350671 89 0 27 48.408096"
//             />
//         </g>
//         <path
//             d="M163.422652,77 C181.270576,89.4597434 192.746308,105.654282 197.849847,125.583617 C205.505155,155.477619 188.359652,193.659579 144.084064,181.553524 C99.808475,169.447469 81.9571909,134.040931 61.3153313,114.535692 C40.6734718,95.030453 3.65132142,89.7964361 5.03786919,128.193887 C6.42441697,166.591337 40.2619109,247.833225 90.1397079,249.275501 C140.017505,250.717777 179.560813,248.717226 201.972984,204.257753 C224.385154,159.79828 274.021213,279.809068 258.76827,229.457873 C248.599641,195.890411 271.769897,192.907492 328.279036,220.509117"
//             id="Path-7"
//             stroke="#1B7FED"
//             fill="rgba(0,0,0,0)"
//             strokeDasharray={10}
//             transform="translate(166.639518, 163.289420) scale(1, -1) rotate(183.000000) translate(-166.639518, -163.289420) "
//         />
//     </g>,
//     <g id="double" transform="translate(44.000000, 206.496372)" fill="#3FA1ED">
//         <path
//             d="M48.8178604,37.4904033 L21.2637324,5.27214098 C20.0743456,3.91897396 20.2725767,1.85700518 21.6601947,0.761584258 C23.0478127,-0.398273184 25.1622781,-0.204963611 26.2855879,1.14820341 L53.8397159,33.3664657 C55.0291027,34.7196327 54.8308715,36.7816015 53.4432536,37.8770224 C52.0556356,39.0368799 50.0072472,38.8435703 48.8178604,37.4904033 Z"
//             id="Path"
//         />
//         <path
//             d="M28.3351018,53.4004178 L0.780973803,21.1821555 C-0.408413016,19.8289885 -0.210181879,17.7670197 1.17743608,16.6715988 C2.56505403,15.5117413 4.67951949,15.7050509 5.80282926,17.0582179 L33.3569572,49.2764802 C34.5463441,50.6296472 34.3481129,52.691616 32.960495,53.7870369 C31.572877,54.9468944 29.5244886,54.7535848 28.3351018,53.4004178 Z"
//             id="Path"
//         />
//     </g>,
//     <g id="cross" transform="translate(478.000000, 93.000000)" fill="#FFD2F1">
//         <path
//             d="M29.4015754,33.9657116 L5.96621563,10.5177431 C4.68559488,9.23643336 4.68611054,7.24988758 5.96739665,5.96791246 C7.24868277,4.68593735 9.23416059,4.68542169 10.5147813,5.96673145 L33.9501411,29.4146999 C35.2307618,30.6960097 35.2302462,32.6825555 33.9489601,33.9645306 C32.6676739,35.2465057 30.6821961,35.2470214 29.4015754,33.9657116 Z"
//             id="Path"
//             transform="translate(19.958178, 19.966222) rotate(68.000000) translate(-19.958178, -19.966222) "
//         />
//         <path
//             d="M5.96012467,33.9717977 C4.67950392,32.690488 4.68001958,30.7039422 5.96130569,29.4219671 L29.4088416,5.96182244 C30.6901277,4.67984732 32.6756055,4.67933167 33.9562263,5.96064142 C35.236847,7.24195118 35.2363314,9.22849695 33.9550452,10.5104721 L10.5075094,33.9706167 C9.22622324,35.2525918 7.17669775,35.2531241 5.96012467,33.9717977 Z"
//             id="Path"
//             transform="translate(19.958175, 19.966223) rotate(68.000000) translate(-19.958175, -19.966223) "
//         />
//     </g>,
//     <g id="wave" transform="translate(157.000000, 281.000000)" fill="#97D7C3">
//         <path
//             d="M34.1054998,12.216259 C31.0271261,12.6800972 28.4121636,15.0324195 27.7501477,17.9479739 C27.4191398,19.4388824 27.5846438,20.929791 27.7501477,22.255043 C27.8825509,23.3483759 28.0149541,24.4085775 27.8163493,25.3362539 C27.5846438,26.4627181 26.8564263,27.4897884 25.8634026,28.0530205 C24.8703788,28.6162526 23.6125487,28.7156465 22.5533234,28.3180709 C21.9906099,28.1192831 21.4278964,27.7548388 20.8320822,27.3903945 C20.1700663,26.9928189 19.4749497,26.562112 18.6474299,26.230799 C15.7345602,25.1043348 12.2258762,25.9657486 10.1736271,28.3512022 C8.12137798,30.7366559 7.75726927,34.281705 9.27990571,37.0316029 C9.710216,37.8267541 10.7363406,38.1249358 11.5307596,37.6610976 C12.3251786,37.2303907 12.6230857,36.2033204 12.1596746,35.4081692 C11.3321548,33.9172607 11.5307596,31.7968575 12.6561865,30.5047368 C13.7816134,29.212616 15.8338625,28.6825152 17.4227006,29.31201 C17.9523132,29.5107978 18.4819259,29.8421108 19.0777402,30.2065551 C19.7728568,30.637262 20.534175,31.1011002 21.3947956,31.3992819 C23.3808432,32.1281705 25.631697,31.9293827 27.4853414,30.9023124 C29.305885,29.8752421 30.6630174,28.0198892 31.0602269,25.9657486 C31.3581341,24.5411027 31.1926301,23.1827194 31.0271261,21.8574674 C30.894723,20.6978719 30.7623198,19.6376702 30.9609246,18.7099938 C31.3250333,17.1196914 32.8476697,15.7944394 34.6020117,15.4962577 C36.3232529,15.2312073 38.2430988,15.9269646 39.6002313,17.3516105 C40.2291464,18.0142365 41.2883717,18.0473678 41.9503875,17.4178731 C42.1820931,17.2190853 42.3144963,16.9540349 42.4137986,16.6558532 C42.5793026,16.1257524 42.4468994,15.4962577 42.0165891,15.0655508 C39.8981384,12.8457537 36.8859663,11.7855521 34.1054998,12.216259 Z"
//             id="Path"
//         />
//         <path
//             d="M25.7606722,0.0925507231 C22.6822986,0.556421322 20.067336,2.90890793 19.4053201,5.82466599 C19.0743122,7.31567863 19.2398162,8.80669127 19.4053201,10.1320358 C19.5377233,11.2254451 19.6701265,12.2857208 19.4715217,13.213462 C19.2398162,14.3400048 18.5115987,15.3671469 17.518575,15.9304183 C16.5255512,16.4936898 15.2677211,16.5930906 14.2084958,16.1954872 C13.6457823,15.9966856 13.0830688,15.6322158 12.4872546,15.267746 C11.8252387,14.8701427 11.1301221,14.4394057 10.3026023,14.1080695 C7.38973259,12.9815267 3.88104862,13.8430006 1.82879951,16.2286209 C-0.223449605,18.6142411 -0.587558319,22.1595378 0.93507812,24.9096278 C1.36538842,25.7048345 2.39151297,26.0030371 3.18593199,25.5391665 C3.980351,25.1084295 4.27825813,24.0812874 3.81484704,23.2860807 C2.98732723,21.7950681 3.18593199,19.6745167 4.31135892,18.3823058 C5.43678585,17.0900948 7.48903496,16.559957 9.07787299,17.1894957 C9.60748566,17.3882974 10.1370983,17.7196335 10.7329126,18.0841033 C11.4280292,18.5148402 12.1893474,18.9787108 13.049968,19.2769134 C15.0360156,20.0058529 17.2868694,19.8070512 19.1405138,18.7799092 C20.9610574,17.7527671 22.3181898,15.8972847 22.7153993,13.8430006 C23.0133065,12.4182552 22.8478025,11.059777 22.6822986,9.73443247 C22.5498954,8.57475597 22.4174922,7.51448031 22.616097,6.58673911 C22.9802057,4.99632563 24.5028421,3.67098106 26.2571841,3.37277853 C27.9784253,3.10770962 29.8982712,3.80351552 31.2554037,5.22826093 C31.8843188,5.89093322 32.9435441,5.92406683 33.60556,5.29452816 C33.8372655,5.09572647 33.9696687,4.83065756 34.0689711,4.53245503 C34.234475,4.0023172 34.1020718,3.37277853 33.6717615,2.94204155 C31.5864116,0.755223008 28.5411388,-0.338186262 25.7606722,0.0925507231 Z"
//             id="Path"
//         />
//     </g>,
//     <g id="Group" transform="translate(0.000000, 315.000000)">
//         <path
//             d="M41,187 L165,187 C177.150264,187 187,177.150264 187,165 L187,41 C187,28.8497355 177.150264,19 165,19 L41,19 C28.8497355,19 19,28.8497355 19,41 L19,165 C19,177.150264 28.8497355,187 41,187 Z"
//             id="Path"
//             fill="#DFEDFF"
//             transform="translate(103.000000, 103.000000) rotate(-15.000000) translate(-103.000000, -103.000000) "
//         />
//         <polygon
//             id="Path"
//             fill="#FFFFFF"
//             transform="translate(103.531305, 101.431841) rotate(-15.000000) translate(-103.531305, -101.431841) "
//             points="36.6181425 168.299643 170.444467 168.299643 170.444467 34.5640385 36.6181425 34.5640385"
//         />
//     </g>,
// ];
const data: any = [
  {id: "projects", h2: "More than just design.", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},
  {id: "features"},
];
const Features = () => {
    return (
      <div className="features">
      <img className="features--floating--deco" src={floatingSrc} />
        {data.map((item: any) => {
          return (
            <div key={item.id} className="feature-container">
            <div className="feature--text--container">
            <h2 className="title">{item.h2}</h2>
            <p>{item.p}</p>
            </div>

            </div>
          );
        })}
      </div>
    );
};

export default Features;
