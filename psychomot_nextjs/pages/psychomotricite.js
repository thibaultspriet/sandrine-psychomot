import Head from 'next/head'

import Image from 'next/image'

import Base from "../components/Base"

import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import {useRef,useEffect} from "react"

import "../static/css/psychomotricite.css"

function linkAppear(link){
    link.tl = gsap.timeline({
        scrollTrigger : {
            trigger : link,
            start: "bottom 90%",
        }
    }).from(link,{
        x : "-200%",
        ease : "power4.out",
        duration :1,
    },'-=1')
}

function iconsTl(icon,index){
    icon.tl = gsap.timeline({
        scrollTrigger : {
            trigger : '.aides',
            start : 'center 100%',
        }
    }).from(icon,{
        y : "50px",
        opacity : 0,
        ease : "power4.easeOut",
        duration : 1
    },index/2)
}

function iconsHover(icon){
    icon.tl_hover = gsap.timeline({paused : true})
    .to(icon,{
        y : "-10px",
        opacity : .7,
        duration : 1.5
    })
}

function linksGo(link){
    link.go = gsap.timeline({
        paused : true,
        onComplete : function () {
            link.parentElement.click()
            }
    }).to(link,{
        x : "200%",
        duration : .3,
        ease : "power4.in"
    })
}

function handleItemClik(e){
    e.preventDefault()
    e.currentTarget.go.play()
}
function handleMouseOver(e){
    e.currentTarget.tl_hover.repeat(-1).yoyo(true).play()
}
function handleMouseLeave(e){
    e.currentTarget.tl_hover.pause()
}



