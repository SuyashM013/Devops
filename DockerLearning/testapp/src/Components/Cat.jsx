import React, { useState } from 'react'



function Cat() {
    const [fact, setFace] = useState('');

    const fetchCatFact = async () => {

        const res = await fetch('https://catfact.ninja/fact');

        const data =  await res.json();
        console.log(data);
        setFace(data.fact);
    }


    return (
        <div>Cat
            <button onClick={fetchCatFact}>Get Cat Fact</button>
            <p>{fact}</p>
        </div>
    )
}

export default Cat