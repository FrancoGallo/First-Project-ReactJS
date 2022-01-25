import React from 'react';
import { ProgressBar } from 'react-bootstrap'
import './TitleLoad.css'

const TitleLoad = ({ value }) => {
    let colors = 'danger'

    if ((value >= 60) && (value <= 80)) {
        colors = 'warning'
    }
    else if (value > 80) {
        colors = 'success'
    }

    return (
        <section>
            <h2>{value}%</h2>
            <ProgressBar striped animated variant={colors} now={value}/>
        </section>
    )
};

export default TitleLoad;
