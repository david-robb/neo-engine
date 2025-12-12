export default {
    mounted: (el: HTMLElement) => {
        el.textContent = (+el.innerText / 149597870.7).toFixed(2) + ' AU';
    },
};
