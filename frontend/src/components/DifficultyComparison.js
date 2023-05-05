import React, {useState} from 'react';
import TopNavbar from './TopNavbar';
import Difficulty from "./Charts/Difficulty";

const DifficultyComparison = ({data, width, height}) => {
    const [isOn, setIsOn] = useState(false);

    data = [200, 30, 160, 50, 300, 400];

    return (
        <div>
            <TopNavbar isOn={isOn} setIsOn={setIsOn}/>

            <h1>Difficulty Comparison</h1>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh"
            }}>
                <Difficulty data={data} width={600} height={400}/>
            </div>
        </div>
    );
};

export default DifficultyComparison;
