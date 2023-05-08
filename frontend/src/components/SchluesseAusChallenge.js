import React from 'react';

const SchluesseAusChallenge = ({data}) => {

    const beiDirSelbst = "Ich habe gemerkt dass ich mich in der Challenge sehr gut auf mich selbst konzentrieren konnte";
    const sozialUmfeld = "Ich habe gemerkt dass ich mich in der Challenge sehr gut auf mein soziales Umfeld konzentrieren konnte";
    const politisch = "Ich habe gemerkt dass ich mich in der Challenge sehr gut auf die Politik konzentrieren konnte";
    const produkt = "Ich habe gemerkt dass ich mich in der Challenge sehr gut auf das Produkt konzentrieren konnte";


    return (
        <div>

            <h1> Schlüsse aus der Challenge</h1>

            <h2>bei dir selbst</h2>
            <p>{beiDirSelbst}</p>

            <h2>in deinem sozialen Umfeld</h2>
            <p>{sozialUmfeld}</p>

            <h2>auf politischer Ebene</h2>
            <p>{politisch}</p>

            <h2>auf Ebene Produktherstellung</h2>
            <p>{produkt}</p>
        </div>
    );
}

export default SchluesseAusChallenge;