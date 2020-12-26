import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Chara from './Chara'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function Characters() {

    const players = [
        {
            name: "sibjorn",
            realm: "elune",
            player: 1,
            link: "https://worldofwarcraft.com/fr-fr/character/eu/elune/sibjorn"
        },
        {
            name: "elyndra",
            realm: "elune",
            player: 1,
            link: "https://worldofwarcraft.com/fr-fr/character/eu/elune/elyndra"
        },
        {
            name: "celya",
            realm: "archimonde",
            player: 1,
            link: "https://worldofwarcraft.com/fr-fr/character/eu/archimonde/celya"
        },
        {
            name: "kiiruä",
            realm: "elune",
            player: 2,
            link: "https://worldofwarcraft.com/fr-fr/character/eu/elune/kiiru%C3%A4"
        },
        {
            name: "sânka",
            realm: "elune",
            player: 2,
            link: "https://worldofwarcraft.com/fr-fr/character/eu/elune/s%C3%A2nka"
        },
        {
            name: "elâria",
            realm: "archimonde",
            player: 2,
            link: "https://worldofwarcraft.com/fr-fr/character/eu/archimonde/el%C3%A2ria"
        },
        {
            name: "sänk",
            realm: "elune",
            player: 2,
            link: "https://worldofwarcraft.com/fr-fr/character/eu/elune/s%C3%A4nk"
        },
        {
            name: "nyvram",
            realm: "elune",
            player: 3,
            link: "https://worldofwarcraft.com/fr-fr/character/eu/elune/nyvram"
        },
        {
            name: "eidor",
            realm: "elune",
            player: 3,
            link: "https://worldofwarcraft.com/fr-fr/character/eu/elune/eidor"
        },
        {
            name: "othior",
            realm: "elune",
            player: 3,
            link: "https://worldofwarcraft.com/fr-fr/character/eu/elune/othior"
        },
        {
            name: "lognard",
            realm: "elune",
            player: 1,
            link: "https://worldofwarcraft.com/fr-fr/character/eu/elune/lognard"
        },
        {
            name: "sânkas",
            realm: "elune",
            player: 2,
            link: "https://worldofwarcraft.com/fr-fr/character/eu/elune/sânkas"
        },
    ]

    const [datas, setDatas] = useState([])
    const [token, setToken] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        window.scrollTo(0, 0)

        const formData = new FormData();

        formData.append('grant_type', 'client_credentials');

        axios({
            auth: {
                username: "86ae002bc5a640c79807aad0a27d9d89",
                password: "5aZWOv3IIm34p4vWazqushBYqwQgV2iI"
            },
            method: 'post',
            url: 'https://eu.battle.net/oauth/token',
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(function (res) {
                console.log(res);
                setToken(res.data.access_token)
            })
            .then(() => {
                getData()
            })
            .catch(function (err) {
                console.log(err);
            });


    }, [token])


    const getData = function () {
        if (token !== '') {
            players.map(item => {
                axios.get(`https://eu.api.blizzard.com/profile/wow/character/${item.realm}/${item.name}?namespace=profile-eu&locale=fr_FR&access_token=${token}`)
                    .then(res => {
                        // console.log(res);
                        axios.get(`https://eu.api.blizzard.com/profile/wow/character/${item.realm}/${item.name}/character-media?namespace=profile-eu&locale=fr_FR&access_token=${token}`)
                            .then(media => {
                                setDatas(old => [...old, {
                                    id: res.data.id,
                                    name: res.data.name,
                                    realm: res.data.realm.name,
                                    level: res.data.level,
                                    realmslug: item.realm,
                                    faction: res.data.faction.name,
                                    gender: res.data.gender.name,
                                    class: res.data.character_class.name,
                                    race: res.data.race.name,
                                    avatar: media.data.assets[0].value,
                                    inset: media.data.assets[1].value,
                                    main: media.data.assets[2].value,
                                    mainr: media.data.assets[3].value,
                                    player: item.player,
                                    wowlink: item.link,
                                    ilvl: res.data.equipped_item_level
                                }])
                            })
                            .then(() => {
                                setLoading(false)
                            })
                    })
            })
        }
    }



    return (
        <div className="characters_container animate__animated animate__fadeIn">
            {loading ? <div className="loader"><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div> : <div className="slider_characters">
                <Tabs>
                    <TabList>
                        <Tab>Survive95</Tab>
                        <Tab>SaNka</Tab>
                        <Tab>Othior</Tab>
                    </TabList>
                    <TabPanel>
                        <ul className="player_list animate__animated animate__fadeIn">
                            {datas.map((item, index) => {
                                if (item.player === 1) {
                                    return (
                                        <Chara key={index} data={item}></Chara>
                                    )
                                }
                            })}
                        </ul>
                    </TabPanel>
                    <TabPanel>
                        <ul className="player_list animate__animated animate__fadeIn">
                            {datas.map((item, index) => {
                                if (item.player === 2) {
                                    return (
                                        <Chara key={index} data={item}></Chara>
                                    )
                                }
                            })}
                        </ul>
                    </TabPanel>
                    <TabPanel>
                        <ul className="player_list animate__animated animate__fadeIn">
                            {datas.map((item, index) => {
                                if (item.player === 3) {
                                    return (
                                        <Chara key={index} data={item}></Chara>
                                    )
                                }
                            })}
                        </ul>
                    </TabPanel>
                </Tabs>
            </div>}
        </div>
    )
}

export default Characters