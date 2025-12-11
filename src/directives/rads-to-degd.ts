export default {
    mounted: (el: HTMLElement) => {
        el.textContent = (+el.innerText * 4950355.35).toFixed(2) + ' ° / Day';
    },
};
