import React from 'react'

const TechnologyItem = ({ name, icon }) => {
    return (
        <li>
            {icon}
            {name}
        </li>
    )
}

export default TechnologyItem