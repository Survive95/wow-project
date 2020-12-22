import React, { createRef, useState } from 'react'

function Elcode(props) {

    const [notifs, setNotifs] = useState(false)

    const copyToClip = function () {
        setNotifs(true)
        navigator.clipboard.writeText(props.code)
        setTimeout(() => {
            setNotifs(false)
        }, 2000);
    }

    return (
        <div className="elcode_container">
            <h3 className="elvui_title">{props.title}</h3>
            <button className="elvui_code_copy" onClick={() => copyToClip()}><i className="fas fa-copy"></i>Copier le code</button>
            <p className={notifs ? "notif active" : "notif"}>Code copié !</p>
        </div>
    )
}

export default Elcode