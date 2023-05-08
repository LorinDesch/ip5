import React from 'react';

const TreeImages = ({ leftIndex, rightIndex, isOn }) => {
    const leftImagePath = `${process.env.PUBLIC_URL}/images/tree_left/l${leftIndex}-min-min.png`;
    const rightImagePath = `${process.env.PUBLIC_URL}/images/tree_right/r${rightIndex}-min-min.png`;

    const containerStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const imageStylesRight = {
        marginLeft: '-25vw',
        width: '50vw',
        height: '50vw',
        filter: isOn ? 'blur(5px)' : 'none'
    };
    const imageStylesLeft = {
        marginRight: '-25vw',
        width: '50vw',
        height: '50vw',
        filter: isOn ? 'blur(5px)' : 'none'
    };


    return (
        <div style={containerStyles}>
            <img src={leftImagePath} alt={`left tree ${leftIndex}`} style={imageStylesLeft} />
            <img src={rightImagePath} alt={`right tree ${rightIndex}`} style={imageStylesRight} />
        </div>
    );
};

export default TreeImages;
