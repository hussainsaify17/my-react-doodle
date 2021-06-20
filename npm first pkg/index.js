function debounce() {
    let timeoutID = null;
    return (fn, time = 300) => {
        if (timeoutID != null) {
            clearTimeout(timeoutID)
        }
        timeoutID = setTimeout(fn, time)
    }
}
export default new debounce();