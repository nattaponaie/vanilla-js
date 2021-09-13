function search() {
    const element = document.querySelector('input');
    console.log('search', element.value);
}

function debouncingSearch(fn, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay)
    }
}

const fetchData = debouncingSearch(search, 1000)