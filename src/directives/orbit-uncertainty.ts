export default {
    mounted: (el: HTMLElement) => {
        const uncertainty = +el.innerText;
        if (uncertainty >= 7) {
            el.style.color = 'red';
        } else if (uncertainty > 3) {
            el.style.color = 'yellow';
        } else {
            el.style.color = 'green';
        }
    },
};
