import React from 'react';

const SchlüsseAusChallenge = ({data}) => {
    const beiDirSelbst = "Ich habe gemerkt dass ich mich in der Challenge sehr gut auf mich selbst konzentrieren konnte";
    const sozialUmfeld = "Ich habe gemerkt dass ich mich in der Challenge sehr gut auf mein soziales Umfeld konzentrieren konnte";
    const politisch = "Ich habe gemerkt dass ich mich in der Challenge sehr gut auf die Politik konzentrieren konnte";
    const produkt = "Ich habe gemerkt dass ich mich in der Challenge sehr gut auf das Produkt konzentrieren konnte";


    return (
        <div>
            <h1>bei dir selbst</h1>
            <p>{beiDirSelbst}</p>

            <h1>soziales Umfeld</h1>
            <p>{sozialUmfeld}</p>

            <h1>politisch</h1>
            <p>{politisch}</p>

            <h1>produkt</h1>
            <p>{produkt}</p>
        </div>
    );
}

export default SchlüsseAusChallenge;