export default function Home() {

    const mainImg = useRef()
    const mainDef = useRef()
    const listItems = useRef()
    const icons = useRef()

    useEffect(()=>{
        gsap.utils.toArray(listItems.current.querySelectorAll('li')).forEach(el => {
            linkAppear(el)
            linksGo(el)
        })
        gsap.utils.toArray(icons.current.querySelectorAll(".aide img")).forEach((el,ind) =>{
            iconsTl(el,ind)
            iconsHover(el)
        })
        gsap.timeline({paused : true})
        .from(mainImg.current,{
            transform : "scale(0)",
            duration : 2,
            ease : "power2.out"
        })
        .from(mainDef.current,{
            transform : "translateY("+ -50 + "%)",
            opacity : 0,
            duration : 1,
            ease : "slow.inOut"
        },"-=1")
        .play()
    },[])



    return (
            <Base route="psychomotricite">
        <div>
            <Head>
                <title>Psychomotricité</title>
            </Head>
            
        </div>

        <div id="page-psychomotricite">
        <header className="titleContainer shadow">
            <h2 className="title">La psychomotricité qu'est-ce que c'est ?</h2>
        </header>

        <main className="shadow background-muted">
            <img src="/main/paint.jpg" alt="peinture sur les mains d'un enfant" ref={mainImg}/>
            <p className="definition" ref={mainDef}>
                Le psychomotricien est un professionnel paramédical, diplômé d’état. Son travail consiste à favoriser le bon
                développement psychomoteur et le préserver tout au long de la vie. Lorsque cet équilibre est perturbé par un
                trouble ou un handicap, d’origine physique ou psychique, le psychomotricien propose des séances d’approche
                corporelle à visée rééducative (volonté d’agir sur une difficulté ciblée) et thérapeutique.
                Quelques uns de ses outils : parcours moteurs, exercices de coordination et de rythme, relaxation, expression
                corporelle, jeux de concentration et de planification, stimulation sensori-motrice, activités de motricité fine
                et de graphisme…
            </p>
        </main>

        <div className="enTheorieContainer shadow">
            <h2 className="title">En Théorie</h2>
            <div className="description">
                <p className="intro">
                    Selon l’article R4332-1 du code de la santé publique , le champ d’action du psychomotricien concerne :
                </p>
                <ul className="items">
                    <li>le retard du développement psychomoteur (perturbation des acquisitions motrices, prématurité…)</li>
                    <li>les troubles de la maturation et de la régulation tonique (tics, hypertonie, hypotonie…)</li>
                    <li>les troubles du schéma corporel et de l’image du corps (manque de conscience du corps et/ou d’estime de
                        soi)</li>
                    <li>les troubles de la latéralité</li>
                    <li>les troubles de l’organisation spatio-temporelle</li>
                    <li>la maladresse motrice et gestuelle (TAC, dyspraxie)</li>
                </ul>
                <p className="intro">
                    Certains troubles spécifiques peuvent inclure des troubles psychomoteurs :
                </p>
                <ul className="items">
                    <li>les troubles des apprentissages (troubles de l’attention et des fonctions exécutives, trouble de
                        l’écriture…)</li>
                    <li>les troubles du comportement (instabilité, inhibition, trouble des habiletés sociales…)</li>
                    <li>les troubles envahissants du développement (autisme…)</li>
                </ul>
                <p className="conclusion">
                    Les notions psychomotrices sont à considérer comme intriquées. En effet, nous ne pouvons envisager l’action
                    motrice sans les mécanismes cérébraux qui l’accompagnent (concentration, planification du geste…), ni
                    l’impact psychologique qu’elle aura sur nous (confiance, estime de soi, disponibilité relationnelle…).
                    En résumé, nous considérons l’individu dans sa globalité.
                </p>
            </div>
        </div>

        <div className="enPratiqueContainer shadow" id="pratique">
            <h2 className="title">En pratique</h2>
            <ul className="list-items" ref={listItems}>
                <a href="/pourqui">
                    <li className="shadow background" data-goto="pourqui" onClick={handleItemClik}>
                        <span className="item">Pour qui : les indications en psychomotricité</span>
                        <span className="cta">+</span>
                    </li>
                </a>
                <a href="/bilan">
                    <li className="shadow background" data-goto="bilan" onClick={handleItemClik}>
                        <span className="item">Le bilan psychomoteur :</span>
                        <span className="cta">+</span>
                    </li>
                </a>
                <a href="/boiteOutils">
                    <li className="shadow background" data-goto="boite_outils" onClick={handleItemClik}>
                        <span className="item">Ma boite à outils :</span>
                        <span className="cta">+</span>
                    </li>
                </a>
            </ul>
            <div className="deroulement">
                <h3>Déroulement d'une prise en charge :</h3>
                <ul>
                    <li>Le premier contact avec le patient (et sa famille) consiste à réaliser un <strong>bilan
                            psychomoteur</strong> (entretien,
                        tests et épreuves) qui fait l’objet d’une <strong>prescription médicale</strong>.
                    </li>
                    <li>Au regard des conclusions du bilan, si cela est nécessaire, il est proposé au patient <strong>une prise
                            en
                            charge</strong> avec des objectifs et des dispositifs de rééducation adaptés.
                    </li>
                    <li>Le <strong>projet thérapeutique</strong> s’adapte tout au long des séances en fonction des
                        <strong> souhaits du patient</strong> et de ses
                        progrès. Les séances individuelles durent entre 30 et 45 minutes. Sur RDV uniquement.
                    </li>
                    <li>Les prises en charge s’effectuent en <strong>individuel</strong> ou en <strong>groupe</strong> selon les
                        besoins du patient.</li>
                    <li>Je travaille en collaboration avec des <strong>médecins spécialisés</strong> (pédiatre, pédopsychiatre,
                        neuropédiatre)
                        ainsi qu’avec les <strong>professionnels sensibilisés</strong> aux troubles du développement et des
                        apprentissages
                        (orthophonistes, orthoptistes, ergothérapeutes, psychologues).
                    </li>
                </ul>
            </div>
        </div>

        <div className="aideContainer background-muted">
            <div className="shadow background content">
                <h3>Les actes de psychomotricité ne sont pas remboursés par la Sécurité Sociale</h3>
                <h2>Cependant, il existe des aides</h2>
                <div className="aides" ref={icons}>
                    <div className="aide">
                        <img src="/main/assurance-maladie.svg" alt="caisse assurance maladie" className="icon" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} />
                        <p className="texte">
                            Vous pouvez faire une demande de prise en charge extra-légale à la Caisse Primaire d’Assurance
                            Maladie
                        </p>
                    </div>
                    <div className="aide">
                        <img src="/main/group.svg" alt="group" className="icon" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} />
                        <p className="texte">
                            Certaines mutuelles accordent une participation financière aux soins en psychomotricité.
                        </p>
                    </div>
                    <div className="aide">
                        <img src="/main/company.svg" alt="entreprise" className="icon" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} />
                        <p className="texte">
                            Des comités d’entreprise ont un fond social qui est attribué à l’aide aux soins.
                        </p>
                    </div>
                    <div className="aide">
                        <img src="/main/disabled-people.svg" alt="handicap" className="icon" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} />
                        <p className="texte">
                            La Maison Départementale des Personnes Handicapées (MDPH) attribue une allocation sous certaines
                            conditions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </Base>
        
    )
}
