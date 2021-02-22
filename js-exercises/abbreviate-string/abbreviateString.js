import { isString } from 'util';

function abbreviateString(str) {
  if (isString(str)) {
    const splitArray = str.split(' ');
    let abbStr = '';
    abbStr += `${splitArray[0]} ${splitArray[splitArray.length - 1].charAt(0).toUpperCase()}.`;
    return abbStr;
  }
  throw 'invalid Strong';
}

export { abbreviateString };
