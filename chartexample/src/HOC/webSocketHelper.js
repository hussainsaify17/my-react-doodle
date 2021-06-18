// export function webSocketHelper() {
let webSocketConn = null;
let pendingSubs = [];

export function getConnection() {
    if (!webSocketConn) {
        webSocketConn = new WebSocket('wss://ws.kraken.com/')
        window.connection = webSocketConn;
        return webSocketConn
    }
    else
        return webSocketConn
}

export function subscribe(subs) {
    if (isSocketReady()) {
        webSocketConn.send(JSON.stringify({ ...subs, "event": "subscribe" }))
        pendingSubs = []
    }
    else {
        pendingSubs.push(subs)
        webSocketConn.onopen = processpendingsubs
    } 
}

export function unsubscribe(subs) {
    if (isSocketReady()) {
        webSocketConn.send(JSON.stringify({...subs, "event": "unsubscribe",}))
    }
    else {
        pendingSubs.push(subs)
        webSocketConn.onopen = processpendingsubs
    } 
}

function processpendingsubs(){
    pendingSubs.forEach(subs => subscribe(subs))
    pendingSubs = []
}

export function isSocketReady(){
    return webSocketConn !==null && webSocketConn.readyState === 1 
}

