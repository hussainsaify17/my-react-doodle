import React from 'react'
import subscriptioHOC from '../HOC'

function index() {
    return (
        <div>
            fourth component with ticker "XBT/USD"
        </div>
    )
}

export default subscriptioHOC(index)
