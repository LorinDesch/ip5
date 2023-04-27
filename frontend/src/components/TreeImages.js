import React from 'react';

const TreeImages = ({ leftIndex, rightIndex }) => {
    const leftImagePath = `${process.env.PUBLIC_URL}/images/tree_left/l${leftIndex}-min.png`;
    const rightImagePath = `${process.env.PUBLIC_URL}/images/tree_right/r${rightIndex}-min.png`;



    return (
        <div>
            <img src={leftImagePath} alt={`left tree ${leftIndex}`}  />
            <img src={rightImagePath} alt={`right tree ${rightIndex}`} />
        </div>
    );
};

export default TreeImages;
