import React from 'react'
import subscriptioHOC from '../HOC'

function index() {
    return (
        <div>
            third component with ticker "XBT/EUR"
        </div>
    )
}

export default subscriptioHOC(index)
