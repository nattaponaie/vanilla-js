function search() {
    const element = document.querySelector('input');
    console.log('search', element.value);
}

function debounce(fn, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay)
    }
}

const searchDeboucing = debounce(search, 1000)