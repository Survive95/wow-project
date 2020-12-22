import React, { createRef } from 'react'

function Chara(props){

    const image = createRef()

    const changeImage = function(){
        image.current.style.backgroundImage = `url('${props.data.main}')`
    }

    const leaveImage = function(){
        image.current.style.backgroundImage = `url('${props.data.mainr}')`
    }

    return (
        <a rel="noreferrer" href={props.data.wowlink} target="_blank">
            <li ref={image} onMouseLeave={() => leaveImage()} onMouseEnter={() => changeImage()} style={{ backgroundImage: `url('${props.data.mainr}')` }}>
                <div className="player_top">
                    <div className="player_details">
                        <p>{props.data.name}</p>
                        <p>{props.data.realm}</p>
                    </div>
                    <div className="player_details race">
                        <p>{props.data.gender}</p>
                        <p>{props.data.race}</p>
                    </div>
                    <div className="player_details">
                        <p className="player_level">{props.data.level}</p>
                        <p className="player_ilevel"><i className="fas fa-shield-alt"></i>{props.data.ilvl}</p>
                    </div>
                </div>
                <div className="player_details">
                    <p>{props.data.class}</p>
                    <p>{props.data.faction}</p>
                </div>
            </li>
        </a>
    )
}

export default Chara