export default {
    mounted: (el: HTMLElement) => {
        el.textContent = el.innerText.toUpperCase();
    },
};
