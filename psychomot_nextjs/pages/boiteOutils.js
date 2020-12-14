import Head from 'next/head'

import Image from 'next/image'

import Base from "../components/Base"
import SubNav from "../components/SubNav"

import {useRef,useEffect} from "react"
import {gsap} from "gsap"


export default function BoiteOutils() {

    const cover = useRef()
    const main = useRef()

    useEffect(() => {
        gsap.from(cover.current, {
            transform: 'translateX(-200%)',
            opacity: 0,
            ease: "power2.easeOut",
            duration: 2,
        })
        gsap.from(main.current, {
            transform: 'translateY(200%)',
            ease: "power2.easeOut",
            duration: 3,
            delay: .5
        })
    },[])

    return (
        <Base route="psychomotricite">
        <div>
            <Head>
                <title>Ma boîte à outils</title>
                <link href="/static/css/boite_outils.css" rel="stylesheet" />
            </Head>

            <SubNav slugRoute="psychomotricite" route="Psychomotricité" subRoute="Ma boîte à outils"/>
            <div className="page">
                <section className="cover" ref={cover}>
                    <img src="main/kid_playing.jpg" alt="Enfant jouant avec des boîtes" />
                </section>
                <main ref={main}>
                    <section className="ludique">
                        <div className="background_title">
                            <h2>Médiations Ludiques</h2>
                        </div>
                        <div className="outil_container">
                            <h3 className="outil_title violet">Les jeux sensori-moteurs</h3>
                            <p className="outil_description">Pour permettre un éveil au monde grâce à la perception de signaux sensoriels qui vont susciter l’intérêt de l’enfant, stimuler son envie de se déplacer, de découvrir les matières, les textures, de comprendre et découvrir  le monde qui l’entoure.</p>
                        </div>
                        <div className="outil_container">
                            <h3 className="outil_title rose">Parcours psychomoteurs, jeux moteurs</h3>
                            <p className="outil_description">Le parcours psychomoteur permet d’accompagner l’acquisition des niveaux d’évolution motrice (retournement, ramper, quatre pattes, marche…) et/ou pallier un retard de développement psychomoteur.</p>
                        </div>
                        <div className="outil_container">
                            <h3 className="outil_title jaune">Les jeux spontanés et symboliques</h3>
                            <p className="outil_description">Le développement cognitif dépend de la maturation du cerveau et des interactions sociales et physiques. En imitant, l’enfant interagit avec son environnement, il construit ainsi ses structures cognitives.</p>
                        </div>
                        <div className="outil_container">
                            <h3 className="outil_title violet">Les jeux de réflexion, perceptifs et cognitifs</h3>
                            <p className="outil_description">Pour développer la mémoire, la logique, le raisonnement, le sens pratique…</p>
                        </div>
                        <div className="outil_container">
                            <h3 className="outil_title rose">Expression plastique, corporelle, rythmique, sonore</h3>
                            <p className="outil_description">Les techniques d’expression permettent de retrouver plaisir et détente dans le mouvement, de découvrir son potentiel créatif et le développer, d’identifier et de mieux connaître ses émotions, de retrouver une harmonie dans sa relation à soi.</p>
                        </div>
                    </section>

                    <section className="therapeutique">
                        <div className="background_title">
                            <h2>Médiations Thérapeutiques</h2>
                        </div>

                        <div className="outil_container">
                            <h3 className="outil_title jaune">La graphomotricité</h3>
                            <p className="outil_description">La graphomotricité est utilisée pour aborder les difficultés d’écriture et plus généralement du geste graphomoteur.
                                Il s’agit d’utiliser des médiations ludiques et sensorielles, de ré-expérimenter les étapes d’acquisition de l’écriture afin de gagner en aisance et en automatisation du geste scripteur.
                            </p>
                        </div>
                        <div className="outil_container">
                            <h3 className="outil_title violet">L’intégration sensorielle</h3>
                            <p className="outil_description">C’est la capacité chez l’enfant de sentir, de comprendre et d’organiser les informations sensorielles provenant de son corps et de son environnement.
                                La thérapie par l’intégration sensorielle s’adresse à des enfants présentant des symptômes tels des maladresses, des difficultés de concentration, des problèmes d’équilibre.
                            </p>
                        </div>
                        <div className="outil_container">
                            <h3 className="outil_title rose">Les techniques de relaxation</h3>
                            <p className="outil_description">Le psychomotricien choisit la méthode de relaxation la plus adaptée à chaque individu : inductions verbales, mobilisations actives ou passives, utilisation de médiateurs, support musical. Un temps de verbalisation est proposé en fin de séance.</p>
                        </div>
                    </section>
                </main>
            </div>
{/* <script src="{% static 'main/js/anim_boite_outils.js' %}"></script> */}
        </div>    
        </Base>
    )}






