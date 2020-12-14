import Head from 'next/head'

import Image from 'next/image'

import Base from "../components/Base"

import {gsap,Power2} from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import "../static/css/presentation.css"



import {useRef,useEffect} from "react"




function timeline(section){
    section.forEach((anim,index)=>{
        anim.tl = gsap.timeline({
            paused : true,
            scrollTrigger : {
                trigger : anim.parentElement,
                start : "bottom 100%",
                toggleActions : "restart resume resume reverse"
            }
        })
        .to(anim,1.5,{
            width : (90 - index*10)+'%',
            ease : Power2.easeOut,
        })
    });
}

export default function Presentation() {

    const anim1 = useRef()
    const anim2 = useRef()
    useEffect(() => {
        [anim1.current,anim2.current].forEach(element =>{
            var section = gsap.utils.toArray(element.querySelectorAll(".anim"))
            timeline(section)
        })
    },[])

    return (
        <Base route="presentation">
        <div id="page-presentation">
            <Head>
                <title>Présentation</title>
            </Head>
            <div className="main-wrapper">
                <header className="presentation-header">

                    <div className="container-portrait">
                        <div className="container-portrait-img">
                            <img src="/main/presentation-portrait.jpg" alt="portrait"
                                className="portrait" />
                        </div>
                    </div>


                    <div className="presentation-container">
                        <h1>Sandrine Dubois <br /> Psychomotricienne</h1>
                        <p className="presentation">
                            Mon cabinet de psychomotricité se situe: au 548 rue de la Verderie à Mérignies (59710).
                            Après une expérience en libéral à Valenciennes puis à Rosult, j’ai choisi de m’installer à
                            Mérignies.
                            Je reçois des patients pour <strong> dépister, traiter et rééduquer </strong>les troubles
                            psychomoteurs
                            à tous les âges de
                            la vie (du nouveau né à la personne âgée).
                            Les prises en charge s’effectuent en <strong> individuel ou en groupe</strong> selon les
                            besoins du
                            patient.
                            Je travaille en collaboration avec des <strong> médecins spécialistes</strong> (pédiatre,
                            pédopsychiatre, neuropédiatre)
                            ainsi qu’avec les professionnels sensibilisés aux troubles du développement et des
                            apprentissages
                            (orthophonistes, orthoptistes, ergothérapeutes, psychologues).

                        </p>
                    </div>
                </header>

                

                <div className="formation-container-cover"
                    style={{backgroundImage: "url('/main/presentation-formation.jpg')"}}>
                    <h2>Ma Formation</h2>
                </div>

                <section className="formation-container">
                    <div className="psychomotricite">
                        <div className="description-container">
                            <h3>Psychomotricienne</h3>
                        </div>
                        <div className="diplomes" ref={anim1}>
                            <div className="diplome">
                                <div className="container-intitule">
                                    <p className="intitule"> « les dyspraxies développementales : de la représentation
                                        motrice à
                                        l’action » à l’ISRP Boulogne Billancourt</p><span className="annee">2018</span>
                                </div>
                                <div className="container-anim" >
                                    <div className="anim violet"></div>
                                </div>
                            </div>
                            <div className="diplome">
                                <div className="container-intitule">
                                    <p className="intitule"> formation aux approches Snoezelen et Basale</p><span
                                        className="annee">2016</span>
                                </div>
                                <div className="container-anim">
                                    <div className="anim rouge"></div>
                                </div>
                            </div>
                            <div className="diplome">
                                <div className="container-intitule">
                                    <p className="intitule">DU de recherche clinique en psychomotricité à la Pitié
                                        Salpêtrière.</p><span className="annee">2003</span>
                                </div>
                                <div className="container-anim">
                                    <div className="anim saumon"></div>
                                </div>
                            </div>
                            <div className="diplome">
                                <div className="container-intitule">
                                    <p className="intitule">DE de psychomotricité à Lille II.</p><span
                                        className="annee">1993</span>
                                </div>
                                <div className="container-anim">
                                    <div className="anim orange"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sophrologie">
                        <div className="description-container">
                            <h3>Yoga - Sophrologie</h3>
                        </div>
                        <div className="diplomes order" ref={anim2}>
                            <div className="diplome">
                                <div className="container-intitule">
                                    <p className="intitule">formation aux techniques de yoga dans l’éducation (spécialité
                                        yoga pour
                                        adolescent) avec le RYE (relaxation et yoga dans l’éducation).</p><span
                                        className="annee">2017</span>
                                </div>
                                <div className="container-anim">
                                    <div className="anim saumon"></div>
                                </div>
                            </div>
                            <div className="diplome">
                                <div className="container-intitule">
                                    <p className="intitule">DU d’éducation yoguique à Lille II.</p><span
                                        className="annee">2014</span>
                                </div>
                                <div className="container-anim">
                                    <div className="anim violet"></div>
                                </div>
                            </div>
                            <div className="diplome">
                                <div className="container-intitule">
                                    <p className="intitule">DU de sophrologie à Lille II</p><span className="annee">1999</span>
                                </div>
                                <div className="container-anim">
                                    <div className="anim orange"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="experience-container-cover"
                    style={{backgroundImage: "url('/main/presentation-experience.jpg')"}}>
                    <h2>Mon Expérience</h2>
                </div>

                <div className="experiences-container">
                    <div className="experience-container">
                        <h2 className="experience-title">Psychomotricienne</h2>
                        <ul className="experiences">
                            <li><span className="periode">Depuis janvier 2019 : </span><span className="explication">Activité
                                    libérale à la
                                    maison médicale « Alène d’Or » de Rosult</span></li>
                            <li><span className="periode">D'avril 2016 à septembre 2017 : </span><span
                                    className="explication">Activité
                                    libérale en collaboration à Valenciennes</span></li>
                            <li><span className="periode">Depuis 1999 : </span><span className="explication">Chargée
                                    d’enseignement à
                                    l’institut de formation de psychomotriciens de Lille , membre du jury et maître de
                                    mémoire au
                                    DE</span></li>
                            <li><span className="periode">Depuis octobre 1998 : </span><span
                                    className="explication">Psychomotricienne à
                                    l’IEM Dabbadie de Villeneuve d’Ascq -APF- avec des enfants porteurs de handicap
                                    moteur et de
                                    troubles associés (TSA, TDA/H, trouble de l’intégration sensorielle, déficit
                                    sensoriel,
                                    ...)</span></li>
                            <li><span className="periode">De 1994 à 2001 : </span><span
                                    className="explication">Psychomotricienne à la
                                    polyclinique de Riaumont à Liévin en centre de rééducation et de réadaptation avec
                                    des adultes
                                    et des personnes âgées</span></li>
                            <li><span className="periode">De 1993 à 1998 : </span><span
                                    className="explication">Psychomotricienne à l’IME
                                    les Tournesols de Douai</span></li>
                        </ul>
                    </div>
                    <div className="experience-container">
                        <h2 className="experience-title">Yoga - Sophrologie</h2>
                        <ul className="experiences">
                            <li><span className="periode">2020 : </span><span className="explication">Animation de yoga avec des
                                    enfants
                                    (CP, CE1, CE2) présentant des difficultés “d'attention-concentration en classe”, sur
                                    un temps
                                    périscolaire avec l’équipe enseignante.
                                </span></li>
                            <li><span className="periode">Depuis janvier 2019 : </span><span className="explication">formatrice
                                    à l’IFAG à
                                    Lille auprès des étudiants sur « comment booster sa performance » qui intègre les
                                    notions de
                                    diététique et d’addictologie, de prendre soin de soi, d’imagerie mentale, de
                                    respiration par les
                                    techniques de yoga et de sophrologie.
                                </span></li>
                            <li><span className="periode">Depuis septembre 2016 : </span><span
                                    className="explication">formatrice à l’ENPJJ
                                    de Roubaix et la Cour d’appel de Douai sur le « stress au travail : trouver son
                                    équilibre et
                                    techniques de relaxation»</span></li>
                        </ul>
                    </div>
                </div>


                <div className="cabinet-container-cover"
                    style={{backgroundImage: "url('/main/presentation-cabinet.png')"}}>
                    <h2>Mon Cabinet</h2>
                </div>

                <div className="cabinet-container">
                    <img src="/main/sample-int.jpg" alt="sample" />
                    <p>Mon cabinet de psychomotricité se situe: au 548 rue de la Verderie à Mérignies (59710).
                        Après une expérience en libéral à Valenciennes puis à Rosult, j’ai choisi de m’installer à
                        Mérignies.
                        Je reçois des patients pour dépister, traiter et rééduquer les troubles psychomoteurs à tous les
                        âges de la
                        vie (du nouveau né à la personne âgée).</p>
                    <img src="/main/sample-int.jpg" alt="sample" />
                    <p>Les prises en charge s’effectuent en individuel ou en groupe selon les besoins du patient.
                        Je travaille en collaboration avec des médecins spécialistes (pédiatre, pédopsychiatre,
                        neuropédiatre) ainsi
                        qu’avec les professionnels sensibilisés aux troubles du développement et des apprentissages
                        (orthophonistes,
                        orthoptistes, ergothérapeutes, psychologues).</p>
                </div>
            </div>
        </div>

        
        </Base>
    )
}
