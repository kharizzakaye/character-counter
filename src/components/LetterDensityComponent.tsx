import React from 'react'

const LetterDensityComponent = ( {textData} : {textData: string}) => {
    return (
        <>
            <h2>Letter Density</h2>

            { !textData &&
                <p>No characters found. Start typing to see letter density.</p>
            }

            { textData && 
                <p>Data here</p>
            }
        </>
    )
}

export default LetterDensityComponent