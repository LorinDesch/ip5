import React, { useState } from 'react';

const ToggleSwitch = ({ leftText, rightText }) => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };

    const styles = {
        toggleContainer: {
            display: 'flex',
            alignItems: 'center'
        },
        left: {
            textAlign: 'right'
        },
        right: {
            textAlign: 'left'
        },
        switch: {
            position: 'relative',
            display: 'inline-block',
            width: '3.75rem',
            height: '2.125rem',
            margin: '0 1rem'
        },
        slider: {
            position: 'absolute',
            cursor: 'pointer',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#ccc',
            transition: '.4s',
            borderRadius: '2.125rem'
        },
        sliderRound: {
            position: 'absolute',
            content: '',
            height: '1.625rem',
            width: '1.625rem',
            left: '0.25rem',
            bottom: '0.25rem',
            backgroundColor: 'white',
            transition: '.4s',
            borderRadius: '50%'
        },
        sliderChecked: {
            backgroundColor: '#2196F3'
        },
        sliderFocus: {
            boxShadow: '0 0 1px #2196F3'
        },
        sliderCheckedRound: {
            transform: 'translateX(1.625rem)'
        }
    };

    return (
        <div style={styles.toggleContainer}>
            <div style={styles.left}>
                <p>{leftText}</p>
            </div>
            <label style={styles.switch}>
                <input type="checkbox" checked={isOn} onChange={handleToggle} />
                <span style={{ ...styles.slider, ...(isOn && styles.sliderChecked) }}>
          <span style={{ ...styles.sliderRound, ...(isOn && styles.sliderCheckedRound) }}></span>
        </span>
            </label>
            <div style={styles.right}>
                <p>{rightText}</p>
            </div>
        </div>
    );
};

export default ToggleSwitch;
