import React, { useState } from 'react'
import { useRef, RefObject } from 'react';
import Nav from '../../features/navigation/nav';

export default function Geolocation() {
    const buttonRef: RefObject<HTMLButtonElement> = useRef(null)
    const [status, setStatus] = useState('')
    const [link, setLink] = useState('')
    const [text, setText] = useState('')

    function geoFindMe() {
        function success(position: any) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(position)
            console.log(latitude, longitude)
            setStatus("")
            setLink(`https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`)
            setText("Данные можно посмотреть тут")
        }

        function error() {
            setStatus("Не получилось получить информацию")
        }

        if (!navigator.geolocation) {
            setStatus("Не поддерживается браузером")
        } else {
            setStatus("Ищем")
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }

    return (
        <div>
            <Nav></Nav>
            <button style={{ cursor: 'pointer', border: 'none', backgroundColor: 'greenyellow', padding: '40px 100px', borderRadius: '20px' }} onClick={geoFindMe} id="find-me" ref={buttonRef}>Покажи, где я</button>
            <div id="status">{status}</div>
            <div><a href={link} id="map-link">{text}</a></div>
        </div>
    )
}
