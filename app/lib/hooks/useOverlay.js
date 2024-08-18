import { useState } from 'react';

export function useOverlay() {
    const [isOverlayVisible, setOverlayVisible] = useState(false);

    const showOverlay = () => setOverlayVisible(true);
    const hideOverlay = () => setOverlayVisible(false);

    return {
        isOverlayVisible,
        showOverlay,
        hideOverlay,
    };
}