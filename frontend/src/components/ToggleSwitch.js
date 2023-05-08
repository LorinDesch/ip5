const ToggleSwitch = ({ leftText, rightText, isOn, handleToggle }) => {

    const colors = ["#85B3B7", "#D4E09B"];

    const styles = {
        toggleContainer: {
            display: 'flex',
            alignItems: 'center'
        },
        left: {
            textAlign: 'right',
            cursor: 'pointer',
            fontFamily: 'sans-serif',
        },
        right: {
            textAlign: 'left',
            cursor: 'pointer',
            fontFamily: 'sans-serif',
        },
        switch: {
            position: 'relative',
            display: 'inline-block',
            width: '4rem',
            height: '2.5rem',
            margin: '0 1rem'
        },
        slider: {
            position: 'absolute',
            cursor: 'pointer',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: colors[0],
            transition: '.4s',
            borderRadius: '2.5rem'
        },
        sliderRound: {
            position: 'absolute',
            content: '',
            height: '1.875rem',
            width: '1.875rem',
            left: '0.3125rem',
            bottom: '0.3125rem',
            backgroundColor: 'white',
            transition: '.4s',
            borderRadius: '50%'
        },
        sliderChecked: {
            backgroundColor: colors[1]
        },
        sliderFocus: {
            boxShadow: '0 0 1px #2196F3'
        },
        sliderCheckedRound: {
            transform: 'translateX(1.625rem)'
        },
        checkbox: {
            opacity: 0,
            position: 'absolute',
            top: 0,
            left: 0,
            width: 0,
            height: 0,
            zIndex: -1
        }
    };

    return (
        <div style={styles.toggleContainer}>
            <div style={styles.left} onClick={() => handleToggle(!isOn)}>
                <p>{leftText}</p>
            </div>
            <label style={styles.switch}>
                <input type="checkbox" style={styles.checkbox} checked={isOn} onChange={(e) => handleToggle(e.target.checked)} />
                <span style={{ ...styles.slider, ...(isOn && styles.sliderChecked) }}>
                    <span style={{ ...styles.sliderRound, ...(isOn && styles.sliderCheckedRound) }}></span>
                </span>
            </label>
            <div style={styles.right} onClick={() => handleToggle(!isOn)}>
                <p>{rightText}</p>
            </div>
        </div>
    );
};
export default ToggleSwitch;