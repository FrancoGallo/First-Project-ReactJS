import React from 'react';
import TitleLoad from './TitleLoad';
import { useState, useEffect } from 'react';

const TitleLoadContainer = () => {
    const [value, setValue] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setValue((oldValue) => {
                const newValue = oldValue + 20

                if (newValue === 100) {
                    clearInterval(interval)
                }

                return newValue
            })
        }, 290)
    }, [])

    return (
        <TitleLoad value={value}/>
    )
};

export default TitleLoadContainer;
