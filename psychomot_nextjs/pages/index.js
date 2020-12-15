import Head from 'next/head'

import Image from 'next/image'

import Base from "../components/Base"

import { gsap, Power2, Elastic, TweenMax } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import "../static/css/index.css"



import { useRef, useEffect } from "react"

function elOver({ currentTarget }) {
    currentTarget.animation.play();
}

function elOut({ currentTarget }) {
    currentTarget.animation.reverse();
}


function tlIcon(icon) {
    icon.tl = gsap.timeline({
        paused: true,
        scrollTrigger: {
            trigger: icon,
            start: "bottom 100%",
            toggleActions: "restart resume resume reset",
        }
    })
        .to(icon, {
            duration: 1,
            opacity: 1,
            ease: Power2.easeOut
        })
        .from(icon, {
            duration: 3,
            y: "30px",
            ease: Elastic.easeOut
        }, '-=1')

}

export default function Home({API_KEY}) {
    const iconContainer = useRef()
    useEffect(() => {
        Array.from(iconContainer.current.children).forEach(icon => {
            tlIcon(icon.children[0])
        })
    }, [])

    const card1 = useRef()
    const card2 = useRef()
    useEffect(() => {
        [card1.current, card2.current].forEach(el => {
            TweenMax.set(el.querySelector(".back"), { rotationY: -180 });
            var frontCard = el.querySelector(".front"),
                backCard = el.querySelector(".back"),
                tl = gsap.timeline({ paused: true });

            tl
                .to(frontCard, { duration: 1, rotationY: 180, ease: Power2.easeOut })
                .to(backCard, { duration: 1, rotationY: 0, ease: Power2.easeOut }, 0)
                .to(el, { duration: .5, z: 50 }, 0)
                .to(el, { duration: .5, z: 0 }, .5);

            el.animation = tl;
        })
    }, [])



    return (
        <Base route="index">
            <div id="page-index">
                <Head>
                    <title>Accueil</title>
                </Head>
                <main className="presentation">
                    <div className="container-portrait">
                        <img src="/main/home_portrait.jpg" alt="portrait" />
                    </div>
                    <div className="container-presentation">
                        <h1>Sandrine Dubois</h1>
                        <h2>Psychomotricité<br />Yoga - Sophrologie</h2>
                        <p>
                            Psychomotricienne DE , j'accompagne toute personne adulte, adolescent et enfant
                            dans sa singularité.
                    </p>

                        <p>
                            Forte de mon expérience, j’ai un parcours riche et varié:
                    </p>

                        <p className="highlight">
                            Psychomotricienne en Institut d’Education Motrice auprès d’enfants et
                            adolescents porteurs d’un handicap moteur et de troubles associés ( sensoriels,
                            troubles de la relation, T.S.A, retard intellectuel…)
                    </p>

                        <p className="highlight">
                            Enseignante à l’Institut de Formation de Psychomotricien à Loos et à l’IFAG
                            Lille - Ecole de management.
                    </p>

                        <p className="highlight">
                            Formatrice au ministère de la justice et à l'ENPJJ en prévention du stress au
                            travail et techniques de relaxation.
                    </p>

                        <p>
                            Je suis attentive à adapter mes “outils” afin d’apporter un accompagnement
                            spécifique à chaque personne. La bienveillance, la confidentialité et le respect
                        de chacun font partie de mes valeurs.</p>

                        <p>
                            Il est également essentiel pour moi de maintenir une réflexion sur ma pratique
                            professionnelle afin de proposer des actes professionnels de qualité . Pour cela
                            , je participe régulièrement à des formations et à des supervisions.
                    </p>
                    </div>
                </main>
                <section className="psychomotricienne">
                    <div className="separateur-vertical"></div>
                    <div className="psychomotricite">
                        <h1>Psychomotricienne Mérignies</h1>
                        <div className="content">
                            <p>Premièrement, la psychomotricité s’intéresse à l’individu dans sa globalité. Elle s’appuie en
                            effet sur
                            les
                            liens étroits qui unissent le corps et le psychisme</p>
                            <p>Le cabinet de Mérignies accueille des patients de tout âge :</p>
                            <ul id="psychomotricite-list">
                                <li>Le tout-petit pour des séances d’éveil , de prévention ou de retard psychomoteur. </li>
                                <li>L’enfant dans ses apprentissages scolaires et sociaux</li>
                                <li>L’adolescent dans ses changements psychiques et physiques</li>
                                <li>L’adulte et le stress au travail ( troubles du sommeil, mal de dos…)</li>
                            </ul>

                            <p>Cet accompagnement multi-générationnel permet ainsi de prévenir, dépister ou traiter les
                            troubles,
                            retards à l’aide de techniques de rééducation ou de thérapies basées sur la neuro-cognition,
                            la
                            physiologie et la psychologie.</p>

                            <p>
                                Les séances se font sur rendez-vous et sur prescription médicale.
                            Elles peuvent être en individuel ou en petits groupes.</p>

                            <p>
                                Je peux me déplacer à domicile , à l’école , en structure.

                                Je travaille en collaboration avec la famille, les équipes enseignantes/éducatives et les
                                professionnels
                                de santé.
                        </p>
                        </div>


                    </div>
                    <div className="role">
                        <h1>Le rôle de la psychomotricienne</h1>
                        <ul ref={iconContainer}>
                            <li><img src="main/sensations.svg" alt="icon" className="icon" />
                                <p><span>Mes sensations</span></p>
                            </li>
                            <li><img src="main/tonus.svg" alt="icon" className="icon" />

                                <p><span>Mon tonus</span></p>
                            </li>
                            <li><img src="main/axe.svg" alt="icon" className="icon" />

                                <p><span>Mon axe corporel</span></p>
                            </li>
                            <li><img src="main/rythme.svg" alt="icon" className="icon" />

                                <p><span>Mes rythmes</span></p>
                            </li>
                            <li><img src="main/schemacorp.svg" alt="icon" className="icon" />
                                <p><span>Mon schéma corporel & mon image du corps</span></p>
                            </li>
                            <li><img src="main/emotion.svg" alt="icon" className="icon" />
                                <p><span>Mes émotions</span></p>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="pourqui">
                    <a href="/pourqui">
                        <h1>à qui s'adresse la psychomotricité ?</h1>
                    </a>
                    <div className="card-container">
                        <div className="card" ref={card1} onMouseEnter={elOver} onMouseLeave={elOut}>
                            <div className="front">
                                <div className="container-cover">
                                    <img src="main/bebe.jpg" alt="bebe" />
                                </div>
                                <h3 className="primary">Bébés - Jeunes enfants</h3>
                                <div className="separateur-horizontal"></div>
                                <p>Relations précoces - Développement psychomoteur - Guidance parentale</p>
                            </div>
                            <div className="back">
                                <section>
                                    <a href="/pourqui">
                                        <h3 className="violet">Le tout petit - 0 à 3 ans</h3>
                                    </a>
                                    <p>Troubles de l'oralité alimentaire, difficulté au portage, tenue de tête, troubles du
                                    sommeil.</p>
                                </section>
                                <section>
                                    <a href="/pourqui">
                                        <h3 className="rouge">Le jeune enfant - 3 à 6 ans</h3>
                                    </a>
                                    <p>Manque d'assurance corporelle, comportement inadapté en classe, manque de dextérité,
                                    confus avec
                                    l'espace et le temps.</p>
                                </section>
                            </div>
                        </div>
                        <div className="card card-center" ref={card2} onMouseEnter={elOver} onMouseLeave={elOut}>
                            <div className="front">
                                <div className="container-cover">
                                    <img src="main/enfant.jpg" alt="enfant" />
                                </div>
                                <h3 className="primary">Enfants - Adolescents</h3>
                                <div className="separateur-horizontal"></div>
                                <p>Apprentissages - Comportements - Rééducation</p>
                            </div>
                            <div className="back">
                                <section>
                                    <a href="/pourqui">
                                        <h3 className="rose">L'enfant en primaire - 6 à 11 ans</h3>
                                    </a>
                                    <p>Gestes maladroits, manque d'aisance en sport, confusion gauche/droite, repères
                                    spatiauxs-temporels fragiles.</p>
                                </section>
                                <section>
                                    <a href="/pourqui">
                                        <h3 className="jaune">Le collégien - Le lycéen</h3>
                                    </a>
                                    <p>Difficulté pour gérer ses émotions, manque de confiance, troubles du comportement..
                                </p>
                                </section>
                                <section>
                                    <a href="/pourqui">
                                        <h3 className="rouge">L'enfant en situation de handicap</h3>
                                    </a>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="yoga-sophrologie">
                    <div className="yoga-sophro-cover">
                        <img src="main/home-yoga-cover.png" alt="yoga" />
                    </div>
                    <div className="yoga-sophrologie-container">
                        <div className="vertical-separator"></div>
                        <div className="yoga">
                            <h3 className="yoga-soprologie-title"><a href="/yoga">Le Yoga</a></h3>

                        </div>
                        <div className="sophrologie">
                            <h3 className="yoga-soprologie-title"><a href="/sophro">La Sophrologie</a></h3>

                        </div>
                    </div>

                </section>
                <section className="map">
                    <h1>Me situer</h1>
                    <iframe width="100%" height="450" frameBorder="0"
                    src={"https://www.google.com/maps/embed/v1/place?q=place_id:ChIJN3LGuLHRwkcR_wlYqQG5vg0&key="+API_KEY}
                    allowFullScreen>
                    </iframe>
                </section>
            </div>

        </Base>
    )
}

export async function getStaticProps(){
    const key = await process.env.MAP_API_KEY
    return {
        props : {
            API_KEY : key
        }
    }
}