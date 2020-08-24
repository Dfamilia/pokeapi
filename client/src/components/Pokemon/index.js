import React from 'react'

const index = React.forwardRef(({ pokemonInfo }, ref) => {
    return (
        <div ref={ref}>
            {pokemonInfo.name}
        </div>
    )
})

export default index
