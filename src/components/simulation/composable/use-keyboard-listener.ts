import { onMounted } from 'vue';

export function useKeyboardListener(onRayCastToggle: () => void, gridToggle: () => void): void {
    onMounted(() => {
        window.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.key === 't' || event.key == 'T') {
                onRayCastToggle();
            }

            if (event.key === 'g' || event.key == 'G') {
                gridToggle();
            }
        });
    });
}
