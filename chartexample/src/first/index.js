import React from 'react'
import subscriptioHOC from '../HOC'

function index({updatesubs}) {
    return (
        <div>
            first component with ticker "XBT/USD"
            <button onClick={()=>{
              updatesubs({
                "pair": ["XBT/EUR"],
                "subscription": {
                  "name": "ticker"
                }})  
            }}>Update S</button>
        </div>
    )
}

export default subscriptioHOC(index)
