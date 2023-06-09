import React from 'react';
import './style.css';
import {getLeftIndex, getRightIndex} from "./helperFunctions/HelperFunctions";

/**
 * Component for displaying tree images based on selected options.
 *
 */
const TreeImages = ({
                        leftIndex,
                        rightIndex,
                        fakeData,
                        selectedOption2,
                        selectedOption3,
                        selectedOption1,
                    }) => {


    if (selectedOption2 === "Challenge") {
        leftIndex = 0;
        rightIndex = 0;
    } else {
        leftIndex = getLeftIndex(fakeData, selectedOption1, selectedOption2, selectedOption3);
        rightIndex = getRightIndex(fakeData, selectedOption1, selectedOption2, selectedOption3);

        if (isNaN(leftIndex)) {
            leftIndex = 0;
        }
        if (isNaN(rightIndex)) {
            rightIndex = 0;
        }
    }


    const leftImagePath = `${process.env.PUBLIC_URL}/images/tree_left/l${leftIndex}-min-min.png`;
    const rightImagePath = `${process.env.PUBLIC_URL}/images/tree_right/r${rightIndex}-min-min.png`;

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
        <div>
            <h3 className="treeText">Hast Du das Commitment öfter <br/> erreicht als die ausgewählten Gruppen?</h3>
            <div className="tree" style={containerStyles}>

                <img src={leftImagePath} alt={`left tree ${leftIndex}`} style={imageStylesLeft}/>
                <img src={rightImagePath} alt={`right tree ${rightIndex}`} style={imageStylesRight}/>
            </div>
        </div>
    );
};

export default TreeImages;