import React, { useEffect, useState, useRef } from 'react'
import { getConnection, subscribe, unsubscribe} from './webSocketHelper'
const subscriptioHOC = Component => props => {

    const [ws] = useState(getConnection());
    const [subsc, updatesubs] = useState(props.subscription)

    // const subscription = {
    //     "pair": props.ticker,
    //     "subscription": {
    //         "name": "ticker"
    //     }
    // }


    const oldSubs = useRef(subsc)

    let setSubscription = () => {
        ws.send(JSON.stringify({
            ...subsc,
            "event": "subscribe",
        }))
        // ws.send(JSON.stringify({
        //     ...subscription,
        //     "event": "subscribe",
        // }))
    }

    // Will be running on mounting of component
    useEffect(() => {
        // ws.send(JSON.stringify({
        //     ...props.subscription,
        //     "event": "subscribe",
        // }))
        subscribe(subsc)
        return () => {
            unsubscribe(subsc)
            // ws.send(JSON.stringify({
            //     "event": "unsubscribe",
            //     ...subscription
            // }))
        }
    }, [])

    // Will be running on if props are changed of component
    useEffect(() => {
        if(oldSubs.current !== subsc){
            unsubscribe(oldSubs.current)
            oldSubs.current = subsc
            subscribe(subsc)
        }
    }, [subsc])
    // useEffect(() => {
    //     if (ws.readyState === 1) {
    //         setSubscription()
    //     }
    //     else {
    //         ws.onopen = setSubscription
    //     }
    // }, [props.ticker[0]])


    ws.onmessage = (e) => {
        if (Array.isArray(JSON.parse(e.data))) {
            console.log(JSON.parse(e.data));

        }
        if (JSON.parse(e.data).status)
            console.log(e)
        // switch(e['@type']){

        // }
    }

    ws.onclose = () => {
        console.log('connnection has been closed for ' + props.name);
    }

    return <Component
        updatesubs={updatesubs}
        {...props} />

}

export default subscriptioHOC

