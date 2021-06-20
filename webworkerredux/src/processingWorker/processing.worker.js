self.addEventListener('message', function (e) {
    console.log(e.data)
})

setTimeout(function () {
    self.postMessage({
        type: 'processMessage',
        value: 'Hello from web worker'
    })
},10000)