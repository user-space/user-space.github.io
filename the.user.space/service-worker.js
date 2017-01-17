/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["assets/css/bootstrap.min.css","5d5357cb3704e1f43a1f5bfed2aebf42"],["assets/css/demo.css","2770b470578f3f2df2f0f343cc89530c"],["assets/css/material-dashboard.css","d07bf36c39551760a9c1556d0a0e3c40"],["assets/css/material-kit.css","b7cf2421aa8979ff07b41db9ddd30563"],["assets/fonts/bootstrap/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["assets/fonts/font-awesome.min.css","611cee67cc0dec7504dd58686968e9cf"],["assets/fonts/google/materialicons/v19/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2","6fa175ccc464fc232a79826ec5029b5a"],["assets/fonts/google/roboto/v15/-2n2p-_Y08sg57CNWQfKNvesZW2xOQ-xsNqO47m55DA.woff2","4ca528cecf482f2a80ddf1a03dab21d0"],["assets/fonts/google/roboto/v15/-L14Jk06m6pUHB-5mXQQnRJtnKITppOI_IvcXXDNrsc.woff2","8aba9a724ce799285a3bf58191792f05"],["assets/fonts/google/roboto/v15/0eC6fl06luXEYWpBSJvXCBJtnKITppOI_IvcXXDNrsc.woff2","fdf234eddd7f0f9014d62f84b3b5c93c"],["assets/fonts/google/roboto/v15/77FXFjRbGzN4aCrSFhlh3hJtnKITppOI_IvcXXDNrsc.woff2","dde7b9846615959df53c37b9d4d1318c"],["assets/fonts/google/roboto/v15/97uahxiqZRoncBaCEI3aWxJtnKITppOI_IvcXXDNrsc.woff2","c73bec8242eaf1ad980fcc5cb4b12678"],["assets/fonts/google/roboto/v15/CWB0XYA8bzo0kSThX0UTuA.woff2","7e367be02cd17a96d513ab74846bafb3"],["assets/fonts/google/roboto/v15/Fcx7Wwv8OzT71A3E1XOAjvesZW2xOQ-xsNqO47m55DA.woff2","d4b4ed953e41382a252e13784f792013"],["assets/fonts/google/roboto/v15/Fl4y0QdOxyyTHEGMXX8kcRJtnKITppOI_IvcXXDNrsc.woff2","3b8a6fc873e6857435ff2145dfc84c06"],["assets/fonts/google/roboto/v15/Hgo13k-tfSpn0qi1SFdUfVtXRa8TVwTICgirnJhmVJw.woff2","16ddb1541046ada9b90cacf4adec839a"],["assets/fonts/google/roboto/v15/I3S1wsgSg9YCurV6PUkTORJtnKITppOI_IvcXXDNrsc.woff2","fb7a0cdd2195905a431db3c6b892f1f6"],["assets/fonts/google/roboto/v15/NYDWBdD4gIq26G5XYbHsFBJtnKITppOI_IvcXXDNrsc.woff2","1ff1e1012321990a3f2edd0bde26b1cc"],["assets/fonts/google/roboto/v15/NdF9MtnOpLzo-noMoG0miPesZW2xOQ-xsNqO47m55DA.woff2","90c22b692e809eb89f95aaca14c65529"],["assets/fonts/google/roboto/v15/Pru33qjShpZSmG3z6VYwnRJtnKITppOI_IvcXXDNrsc.woff2","8faaa9dea0c381abaf78543cb6cb10c3"],["assets/fonts/google/roboto/v15/PwZc-YbIL414wB9rB1IAPRJtnKITppOI_IvcXXDNrsc.woff2","cb6f15c36614fd261fa755bc3dd06810"],["assets/fonts/google/roboto/v15/RxZJdnzeo3R5zSexge8UUVtXRa8TVwTICgirnJhmVJw.woff2","bb474f16c9f76f522d656d66aa4a220e"],["assets/fonts/google/roboto/v15/UX6i4JxQDm3fVTc1CPuwqhJtnKITppOI_IvcXXDNrsc.woff2","4882f0f2c48934356c0399a2f5726490"],["assets/fonts/google/roboto/v15/ZLqKeelYbATG60EpZBSDyxJtnKITppOI_IvcXXDNrsc.woff2","0033a62d21040d7b5e270244987d6dc7"],["assets/fonts/google/roboto/v15/d-6IYplOFocCacKzxwXSOFtXRa8TVwTICgirnJhmVJw.woff2","0d7e71f2b5cc1ddab837f72e1fe52f3f"],["assets/fonts/google/roboto/v15/ek4gzZ-GeXAPcSbHtCeQI_esZW2xOQ-xsNqO47m55DA.woff2","e4335fd5cd90a07b90daf256c2b7b347"],["assets/fonts/google/roboto/v15/isZ-wbCXNKAbnjo6_TwHThJtnKITppOI_IvcXXDNrsc.woff2","bf1cca78eeaa04683481fb71f8674ea8"],["assets/fonts/google/roboto/v15/jSN2CGVDbcVyCnfJfjSdfBJtnKITppOI_IvcXXDNrsc.woff2","3c9a048f002a4c6d2b851c224aaba296"],["assets/fonts/google/roboto/v15/mErvLBYg_cXG3rLvUsKT_fesZW2xOQ-xsNqO47m55DA.woff2","6aeaf19ecc0c63247c13e3013d4d4b19"],["assets/fonts/google/roboto/v15/mbmhprMH69Zi6eEPBYVFhRJtnKITppOI_IvcXXDNrsc.woff2","6124b7c21a93ba24c20dcfbcc3ec87a1"],["assets/fonts/google/roboto/v15/mx9Uck6uB63VIKFYnEMXrRJtnKITppOI_IvcXXDNrsc.woff2","33b390a32a6a68224b5641c68813a1ad"],["assets/fonts/google/roboto/v15/oHi30kwQWvpCWqAhzHcCSBJtnKITppOI_IvcXXDNrsc.woff2","71588ab9ddd82c17af1ab30c0e1779fb"],["assets/fonts/google/roboto/v15/oOeFwZNlrTefzLYmlVV1UBJtnKITppOI_IvcXXDNrsc.woff2","e1bc1f66076877e9bd6a02e1f8bf3abf"],["assets/fonts/google/roboto/v15/rGvHdJnr2l75qb0YND9NyBJtnKITppOI_IvcXXDNrsc.woff2","b34fc365f5275ce8cbb4b4d8a3d1e4a6"],["assets/fonts/google/roboto/v15/u0TOpm082MNkS5K0Q4rhqvesZW2xOQ-xsNqO47m55DA.woff2","27b786b8a5ea8af6cfe386c7a4a186b0"],["assets/fonts/google/robotoslab/v6/dazS1PrQQuCxC3iOAJFEJQalQocB-__pDVGhF3uS2Ks.woff2","738412a295cedbeac63ada1d6e0323ee"],["assets/fonts/google/robotoslab/v6/dazS1PrQQuCxC3iOAJFEJSFaMxiho_5XQnyRZzQsrZs.woff2","acb21be94ad65c4c7496355d67db83cc"],["assets/fonts/google/robotoslab/v6/dazS1PrQQuCxC3iOAJFEJS_vZmeiCMnoWNN9rHBYaTc.woff2","c3d74932976ca31cac66cbd6f209e484"],["assets/fonts/google/robotoslab/v6/dazS1PrQQuCxC3iOAJFEJWhQUTDJGru-0vvUpABgH8I.woff2","18322c8361f970a05c2dd5558e0b576c"],["assets/fonts/google/robotoslab/v6/dazS1PrQQuCxC3iOAJFEJYlIZu-HDpmDIZMigmsroc4.woff2","f16a4a54b57b1104d1444ff845e62f5d"],["assets/fonts/google/robotoslab/v6/dazS1PrQQuCxC3iOAJFEJZ6iIh_FvlUHQwED9Yt5Kbw.woff2","d9cbc382906e93ce1b87e2699c10bf8b"],["assets/fonts/google/robotoslab/v6/dazS1PrQQuCxC3iOAJFEJejkDdvhIIFj_YMdgqpnSB0.woff2","b4a00bffd82d9ee9ae79c1cca512f8b7"],["assets/fonts/google/robotoslab/v6/y7lebkjgREBJK96VQi37ZiYE0-AqJ3nfInTTiDXDjU4.woff2","5870f56e7c2a4075af9920b03b3681b4"],["assets/fonts/google/robotoslab/v6/y7lebkjgREBJK96VQi37ZjTOQ_MqJVwkKsUn0wKzc2I.woff2","0afb2738483053cdf29058f27028e0de"],["assets/fonts/google/robotoslab/v6/y7lebkjgREBJK96VQi37ZjUj_cnvWIuuBMVgbX098Mw.woff2","458cb645ad5bd520aa162879099f6547"],["assets/fonts/google/robotoslab/v6/y7lebkjgREBJK96VQi37ZkbcKLIaa1LC45dFaAfauRA.woff2","c9b28b1745da9c4ae988d4cba3781a77"],["assets/fonts/google/robotoslab/v6/y7lebkjgREBJK96VQi37Zmo_sUJ8uO4YLWRInS22T3Y.woff2","5667c58f63eb40a5d5d7fb60157cab6c"],["assets/fonts/google/robotoslab/v6/y7lebkjgREBJK96VQi37Zo4P5ICox8Kq3LLUNMylGO4.woff2","162678e81466c5b352343be2d4b6b8aa"],["assets/fonts/google/robotoslab/v6/y7lebkjgREBJK96VQi37Zr6up8jxqWt8HVA3mDhkV_0.woff2","f9eba62ed64fcd10008cd97b16a5357f"],["assets/fonts/material-roboto-slab.css","ce0064dd348ba6c0b32f39d157e754ee"],["assets/github-light.css","9bdaebf2c23aea979f9e515fcdd82d8f"],["assets/img/apple-icon.png","82afbfaa2a64cebfd0077f73abe15659"],["assets/img/background.jpg","b8c329b9ed8c44a965338da466e34c3b"],["assets/img/bg-pricing.jpeg","4d2f2f4baa617ba08685b4d9118dc029"],["assets/img/card-1.jpeg","6ee66b2cb8a3d9988e37b83b3b4a590e"],["assets/img/card-2.jpeg","ae10829f019b0103525a6cd1102ee213"],["assets/img/card-3.jpeg","4ae4eeff542ab32204e8409d170e14a0"],["assets/img/default-avatar.png","a9615bac158705203261e8348f574cc8"],["assets/img/faces/avatar.jpg","7a6bc10028a79f78e424a9c71499fa77"],["assets/img/faces/card-profile1-square.jpg","3277f1d1acb3ca0f6a982644413a6c94"],["assets/img/faces/card-profile2-square.jpg","788e3d36e8c4d4120daeee6e57e7e85f"],["assets/img/faces/card-profile3-square.jpg","3122abf4a3e1067926c08dee7684522d"],["assets/img/faces/card-profile4-square.jpg","1f1f4900f3bc166b75f8235c2b89864f"],["assets/img/faces/marc.jpg","aba54d652e5df3b9f1f8024cbeb6630f"],["assets/img/favicon.png","cdfee05d97317b156b383df3d901821b"],["assets/img/flags/AD.png","9c507a2233a83dc3030c24129011aaf9"],["assets/img/flags/AE.png","86d92aeca61777ffa76bdd5ab11eca17"],["assets/img/flags/AG.png","29c6210d968ed46d426ede8c47287552"],["assets/img/flags/AM.png","051ba42b17a355eef367450ec139c9fb"],["assets/img/flags/AR.png","87bf5e86e15df6ace37bb8fd8fdad4f5"],["assets/img/flags/AT.png","d5fa01f1313efed12605fcb13e47acd0"],["assets/img/flags/AU.png","f410303b095b7faecea2088dff0746ff"],["assets/img/flags/BE.png","240b25f38dd558b44350dccdd7f7e5c0"],["assets/img/flags/BF.png","3a608a42b940d9c6459a78103b8dc752"],["assets/img/flags/BG.png","acbab99159d941e484848629de412393"],["assets/img/flags/BO.png","1ef2b5068e5a796807463f0ecf76fe46"],["assets/img/flags/BR.png","5730493f536fca3afdfb64833a4bd7ed"],["assets/img/flags/CA.png","7278655ab7f69865e2f9c631e27b6032"],["assets/img/flags/CD.png","7e8991795c58df0da4e915ed966649ec"],["assets/img/flags/CG.png","82ab35233fd95ac5a08173f0b304e46f"],["assets/img/flags/CH.png","68bdac0b6a8c08dc7140ee30c9be96f3"],["assets/img/flags/CL.png","abfba27a20ad1109148b9252e9fae9b2"],["assets/img/flags/CM.png","44157920179b3ab3bef729c3c275b3d1"],["assets/img/flags/CN.png","0310e291e7caba24f8b506ae60061453"],["assets/img/flags/CO.png","ae5f36bce8454ace76050c2cbc2c617a"],["assets/img/flags/CZ.png","23283bc4af7a6d5835da86e5c6af3e80"],["assets/img/flags/DE.png","5c449284c8bffd8a1a7b5cea411206cb"],["assets/img/flags/DJ.png","06f6355755a15a380f5f4788ef4b6468"],["assets/img/flags/DK.png","958c14e0fdd909b0dbdcf819f077b306"],["assets/img/flags/DZ.png","c94b3566b2453d9565e72cd380503b08"],["assets/img/flags/EE.png","0c05810172ea269eeb6d468f3eb366cb"],["assets/img/flags/EG.png","b322f9f5f57109579c650dab94b0d51d"],["assets/img/flags/ES.png","e234ca57cb39ebee8522dd6171f53f57"],["assets/img/flags/FI.png","21153a526ed9c8b50b9b7346329f9e7e"],["assets/img/flags/FR.png","c2b729d671482dec082145f7e2e6139d"],["assets/img/flags/GA.png","96c760085e2868e4a77f21761e7a6371"],["assets/img/flags/GB.png","8d7e0c569f553eeb5dcbc98a5811a811"],["assets/img/flags/GM.png","3f4b6e8b2ea9b5beab9322317edd3e8f"],["assets/img/flags/GT.png","35ee046448ba6df423bc93c154ebdbf2"],["assets/img/flags/HN.png","b4031d49b76e49566957a8e421adccb6"],["assets/img/flags/HT.png","9ebd7f096e9678020f47a61c558798c6"],["assets/img/flags/HU.png","0400af7f2e740d65681c36b505a59671"],["assets/img/flags/ID.png","bc9da28df4836f8d7d7d4986eb3756b3"],["assets/img/flags/IE.png","cf26374304b7e0c39cf7463a00db479a"],["assets/img/flags/IL.png","c1b19e2e2bd5fbcaa9dc6734d3b9bb8f"],["assets/img/flags/IN.png","57472cb5aaa2280cc565c8d79790cd22"],["assets/img/flags/IQ.png","6a80ee0ddeb3274aa98b31ac706ba853"],["assets/img/flags/IR.png","39d2ed9dd3d5ea0feb1258a0982006a6"],["assets/img/flags/IT.png","40c2c7b04142d8817122633c6e250397"],["assets/img/flags/JM.png","d7ba224599e6cc19cbf4ea7d0b54998b"],["assets/img/flags/JO.png","f344691625451dc007c5b85f1052a827"],["assets/img/flags/JP.png","b3266baee2667e9f97f85532a3d828ae"],["assets/img/flags/KG.png","c0059ac7e8aa487b60e729e06b0a8ebf"],["assets/img/flags/KN.png","9396f4f26409c2f7fa9a3377d2215c97"],["assets/img/flags/KP.png","f55eb5521e382993822aa64a2b1e03f2"],["assets/img/flags/KR.png","50bfafbd4c805455881b90fd3d77aefa"],["assets/img/flags/KW.png","246e255f060624b765f2d1566b5555c4"],["assets/img/flags/KZ.png","65fa38e06b5d23349e87db63363bfbb2"],["assets/img/flags/LA.png","bf56db1aada7aa937befea2ef0d78bb8"],["assets/img/flags/LB.png","6fa6cab5d92a521aab3e897b88c91e38"],["assets/img/flags/LC.png","a377b29250bdb702a37f9dd212b6e3c4"],["assets/img/flags/LS.png","d0cccca24f46911955fa63476baca28d"],["assets/img/flags/LU.png","faf08d6bae6516a046ee249a91876cd7"],["assets/img/flags/LV.png","ffa5ca31881e44464136e676b05fc0a6"],["assets/img/flags/MG.png","852e7a321cbd1f12787e5081a0ac9ce3"],["assets/img/flags/MK.png","362bc4fa6dc05eba2db02f0d4f35633d"],["assets/img/flags/ML.png","38c1d857c89c21c1dcd393300a10ad28"],["assets/img/flags/MM.png","fc20914487571d8ae4a65ecaf586dd2a"],["assets/img/flags/MT.png","6465da94c46655e59c4025643e720768"],["assets/img/flags/MX.png","a648480d8859ee53dbdd0a266695f81f"],["assets/img/flags/NA.png","99674c14e9d8f0880119acb3b392a390"],["assets/img/flags/NE.png","44b5d24271c0e060ce942faec84f1f76"],["assets/img/flags/NG.png","162d3246e31513549c1d5bcd367db8f7"],["assets/img/flags/NI.png","45739c3ad26cb3ccec8ae9039eade43b"],["assets/img/flags/NL.png","46d1320761f93e6072717f0bacd5f69c"],["assets/img/flags/NO.png","2cc8d256c8c3123149af1e40cb05ac45"],["assets/img/flags/OM.png","bb327fa8807e12d0693363a9aae5d3f5"],["assets/img/flags/PA.png","753c48c91fbd0f6d8fc387ba95097bba"],["assets/img/flags/PE.png","e229e0f7a622b2a5d2f61c87ea955dd2"],["assets/img/flags/PG.png","f5ff4b613961e17235fce8f4a4d7b2f1"],["assets/img/flags/PK.png","049091b5052af17a2a8d5fbbe4cb118d"],["assets/img/flags/PL.png","5382948f10392d56aa84a9ceec247cec"],["assets/img/flags/PT.png","ed81f3769a9cb278f0795e5e18cabbe3"],["assets/img/flags/PY.png","98ce0d64abc29d8b2632ff5a9f3a4ec4"],["assets/img/flags/QA.png","95b384b439669dae45b83d11a6a9beff"],["assets/img/flags/RO.png","366f794ab7bc18b1b7acffa361d9f700"],["assets/img/flags/RU.png","75e6e2c9778162a51f2e7dea5b3d053b"],["assets/img/flags/RW.png","2fedca2ee825adb6f971118ede788ae3"],["assets/img/flags/SA.png","13d134dfdf8312bf5bac33cdf8bf0f66"],["assets/img/flags/SE.png","71d2ebf81e32a8081b21c817f5831230"],["assets/img/flags/SG.png","cfb144e2ebb009497a216b77e27ee600"],["assets/img/flags/SL.png","daf195bf0464b73d7963b46bbed89653"],["assets/img/flags/SN.png","48ac6a05075c614ccbb83964758598b0"],["assets/img/flags/SO.png","dc2a3eaf32309c94886b2af65a09ca51"],["assets/img/flags/SV.png","a0f7ea17262572e11996d59f46dde615"],["assets/img/flags/TD.png","270aa958327f90375345f70a2072a50e"],["assets/img/flags/TJ.png","f178ef8b1f5ba4925e9525250c621ba5"],["assets/img/flags/TL.png","0ee9a45b4a50f1ead843f6d85a49c2f9"],["assets/img/flags/TR.png","c5fe967bb2633c507e5032d5d5c75890"],["assets/img/flags/TZ.png","823637c6e9b3dedc5e4ce6b967bedbb3"],["assets/img/flags/UA.png","e24827ce192348c8f06fc52f98244a44"],["assets/img/flags/US.png","5b98f6f3041409dd54d4684ef14a9876"],["assets/img/flags/VE.png","ea7c6d4e1acc7d3812cd0b3c49d913ad"],["assets/img/flags/VN.png","ee1b946d8de8ad10b56f7f11a129b812"],["assets/img/flags/YE.png","0992c8ca7b8df173f100a619226a3ccc"],["assets/img/header-doc.jpeg","9d3fb4a5c6d262364475ddc37f4e5249"],["assets/img/image_placeholder.jpg","ebe9884b2152a08a525fcd5054019532"],["assets/img/lock.jpeg","35f7d126c07a40a893f3f6cc8d1c3717"],["assets/img/login.jpeg","59fc83e26c663ade5dcae6e7d56ca970"],["assets/img/mask.png","d27fbc90c2e644dfdc9765640dc713b9"],["assets/img/new_logo.png","44bf13a71a4db6e15913fe8af9296711"],["assets/img/placeholder.jpg","1eb7fff2a469da3cc6c3311572d7696d"],["assets/img/product1.jpg","081bf019322fc100b3b84f34d9bff302"],["assets/img/product2.jpg","f54ea19fad25688d79a4226b97c7781d"],["assets/img/product3.jpg","a0e400118b382fc007111de984da7552"],["assets/img/register.jpeg","49b54380ba092ba68ab160f3dd8d5773"],["assets/img/sidebar-1.jpg","61c4c50e61d68de31c8951af5470a2c2"],["assets/img/sidebar-2.jpg","d30c9e30978c9278180dcce2bb66c054"],["assets/img/sidebar-3.jpg","c963330bcd48670a75ffdd38622b1532"],["assets/img/sidebar-4.jpg","f34e943fbffb73c68e761828b1c00980"],["assets/img/userspace-negative.png","f43510d7415af5a4ebb547415ae0348e"],["assets/img/userspace-positive.png","7468dbecad8a6acc6fa319652524a2f8"],["assets/js/bootstrap-datetimepicker.js","ad7ccfc29e8ff7a78a904b9f524cd624"],["assets/js/bootstrap-notify.js","d6fa8752e667953fc7ca1998b75403c5"],["assets/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["assets/js/chartist.min.js","d7870b3ee02f8528e183e5492b1456be"],["assets/js/demo.js","f1dd4f50b75fc776ded960f0267016c1"],["assets/js/fullcalendar.min.js","778522d3fe6feb8b4979fc418a4d79ee"],["assets/js/jasny-bootstrap.min.js","f7206b56475c32f066506727235831d6"],["assets/js/jquery-3.1.1.min.js","e071abda8fe61194711cfc2ab99fe104"],["assets/js/jquery-jvectormap.js","0afe20703ed1fc75f0d3fbf664896cd3"],["assets/js/jquery-ui.min.js","8b3413d732e1f3470314fa0b6e62470a"],["assets/js/jquery.bootstrap-wizard.js","75e736b85813882518df70a9d2451ad1"],["assets/js/jquery.datatables.js","dbd0c01d9540d3037948bf4de859e82d"],["assets/js/jquery.select-bootstrap.js","58761a19eff23b0f17005004d52aad57"],["assets/js/jquery.tagsinput.js","d0fe208d1eab7f355a3c80f2f2728d94"],["assets/js/jquery.validate.min.js","3b00d60f87e893caf2649eff0d48813a"],["assets/js/material-dashboard.js","fe711e6805efb8aaa36f5d86c04cc668"],["assets/js/material.min.js","bd26a69c4211d42518ba6dbc8ea67da7"],["assets/js/moment.min.js","e0f56e22a9e610cdef24919f91ccc91f"],["assets/js/nouislider.min.js","68309968fd36260a4a2c2171987e5766"],["assets/js/perfect-scrollbar.jquery.min.js","01554ac137637d449ff38ea0dc4244fc"],["assets/js/sweetalert2.js","f5ba130765fa875cca1bbe00617d80d4"],["assets/normalize.css","e5f48fc69b2048b25231c3959c2995fe"],["assets/stylesheet.css","865a0b264c64a0eabf4addf5ce2a0a99"],["index.html","6280e538a8021cd6d9828e5c0ceb8e26"],["manifest.json","2f4dba1d897b3590be3668f2cacd23e0"]];
var cacheName = 'sw-precache-v2-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {
                credentials: 'same-origin',
                redirect: 'follow'
              }));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||d.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||d.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||d.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||d.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);l=l?l.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),d.preCacheItems=d.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var l,d=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: cache first ["+e.url+"]",n),o.openCache(n).then(function(t){return t.match(e).then(function(t){return t?t:o.fetchAndCache(e,n)})})}var o=e("../helpers");t.exports=r},{"../helpers":1}],8:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: cache only ["+e.url+"]",n),o.openCache(n).then(function(t){return t.match(e)})}var o=e("../helpers");t.exports=r},{"../helpers":1}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var o,s,a=[];if(c){var u=new Promise(function(n){o=setTimeout(function(){t.match(e).then(function(e){e&&n(e)})},1e3*c)});a.push(u)}var f=i.fetchAndCache(e,n).then(function(e){if(o&&clearTimeout(o),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),s=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(s)return s;throw r})});return a.push(f),Promise.race(a)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e){for(var t,n=[],r=0,o=0,i="";null!=(t=x.exec(e));){var c=t[0],s=t[1],a=t.index;if(i+=e.slice(o,a),o=a+c.length,s)i+=s[1];else{var f=e[o],h=t[2],p=t[3],l=t[4],d=t[5],g=t[6],m=t[7];i&&(n.push(i),i="");var v=null!=h&&null!=f&&f!==h,w="+"===g||"*"===g,y="?"===g||"*"===g,b=t[2]||"/",E=l||d||(m?".*":"[^"+b+"]+?");n.push({name:p||r++,prefix:h||"",delimiter:b,optional:y,repeat:w,partial:v,asterisk:!!m,pattern:u(E)})}}return o<e.length&&(i+=e.substr(o)),i&&n.push(i),n}function o(e){return s(r(e))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(m(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){for(var o=r(e),i=g(o,n),c=0;c<o.length;c++)"string"!=typeof o[c]&&t.push(o[c]);return f(i,t)}function g(e,t){t=t||{};for(var n=t.strict,r=t.end!==!1,o="",i=e[e.length-1],c="string"==typeof i&&/\/$/.test(i),s=0;s<e.length;s++){var u=e[s];if("string"==typeof u)o+=a(u);else{var f=a(u.prefix),p="(?:"+u.pattern+")";u.repeat&&(p+="(?:"+f+p+")*"),p=u.optional?u.partial?f+"("+p+")?":"(?:"+f+"("+p+"))?":f+"("+p+")",o+=p}}return n||(o=(c?o.slice(0,-2):o)+"(?:\\/(?=$))?"),o+=r?"$":n&&c?"":"(?=\\/|$)",new RegExp("^"+o,h(t))}function m(e,t,n){return t=t||[],v(t)?n||(n={}):(n=t,t=[]),e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=m,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=g;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get(/\/assets\//, toolbox.fastest, {});
toolbox.router.get("manifest.json", toolbox.fastest, {});
toolbox.router.get("index.html", toolbox.fastest, {});




