/* eslint-disable @typescript-eslint/ban-ts-comment */
export const isAndroid = navigator.userAgent.toLowerCase().indexOf('android') !== -1;
export const isGoogleBot = navigator.userAgent.toLowerCase().indexOf('googlebot') !== -1;
// @ts-ignore
export const isIE = /*@cc_on!@*/false || !!document.documentMode;
export const isEdge = !(isIE) && !!window.StyleMedia;
// @ts-ignore
export const isFirefox = typeof InstallTrigger !== 'undefined';
// @ts-ignore
export const isOpera = (!!window.opr && !!window.opr.addons) || !!window.opera
  || navigator.userAgent.indexOf(' OPR/') >= 0;
// @ts-ignore
export const isChrome = !isGoogleBot && !isEdge && !isOpera && !!window.chrome && (
  // @ts-ignore
  !!window.chrome.webstore
  || navigator.vendor.toLowerCase().indexOf('google inc.') !== -1
);
export const isSafari = !isChrome && navigator.userAgent.toLowerCase().indexOf('safari') !== -1;
export const isBlink = (isChrome || isOpera) && !!window.CSS;
