const callApi = () => {
    console.log('callApi');
    return new Promise(resolve => {
        setTimeout(() => resolve(console.log('done')), 2000)
    })
}

const throttle = (fn, limit) => {
    let isCalling = false;
    return function() {
        if (!isCalling) {
            isCalling = true;
            fn();
            
            setTimeout(() => {
                isCalling = false
            }, limit)
        }
    }
}

const handleClick = throttle(callApi, 5000)