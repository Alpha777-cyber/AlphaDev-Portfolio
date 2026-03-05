import { useEffect } from 'react';

function Cursor() {
    useEffect(() => {
        const cursorOuter = document.createElement('div');
        const cursorInner = document.createElement('div');
        cursorOuter.className = 'cursor-outer';
        cursorInner.className = 'cursor-inner';
        document.body.appendChild(cursorOuter);
        document.body.appendChild(cursorInner);

        let mouseX = 0,
            mouseY = 0;
        let posX = 0,
            posY = 0;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorInner.style.left = `${mouseX}px`;
            cursorInner.style.top = `${mouseY}px`;
        };

        document.addEventListener('mousemove', onMouseMove);

        const animateCursor = () => {
            posX += (mouseX - posX) / 8;
            posY += (mouseY - posY) / 8;
            cursorOuter.style.left = `${posX - 17.5}px`;
            cursorOuter.style.top = `${posY - 17.5}px`;
            requestAnimationFrame(animateCursor);
        };
        animateCursor();

        const mouseEnter = () => {
            cursorOuter.style.transform = 'scale(1.5)';
            cursorOuter.style.borderColor = 'var(--accent-gold)';
            cursorOuter.style.backgroundColor = 'rgba(251, 191, 36, 0.1)';
        };
        const mouseLeave = () => {
            cursorOuter.style.transform = 'scale(1)';
            cursorOuter.style.borderColor = 'var(--accent-cyan)';
            cursorOuter.style.backgroundColor = 'transparent';
        };

        const addHoverListeners = () => {
            const clickables = document.querySelectorAll('a, button, .project-card, input, textarea');
            clickables.forEach((el) => {
                el.addEventListener('mouseenter', mouseEnter);
                el.addEventListener('mouseleave', mouseLeave);
            });
        };
        addHoverListeners();

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.body.removeChild(cursorOuter);
            document.body.removeChild(cursorInner);
        };
    }, []);

    return null;
}

export default Cursor;
