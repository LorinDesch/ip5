import React from 'react';

const TreeImages = ({ leftIndex, rightIndex }) => {
    const leftImagePath = `${process.env.PUBLIC_URL}/images/tree_left/l${leftIndex}-min.png`;
    const rightImagePath = `${process.env.PUBLIC_URL}/images/tree_right/r${rightIndex}-min.png`;

    const containerStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const imageStylesRight = {
        marginLeft: '-30rem',
        width: '60rem',
        height: 'auto',
    };
    const imageStylesLeft = {
        marginRight: '-30rem',
        width: '60rem',
        height: 'auto',
    };

    return (
        <div style={containerStyles}>
            <img src={leftImagePath} alt={`left tree ${leftIndex}`} style={imageStylesLeft} />
            <img src={rightImagePath} alt={`right tree ${rightIndex}`} style={imageStylesRight} />
        </div>
    );
};

export default TreeImages;
