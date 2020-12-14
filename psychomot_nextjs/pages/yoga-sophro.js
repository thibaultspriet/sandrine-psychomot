import Head from 'next/head'

import Image from 'next/image'

import Base from "../components/Base"

import "../static/css/yoga.css"

export default function YogaSophro() {
    return (
        <Base route="yoga-sophro">
        <div id="page-yoga-sophro">
            <Head>
                <title>Accueil</title>
            </Head>
            <header className="containerCover background-secondary">
                <img src="/main/home-yoga-cover.png" alt="positions de yoga" className="cover" />
                <h1 className="page-title">
                    Sophrologie - Yoga
                </h1>
            </header>

            <div className="wrapper">
                <div className="shadow intro">
                    <h2>
                        Pour une connexion du corps et de l'esprit
                    </h2>
                </div>

                <div className="yoga">
                    <div className="card background">
                        <h3 className="title">
                            Le Yoga
                        </h3>
                        <p className="description">
                            Une pratique douce accessible pour tous
                        </p>
                        <div className="btn-yoga">
                            <a href="/yoga">Découvrir</a>
                        </div>
                    </div>
                    <div className="illustration">
                        <img src="main/posture_yoga.jpg" alt="posture de yoga"/>
                    </div>
                </div>
                <div className="sophro">
                    <div className="illustration">
                        <img src="main/sophro.jpg" alt="sophrologie"/>
                    </div>
                    <div className="card background">
                        <h3 className="title">
                            La Sophrologie
                        </h3>
                        <p className="description">
                            Une démarche positive pour retrouver Équilibre et Harmonie.
                        </p>
                        <div className="btn-yoga">
                            <a href="/sophro">Découvrir</a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="containerCover transition">
                <img src="/main/coverSea.jpg" alt="yoga"/>
            </div>

            <div className="wrapper">
                <div className="shadow detailTitleContainer background">
                    <h2 className="title">
                        En pratique
                    </h2>
                </div>

                <div className="shadow background-muted tarifContainer">
                    <p className="description">
                        C'est par une pratique accessible, joyeuse et inspirée que je propose aux néophytes comme aux
                        plus confirmés de vivre une expérience complète.
                    </p>
                    <h3>Les Tarifs</h3>
                    <div className="tarifDetailContainer">
                        <ul className="tarifAdulte">
                            <li className="title">Pour les adultes</li>
                            <li>55€ première séance de 1h30</li>
                            <li>50€ séance de suivi de 1h</li>
                            <li>Tarif dégressif dès 10 séances</li>
                        </ul>
                        <ul className="tarifEnfant">
                            <li className="title">Pour les enfants</li>
                            <li>45€ pour 45 minutes</li>
                        </ul>
                    </div>
                </div>

                <div className="shadow pratique background-secondary">
                    <h2>Informations pratiques</h2>
                    <div className="shadow second">
                        <div className="shadow">
                            <p>Tout le matériel est fourni (tapis, couverture, coussin).</p>
                        </div>
                        <img src="/main/logo.png" alt="logo yoga sophrologie"/>
                        <div className="shadow">
                            <p>Venez avec une tenue confortable ainsi qu'un paréo ou une grande serviette à placer sur
                                le tapis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        </Base>
    )}






