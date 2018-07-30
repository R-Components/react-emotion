
import * as emotionObj from './emotions';

const emotionArr = Object.values(emotionObj.qq);
const emotionArr2 = Object.keys(emotionObj.qq);

const parseToImg = (str) => {
    const str2 = str.replace(/\/:em:(\d+)/g, function(item, index) {
        return `<img src=${emotionArr[index - 1]} alt=${emotionArr2[index - 1]} />`;
    });
    return str2;
};

export default parseToImg;

