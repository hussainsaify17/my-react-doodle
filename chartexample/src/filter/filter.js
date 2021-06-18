import React, { useState } from 'react'
import './filter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

export default function ToggleButtons({ filter, onChange = () => { }, selectedValue }) {
    const [timedOut, activateTimeOut] = useState(false)
    let handleTimeout = () => activateTimeOut(!timedOut)
    return (
        <label>
            <input
                checked={selectedValue === filter}
                onChange={() => onChange(filter)}
                type="radio"
                name="toggle" />
            <span>{filter}<button onClick={handleTimeout} type="submit" className="btn btn-default">
                <FontAwesomeIcon color={timedOut ? 'red' : ''} icon={faExclamationCircle} />
            </button>
            </span>
        </label>
    )
}
