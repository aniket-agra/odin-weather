function populatePage2() {
    let bodyElem = document.querySelector("body");
    document.querySelectorAll("body > *").forEach(e => bodyElem.removeChild(e));

    let container = document.createElement("div");
    container.classList.add("container");
    
}

export {populatePage2};