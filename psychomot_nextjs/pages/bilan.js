import Head from 'next/head'

import Image from 'next/image'

import SubNav from "../components/SubNav"
import Base from "../components/Base"

import {useRef,useEffect} from "react"

import {gsap,Power2} from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {TextPlugin} from "gsap/dist/TextPlugin"
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin)

import "../static/css/bilan.css"

export default function Bilan() {

    const cover = useRef()
    const grid = useRef()

    useEffect(() => {
        gsap.from(cover.current,{
            opacity:0,
            duration:5
        })
        gsap.utils.toArray(grid.current.querySelectorAll(".title")).forEach(el=>{
            el.writeTitle = gsap.timeline({
                scrollTrigger : {
                    trigger : ".grid",
                    start : 'center 100%',
                }
            }).to(el,{
                duration : 3,
                text: function (){
                    return el.dataset.title
                },
                ease : Power2.easeOut
            })
        })
    },[])

    return (
        <Base route="psychomotricite">
            <SubNav slugRoute="psychomotricite#pratique" route="Psychomotricité" subRoute="Le Bilan" />
            <div id="page-bilan">
                <Head>
                    <title>Pourqui</title>
                </Head>

                <header className="containerCover">
                    <img src="/main/cover-bilan.png" alt="developpement psychomoteur" className="cover" ref={cover}/>
                </header>

                <div className="pourquoiContainer shadow">
                    <div className="shadow background">
                        <h2 className="title">
                            Pourquoi un bilan psychomoteur ?
                        </h2>
                    </div>
                    <p>La spécificité du bilan psychomoteur est qu’il objective les compétences motrices et perceptives au regard d’une
                        norme tout en intégrant certains aspects cognitifs et psycho-affectifs.
                    </p>
                </div>

                <div className="grid" ref={grid}>
                    <div className="card background shadow">
                        <h2 className="title" data-title="Premier rendez-vous"></h2>
                        <p>Lors du premier rendez-vous, le psychomotricien réalise un entretien qui permet de mieux comprendre la
                            demande initiale en reprenant l’histoire de vie, les différentes étapes de son développement, les
                            difficultés rencontrées, les particularités comportementales…
                        </p>
                    </div>
                    <div className="card background shadow">
                        <h2 className="title" data-title="Les tests"></h2>
                        <p> Différents tests et épreuves sont réalisés sur plusieurs séances afin d’évaluer le niveau de la personne dans les différents domaines psychomoteurs : la perception du corps, la motricité globale, la motricité fine et l’écriture, l’organisation dans l’espace et dans le temps, le tonus, la latéralité, le maintien de l’attention… en lien avec les composantes cognitives et psycho-affectives.
                        </p>
                    </div>
                    <div className="card background shadow">
                        <h2 className="title" data-title="Analyse des résultats"></h2>
                        <p>L’analyse des résultats donne lieu à une restitution orale ainsi qu’à un compte-rendu écrit, remis à la
                            famille et au médecin prescripteur. Il peut également être transmis aux différents partenaires (enseignant,
                            orthophoniste…).
                        </p>
                    </div>
                    <div className="card background shadow">
                        <h2 className="title" data-title="Restitution"></h2>
                        <p>En fonction des résultats du bilan, peuvent être proposés :</p>
                            <ul className="list">
                                <li>une prise en charge, explicitant les différents axes de rééducation</li>
                                <li>des préconisations pour l’école et/ou le quotidien</li>
                                <li>une réorientation éventuelle vers un autre professionnel</li>
                                <li>Une réévaluation pourra être effectuée selon la nécessité.</li>
                            </ul>
                    </div>
                </div>
            </div>    
        </Base>
        
    )}






