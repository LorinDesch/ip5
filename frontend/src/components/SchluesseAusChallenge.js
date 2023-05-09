import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SchluesseAusChallenge = ({data}) => {
    const beiDirSelbst = "Ich habe gemerkt dass ich mich in der Challenge sehr gut auf mich selbst konzentrieren konnte";
    const sozialUmfeld = "Ich habe gemerkt dass ich mich in der Challenge sehr gut auf mein soziales Umfeld konzentrieren konnte";
    const politisch = "Ich habe gemerkt dass ich mich in der Challenge sehr gut auf die Politik konzentrieren konnte";
    const produkt = "Ich habe gemerkt dass ich mich in der Challenge sehr gut auf das Produkt konzentrieren konnte";

    return (
        <div className="container" style={{textAlign: 'center', maxWidth: '400px', paddingTop: '1rem'}}>
            <h1 style={{fontSize: '1.5rem', marginBottom: '1rem'}}> Schlüsse aus der Challenge</h1>

            <div className="row">
                <div className="col-md-12">
                    <h2 style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>bei dir selbst</h2>
                    <p style={{fontSize: '1rem'}}>{beiDirSelbst}</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <h2 style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>in deinem sozialen Umfeld</h2>
                    <p style={{fontSize: '1rem'}}>{sozialUmfeld}</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <h2 style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>auf politischer Ebene</h2>
                    <p style={{fontSize: '1rem'}}>{politisch}</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <h2 style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>auf Ebene Produktherstellung</h2>
                    <p style={{fontSize: '1rem'}}>{produkt}</p>
                </div>
            </div>
        </div>
    );
}

export default SchluesseAusChallenge;
