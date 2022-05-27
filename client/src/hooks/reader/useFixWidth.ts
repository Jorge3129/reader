import {useRef} from "react";


export const useFixWidth = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    const onClose = (showTable: boolean) => {
        const container = containerRef?.current
        if (!container) return;
        const width = container.clientWidth;
        if (showTable) container.style.width = '' + width;
        else container.style.width = '100%'
    }

    return {containerRef, onClose}
}