import Head from "next/head";
import { Power2, gsap } from "gsap";
import { useRef, useEffect } from "react"


export default function Base({ children, route }) {

    const hamburger = useRef(null);
    const rubriques = useRef(null);
    const rubriques_mobile = useRef(null);

   
    const menuTL = gsap.timeline({
        defaults: {
            duration : 1,
            ease : Power2.easeOut
        },
        paused: true
    })

    useEffect(() => {
        menuTL
            .to(hamburger.current, {
                left: "unset",
                right: 0,
            })
            .to(rubriques.current, {
                    height: "auto",
                }, "-=1")
            .to(rubriques_mobile.current, {
                    transform: "translateX(0)",
                }, "-=1")
            .from(rubriques_mobile.current.children, {
                    transform: "translateX(-100%)",
                    opacity: 0,
                    delay: (index, element, all) => {
                        return index * 0.2
                    }
                }, '-=1')
            .reverse()
    }, [])

    const handleClick = function () {
        if (menuTL.reversed()) {
            menuTL.play()
        } else {
            menuTL.reverse()
        }
    }


    return (
        <div>
            <Head>
                <link rel="stylesheet" href="/style/base.css" />
            </Head>
            <header className="base-header">
                <nav className="coordinates">
                    <ul className="list-coordinates">
                        <li><a href="tel:0615742382"><img src="main/phone-call.svg" alt="phone"
                            className="tel" />06 08 30 28 97</a></li>
                        <li><a href="mailto:thibaultspriet@hotmail.fr"><img src="main/email.svg"
                            alt="email" className="mail" />sandrine.dubois.psychomot@sfr.fr</a></li>
                        <li><a href="#"><img src="main/location.svg" alt="location"
                            className="location" />548, rue de la Verderie 59710 Mérignies</a></li>
                    </ul>
                </nav>
                <nav ref={rubriques} className="rubriques">
                    <div className="toggle-menu">
                        <img ref={hamburger} src="main/hamburger.svg" alt="menu" className="hamburger" onClick={handleClick} />
                    </div>
                    <ul className="list-rubriques">
                        <li className={route == "index" ? "active" : null}><a
                            href="/">Accueil</a></li>
                        <li className={route == "presentation" ? "active" : null}><a
                            href="/presentation">Présentation</a></li>
                        <li className={route == "psychomotricite" ? "active" : null}><a
                            href="/psychomotricite">Psychomotricité</a></li>
                        <li className={route == "yoga-sophro" ? "active" : null}><a
                            href="/yoga-sophro">Sophrologie-Yoga</a></li>
                        <li className={route == "rendez_vous" ? "active" : null}><a
                            href="/rendez_vous">Rendez-Vous</a></li>
                        <li className={route == "contact" ? "active" : null}><a
                            href="/contact">Contact</a></li>
                    </ul>

                    <ul ref={rubriques_mobile} className="list-rubriques-mobile">
                        <li /* ref={rubriques_mobile_item} */><a href="/index">Accueil</a></li>
                        <li /* ref={rubriques_mobile_item} */><a href="/presentation">Présentation</a></li>
                        <li /* ref={rubriques_mobile_item} */><a href="/psychomotricite">Psychomotricité</a></li>
                        <li /* ref={rubriques_mobile_item} */><a href="/yoga-sophro">Sophrologie-Yoga</a></li>
                        <li /* ref={rubriques_mobile_item} */><a href="/rendez_vous">Rendez-Vous</a></li>
                        <li /* ref={rubriques_mobile_item} */><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            {children}

            <footer>
                <div className="footer-infos">
                    <ul className="footer-liens footer-infos-item">
                        <li className="footer-title">Liens utiles</li>
                        <li><a href="https://www.dyspraxies.fr">Dyspraxies France</a></li>
                        <li><a href="https://www.ffdys.com">F.F.D.Y.S.</a></li>
                        <li><a href="https://www.inshea.fr">INSHEA</a></li>
                        <li><a href="https://www.cra-npdc.fr">Centre de ressources autisme</a></li>
                    </ul>
                    <ul className="footer-coordinate footer-infos-item">
                        <li className="footer-title">Coordonnées</li>
                        <li><a href="tel:0608302897" className="tel"><img src="main/phone-call.svg"
                            alt="phone" className="tel" />: 06 08 30 28 97</a></li>
                        <li><a href="mailto:sandrine.dubois.psychomot@sfr.fr" className="mail"><img
                            src="main/email.svg" alt="email" className="mail" />:
                                sandrine.dubois.psychomot@sfr.fr</a></li>
                        <li><a href="#" className="addresse"><img src="main/location.svg" alt="location"
                            className="location" />: 548, rue de la Verderie 59710 Mérignies</a></li>
                    </ul>
                    <div className="footer-rdv footer-infos-item">
                        <h2 className="footer-title">Rendez-vous</h2>
                        <p>Jours de consultation :<br />Lundi, Mardi, Jeudi, Vendredi</p>
                        <a href="/rendez_vous" className="btn footer-btn">Prendre rendez-vous</a>
                    </div>
                </div>
                <div className="copyright">
                    <p>2020 par Thibault SPRIET</p>
                </div>

            </footer>
        </div>
    )
}
