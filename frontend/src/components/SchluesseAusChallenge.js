import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

/**
 * Component for displaying conclusions from the challenge.
 *
 */
const SchluesseAusChallenge = ({schluesse}) => {
    const beiDirSelbst = schluesse[2];
    const sozialUmfeld = schluesse[3];
    const politisch = schluesse[0];
    const produkt = schluesse[1];

    return (
        <div>
            <h1> Schlüsse aus der Challenge</h1>

            <div>
                <div className="col-md-12">
                    <h2>bei dir selbst</h2>
                    <p>{beiDirSelbst}</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <h2>in deinem sozialen Umfeld</h2>
                    <p>{sozialUmfeld}</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <h2>auf politischer Ebene</h2>
                    <p>{politisch}</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <h2>auf Ebene Produktherstellung</h2>
                    <p>{produkt}</p>
                </div>
            </div>
        </div>
    );
}

export default SchluesseAusChallenge;
