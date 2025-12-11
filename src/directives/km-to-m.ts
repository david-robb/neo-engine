export default {
    mounted: (el: HTMLElement) => {
        el.textContent = (+el.innerText * 1000).toFixed(2) + ' m';
    },
};
