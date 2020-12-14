import Head from 'next/head'

import Image from 'next/image'

import Base from "../components/Base"
import SubNav from "../components/SubNav"

export default function Yoga() {
    return (
        <Base route="yoga-sophro">
        <div>
            <Head>
                <title>Pourqui</title>
                <link href="/static/css/yogaDetail.css" rel="stylesheet" />
            </Head>
            
            <SubNav slugRoute="yoga-sophro" route="Yoga & Sophrologie" subRoute="Yoga" />
            <div className="pageContent">
                <h1 className="pageTitle">Le Yoga,<br/> une pratice douce accessible pour tous</h1>

                <section id="enfant">
                    <div className="intro">
                        <h2 className="sectionTitle">Pour les enfants</h2>
                        <div className="sectionIntro">
                            <p>Le yoga est destiné aux enfants à partir de 5 ans, il est à la fois ludique et facile à pratiquer.
                            </p>
                        </div>
                    </div>
                    
                
                    
                    <section className="subsection" id="initierEnfant">
                        <h3 className="subsectionTitle">Pourquoi initier un enfant au yoga ?</h3>
                        <p className="description">
                            Le yoga pour les petits a de nombreux bienfaits, car il répond simplement à certains de leurs besoins.
                            Celui-ci est particulièrement indiqué dans certains cas comme les suivants :
                        </p>
                        <ul>
                            <li>Troubles de l’attention et de l’anxiété</li>
                            <li>Sommeil perturbé et difficulté à s’endormir</li>
                            <li>Alternative aux activités particulièrement stimulante et excitante comme la télévision, les jeux vidéos.</li>
                        </ul>
                    </section>
                    
                    <section className="subsection" id="bienfaitsEnfant">
                        <h3 className="subsectionTitle">Les bienfaits du yoga pour nos enfants.</h3>
                        <div className="cards">
                            
                            <div className="card" style={{backgroundImage: "url('/main/enfant-yoga.jpg')"}}>
                                <h3 className="cardTitle">Favoriser un équilibre émotionnel</h3>
                                <ul className="items">
                                    <li>se concentrer et développer ses capacité d’attention</li>
                                    <li>canaliser et gérer ses émotions</li>
                                    <li>apaiser et réduire le stress</li>
                                    <li>gagner en confiance en soi et en estime de soi</li>
                                </ul>
                            </div>
                            
                            <div className="card">
                                <h3 className="cardTitle">Des vertus au niveau physique</h3>
                                <ul className="items">
                                    <li>mieux connaître et prendre conscience de son propre corps, le sentir, le découvrir</li>
                                    <li>apprendre à bien respirer</li>
                                    <li>améliorer la souplesse grâce aux postures et gagner en fluidité de mouvements</li>
                                    <li>prendre conscience de la verticalité et de l’alignement de la colonne vertébrale</li>
                                </ul>
                            </div>
                
                        </div>
                    </section>

                    
                    
                    <section className="subsection" id="particulariteEnfant">
                        <h3 className="subsectionTitle">Les particularités de la pratique du yoga pour l’enfant.</h3>
                        <p className="description">
                            Celle-ci a comme particularité principale d’être ludique. Les postures d’animaux le plus souvent sont
                            réalisées dans un esprit de jeu.
                            La durée d’une séance est de maximum 30 à 40 minutes. Une pratique à la maison est vivement conseillée avec
                            papa, maman et les frères et soeurs.
                        </p>
                    </section>
                    
                
                    <section className="subsection" id="deroulementEnfant">
                        <h3 className="subsectionTitle">Comment se déroule une séance de yoga pour enfant ?</h3>
                        <p className="subsectionIntro">
                            Il est nécessaire d’être habillé de vêtements souples, adaptés aux différentes postures statiques et
                            dynamiques et propices à la détente. Un matelas d’exercice au sol est indispensable.
                        </p>
                        <div id="postures">
                            <div className="introPosture">
                                <h3>Les postures :</h3>
                                <div>
                                    <p>
                                        Avant d’aborder le mouvement et les postures, on commence par une période calme pour se
                                        recentrer
                                        afin
                                        d’être dans la pleine conscience de l’instant présent.
                                    </p>
                                    <p>
                                        L’objectif est ici avant tout pour l’enfant de partir à la découverte de son corps et dans
                                        un second
                                        temps de la respiration.
                                    </p>
                                </div>
                            </div>
                            
                
                            <div className="cards">
                
                                <div className="card">
                                    <h3 className="postureTitle">Chat</h3>
                                    <div className="illustrationContainer">
                                        <img src="/main/chat-yoga.jpg" alt="yoga position du chat" className="illustration chat"/>
                                    </div>
                                </div>
                
                                <div className="card">
                                    <h3 className="postureTitle">Chien tête en bas</h3>
                                    <div className="illustrationContainer">
                                        <img src="/main/chien-yoga.jpg" alt="yoga position du chien tête en bas" className="illustration"/>
                                    </div>
                                </div>
                
                                <div className="card">
                                    <h3 className="postureTitle">Tortue</h3>
                                    <div className="illustrationContainer">
                                        <img src="/main/tortue-yoga.png" alt="yoga position de la tortue" className="illustration"/>
                                    </div>
                                </div>
                
                            </div>
                            <p className="legend">
                                Les postures de yoga pour enfant sont réalisées de manière ludique et correspondent à des noms d’animaux
                                ce qui plait et amuse naturellement les enfants.
                            </p>
                            
                        </div>
                        <div id="respiration">
                            <h3>La respiration</h3>
                            <p className="description">
                                Par le biais de jeux, c’est aussi l’occasion de découvrir la respiration, le souffle, d’inspirer et
                                d’expirer et de prendre conscience pleinement de la respiration abdominale.
                            </p>
                        </div>
                        <div id="relaxation">
                            <h3>La relaxation</h3>
                            <p className="description">
                                Le plus souvent on termine par un temps de détente et de relaxation au sol .
                            </p>
                        </div>
                        <div id="conclusion">
                            <p>
                                Pour vivre avec les autres et être créatifs, tous les enfants ont besoin de se détendre, de découvrir
                                leur corps, de construire leur schéma corporel, de canaliser leur vitalité et leur énergie, de
                                travailler sur leur faculté d’attention et enfin d’établir un contact amical avec eux-mêmes.
                                Le yoga correspond à un véritable art de vivre et peut les y aider efficacement.
                            </p>
                        </div>
                    </section>
                
                </section>
                
                <section id="adulte">
                    <h2 className="sectionTitle">Les adultes</h2>
                    <div id="historique">
                        <p>
                            Évoqué pour la première fois au XVème siècle dans le texte Hatha Yoga Pradipika, attribué au sage Yogi
                            Svātmārāma, le Hatha Yoga est considéré comme un chemin vers la réalisation de soi, via la pratique de
                            postures physiques, ou asanas, associée à des techniques de respiration, dites pranayama. Ces postures
                            visent à diriger et faire circuler les énergies.
                        </p>
                
                        <p className="separateur">Les bienfaits du Hatha Yoga</p>
                
                        <p>
                            Constitué des termes sanskrits « ha » et « tha » qui signifient respectivement le soleil et la lune, le
                            Hatha est l’union de ces deux énergies complémentaires qui nous constituent. Les asanas allongent et
                            raffermissent nos muscles, notamment par des exercices de gainage, et confèrent une sensation de bien-être
                            et de vitalité
                            En outre, elles agissent sur nos organes internes et contribuent à stimuler directement notre système
                            endocrinien.
                        </p>
                
                        <p className="separateur">Les muscles se renforcent, le corps se détend</p>
                
                        <p>
                            La face solaire du Hatha Yoga, aussi appelée yang, se traduit par la réalisation de postures qui, tenues,
                            permettent d’étirer, de renforcer et d’irriguer les tissus conjonctifs composant notre corps. Muscles,
                            tendons et fascias sont ainsi tonifiés et assouplis, contribuant à un meilleur fonctionnement des
                            articulations.C’est la mobilité du corps dans son intégralité qui est impactée. Les mouvements sont plus
                            aériens, libérés des tensions liées notamment aux mauvaises postures de la vie quotidienne qui sont, au fils
                            des séances, peu à peu corrigées.
                        </p>
                        <p>
                            Les toxines accumulées dans les différents espaces du corps, bassin, chevilles, nuque, épaules, sont
                            évacuées et remplacées par une sensation de bien-être. Le système neurovégétatif, qui régule notamment nos
                            émotions, est ainsi rééquilibré.
                        </p>
                
                        <p className="separateur">Le mental s’apaise, la paix intérieure s’installe</p>
                
                        <p>
                            Dans sa constituante plus lunaire, ou yin, le Hatha Yoga agit sur le système parasympathique qui, lui aussi,
                            se régule. L’attention et la concentration nécessaires pour ajuster et maintenir les asanas tout en
                            respirant amplement viennent calmer le mental. les pensées se font moins turbulentes et cèdent la place au
                            lâcher-prise et à la détente. Un nouvel état de conscience peut alors s’installer.
                        </p>
                        <p>
                            Des exercices de respiration, ou pranayama, ainsi que de méditation, soit dhyana, et/ou de visualisation,
                            peuvent venir compléter les asanas et renforcer les bienfaits de la séance.
                        </p>
                    </div>
                    <div className="bienfaits">
                        <h3 className="subsectionTitle">
                            Grâce à une pratique régulière, les bénéfices du Hatha Yoga incluent :
                        </h3>
                        <ul className="items">
                            <li>La diminution du stress et de l’anxiété</li>
                            <li>La régulation émotionnelle</li>
                            <li>Un sommeil de meilleure qualité</li>
                            <li>La souplesse du corps en harmonie avec le mental</li>
                            <li>Le renforcement des muscles</li>
                            <li>La stimulation de la circulation sanguine</li>
                            <li>Une confiance en soi accrue</li>
                            <li>Une diminution de la fatigue</li>
                            <li>La libération des tensions physiques et mentales</li>
                            <li>Un corps qui se redresse et se tonifie.</li>
                        </ul>     
                    </div>
                    <div className="pourqui">
                        <h3 className="subsectionTitle">À qui s’adresse le Yoga ?</h3>
                        <p>
                            Dynamisant et calmant, le Hatha Yoga est indiqué pour les personnes en recherche d’harmonie, souhaitant
                            activer leur corps afin d’y faire circuler au mieux les énergies, également par le souffle. La santé, la
                            joie et la confiance s’installent.
                        </p>
                    </div>
                </section>
            </div>
        </div>    
        </Base>
    )}






