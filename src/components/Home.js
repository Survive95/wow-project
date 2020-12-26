import React, { useEffect } from 'react'
import video from '../assets/bg_video.mp4'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Countdown from 'react-countdown'
import image1 from '../assets/rois.png'
import image2 from '../assets/panda.png'
import image3 from '../assets/sylvanas.png'
import image4 from '../assets/dh.png'

function Home() {

    function next(today) {
        var offset = (today.getDay() < 3) ? 0 : 7;
        var daysUntilWednesday = 3 + offset - today.getDay();
        return new Date().setDate(today.getDate() + daysUntilWednesday);
    }

    var date_event = next(new Date());

    let day_event = new Date(date_event).getDate()
    let month_event = new Date(date_event).getUTCMonth() + 1
    let years_event = new Date(date_event).getFullYear()

    let end_date_event = `${month_event}/${day_event}/${years_event} 07:00:00`

    let now_day = new Date().getDate()
    let now_month = new Date().getUTCMonth() +1
    let now_years = new Date().getFullYear()

    let end_time = `${now_month}/${now_day}/${now_years} 07:00:00`

    console.log(end_time)

    let date_event_mili = new Date(end_date_event).getTime()

    window.scrollTo(0, 0)

    const scrollDown = function(){
        window.scrollTo({
            top : 900,
            behavior : 'smooth'
        })
    }

    return (
        <section className="home_container animate__animated animate__fadeIn">
            <div className="video_container">
                <video className="home_video" autoPlay loop src={video}></video>
                <div className="home_video_content">
                    <h2 className="home_video-title">WoW Project</h2>
                    <p className="home_video-text">Réinitialisation de World of Warcraft</p>
                    <p className="home_video-count">Hebdomadaire : <Countdown  date={date_event_mili}></Countdown></p>
                    {/* <p className="home_video-count">Quotidienne : <Countdown date={end_time}></Countdown></p> */}
                    <i onClick={() => scrollDown()} className="home_arrow fas fa-arrow-down"></i>
                </div>
            </div>
            <div className="home_content">
                <section className="home_site">
                    <div>
                        <h3>World of Warcraft</h3>
                        <p>World of Warcraft est un jeu vidéo de type MMORPG développé par la société Blizzard Entertainment. C'est le 4ᵉ jeu de l'univers médiéval-fantastique Warcraft</p>
                        <a href="https://worldofwarcraft.com/fr-fr/" target="_blank"><i className="fas fa-link"></i>World of Warcraft</a>
                    </div>
                    <div className="home_circle"></div>
                    <img src={image1}></img>
                </section>
                <section className="home_site">
                    <div>
                        <h3>Icy Veins</h3>
                        <p>Icy Veins fournit des actualités et des guides détaillés sur World of Warcraft, WoW Classic, Hearthstone, Diablo III, Overwatch, Heroes of the Storm et StarCraft 2.</p>
                        <a href="https://www.icy-veins.com/" target="_blank"><i className="fas fa-link"></i>Icy Veins</a>
                    </div>
                    <div className="home_circle"></div>
                    <img src={image2}></img>
                </section>
                <section className="home_site">
                    <div>
                        <h3>Wow Head</h3>
                        <p>Le plus grand site d'information sur World of Warcraft, proposant des guides, des actualités, et des informations sur les classes, métiers, congrégations, ...</p>
                        <a href="https://fr.wowhead.com/" target="_blank"><i className="fas fa-link"></i>Wow Head</a>
                    </div>
                    <div className="home_circle"></div>
                    <img src={image3}></img>
                </section>
                <section className="home_site">
                    <div>
                        <h3>Wow Progress</h3>
                        <p>Progression mythique, histoire détaillée des guildes et des personnages, progression PvE, recrutement.</p>
                        <a href="https://www.wowprogress.com/" target="_blank"><i className="fas fa-link"></i>Wow Progress</a>
                    </div>
                    <div className="home_circle"></div>
                    <img src={image4}></img>
                </section>
            </div>
        </section>
    )
}

export default Home