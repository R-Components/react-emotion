import React from 'react';
import * as emotionObj from './emotions';
import './style.less';

const Emotion = (props) => {
    const { type } = props;
    const emotions = Object.values(emotionObj[type]);
    const keys = Object.keys(emotionObj[type]);
    return (
        <div className={`emotion-list ${type}`} style={props.style || ''}>
            
            {
                emotions.map((item, index) => (
                    <img src={item} onClick={() => props.onSelectEmotion(keys[index])} alt="" />
                ))
            }
        </div>
    )
};

export default Emotion;
