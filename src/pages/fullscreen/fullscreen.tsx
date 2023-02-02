import React, { useRef, RefObject, useState } from 'react'
import Nav from '../../features/navigation/nav';

export default function Fullscreen() {
    const button: RefObject<HTMLButtonElement> = useRef(null)
    const [text, setText] = useState('toggle on')
    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setText('toggle off');

        } else if (document.exitFullscreen) {
            document.exitFullscreen();
            setText('toggle on');

        }

    }
    return (
        <main>
            <Nav />
            <h1>Fullscreen toggle</h1>
            <button style={{ cursor: 'pointer', border: 'none', backgroundColor: 'greenyellow', padding: '40px 100px', borderRadius: '20px' }} onClick={toggleFullscreen} className='toggler' id="toggler" ref={button}>{text}</button>
        </main>
    )
}
