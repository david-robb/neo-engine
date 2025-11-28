import { onMounted } from 'vue';

export function useKeyboardListener(gridToggle: () => void): void {
    onMounted(() => {
        window.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.key === 'g' || event.key == 'G') {
                gridToggle();
            }
        });
    });
}
