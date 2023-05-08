import React from 'react';

const SchluesseAusChallenge = ({data}) => {
    const beiDirSelbst = "Ich habe gemerkt dass ich mich in der Challenge sehr gut auf mich selbst konzentrieren konnte";
    const sozialUmfeld = "Ich habe gemerkt dass ich mich in der Challenge sehr gut auf mein soziales Umfeld konzentrieren konnte";
    const politisch = "Ich habe gemerkt dass ich mich in der Challenge sehr gut auf die Politik konzentrieren konnte";
    const produkt = "Ich habe gemerkt dass ich mich in der Challenge sehr gut auf das Produkt konzentrieren konnte";


    return (
        <div style={{fontSize: '1vw'}}>

            <h1 style={{fontSize: '2vw'}}> Schlüsse aus der Challenge</h1>

            <h2 style={{fontSize: '1.5vw'}}>bei dir selbst</h2>
            <p style={{fontSize: '1vw'}}>{beiDirSelbst}</p>

            <h2 style={{fontSize: '1.5vw'}}>in deinem sozialen Umfeld</h2>
            <p style={{fontSize: '1vw'}}>{sozialUmfeld}</p>

            <h2 style={{fontSize: '1.5vw'}}>auf politischer Ebene</h2>
            <p style={{fontSize: '1vw'}}>{politisch}</p>

            <h2 style={{fontSize: '1.5vw'}}>auf Ebene Produktherstellung</h2>
            <p style={{fontSize: '1vw'}}>{produkt}</p>
        </div>
    );
}

export default SchluesseAusChallenge;
