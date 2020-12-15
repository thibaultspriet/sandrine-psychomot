import Head from 'next/head'

import Image from 'next/image'

import Base from "../components/Base"
import SubNav from "../components/SubNav"

import "../static/css/pourqui.css"

export default function PourQui() {
    return (
        <Base route="index">
        <div id="page-pourqui">
            <Head>
                <title>Pourqui</title>
            </Head>
            <SubNav slugRoute="psychomotricite#pratique" route="Psychomotricité" subRoute="Pour qui ?" />
            <main id="years">
                <section id="0-3">
                    <h2 className="sectionTitle violet">Le tout petit (0 à 3 ans)</h2>
                    <div className="sectionDescription">
                        <ul>
                            <li>Ayant des troubles de l’oralité alimentaire (œsophagite, reflux, gastrite) qui peut entraver son
                                développement corporel et son ouverture au monde.</li>
                            <li>Ayant des difficultés d’accordage dans la relation ou de dialogue tonique : difficulté au portage.
                            </li>
                            <li>Présentant un retard dans ses acquisitions : tenue de tête, redressement, marche, manipulations.
                            </li>
                            <li>Ayant des troubles du sommeil.</li>
                        </ul>
                    </div>
                </section>

                <section id="3-6">
                    <h2 className="sectionTitle rouge">Le jeune enfant (3 à 6 ans)</h2>
                    <div className="sectionDescription">
                        <ul>
                            <li>Présentant un retard ou un manque d’assurance corporelle : courir, sauter, rouler à vélo.</li>
                            <li>Ayant un comportement inadapté en classe : instabilité, inhibition, agressivité, manquant
                                d’autonomie.</li>
                            <li>Qui manque de dextérité : s’habiller, mettre ses boutons, enfiler des perles, tenir son crayon,
                                découper.</li>
                            <li>Qui ne se repère pas dans l’espace et le temps : confondre les moments de la journée, difficultés de
                                rythme, mettre ses vêtements à l’envers, difficultés à s’orienter.</li>
                        </ul>
                    </div>
                </section>

                <section id="6-11">
                    <h2 className="sectionTitle rose">L'enfant en primaire (6 à 11 ans)</h2>
                    <div className="sectionDescription">
                        <ul>
                            <li>Dont les gestes sont maladroits (praxies) : écrire, découper, faire ses lacets.</li>
                            <li>Qui manque d’aisance en sport : faire du vélo, coordonner ses gestes, attraper le ballon.</li>
                            <li>Qui présente des difficultés de latérisation ou de latéralité (confusion gauche-droite).</li>
                            <li>Qui ne parvient pas à suivre le rythme scolaire : vitesse d’écriture, organisation, lenteur.</li>
                            <li>Dont les repères spatiaux-temporels sont fragiles : repère dans la semaine, sur la feuille, en
                                géométrie.</li>
                        </ul>
                    </div>
                </section>
                <section id="college-lycee">
                    <h2 className="sectionTitle jaune">Le collégien, le lycéen</h2>
                    <div className="sectionDescription">
                        <ul>
                            <li>Qui est en difficulté pour gérer et exprimer ses émotions et ses sensations, hypersensibilité.</li>
                            <li>Qui manque de confiance en lui/stress/anxiété.</li>
                            <li>Qui se sent en difficulté pour s’approprier son corps et ses modifications (troubles du comportement
                                alimentaire).</li>
                        </ul>
                    </div>
                </section>

                <section id="handicap">
                    <h2 className="sectionTitle rose">L'enfant en situation de handicap</h2>
                    <div className="sectionDescription">
                        <ul>
                            <li>Troubles des apprentissages : dyspraxie, dysgraphie, troubles de l’attention et des fonctions
                                exécutives.</li>
                            <li>Maladresse motrice et gestuelle (TAC, dyspraxie).</li>
                            <li>Trouble Déficitaire de l’attention (TDAH), hyperactivité, impulsivité.</li>
                            <li>Troubles du comportement (instabilité, inhibition, perturbation des habiletés sociales…).</li>
                            <li>Trouble du Spectre Autistique (TSA), Autisme, Trouble Envahissant du Développement (TED).</li>
                            <li>Maladie génétique, asthme, obésité.</li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>    
        </Base>
    )}






