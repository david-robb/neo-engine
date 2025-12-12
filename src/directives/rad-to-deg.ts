export default {
    mounted: (el: HTMLElement) => {
        el.textContent = ((+el.innerText * 180) / Math.PI).toFixed(2) + ' °';
    },
};
