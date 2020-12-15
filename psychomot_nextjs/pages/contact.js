import Head from "next/head"
import Base from "../components/Base"
import Image from "next/image"

import "../static/css/contact.css"

export default function Contact() {

    return (
        <div>
            <Base route="contact">
                <Head>
                    <title>Contact</title>
                </Head>

                <div id="page-contact">
                    <header className="cover-container">
                        <img src="/main/contact-cover.jpg" alt="contact" className="cover" />
                    </header>

                    <main>
                        <div className="main-content">
                            <h3>Laissez moi un message !</h3>
                            <div className="hs"></div>
                            <p>
                                Si vous avez des questions, merci de m’adresser un message à l’aide de ce formulaire. Je vous répondrai
                                alors au plus vite. Vous pouvez également prendre contact directement par téléphone ou en ligne.
                    </p>

                            <form action="/contact#contactForm" name="contact" method="POST" data-netlify="true" id="contactForm" encType="application/x-www-form-urlencoded">
                                <input type="hidden" name="contact" value="contact" />
                                <input type="hidden" id="subject" name="subject" value="Psychomot : prise de contact"/>

                                <label htmlFor="nom_prenom">Nom & Prénom</label>
                                <input type="text" name="nom_prenom" required />

                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" required />

                                <label htmlFor="sujet">Sujet</label>
                                <input type="text" name="sujet" required />

                                <label htmlFor="message">Message</label>
                                <textarea name="message" cols="30" rows="10" required></textarea>

                                <button type="submit">Envoyer</button>
                            </form>

                        </div>
                        <aside className="infos">
                            <h1>
                                Sandrine Dubois <br /> Psychomotricienne
                    </h1>
                            <div className="hs"></div>
                            <p><a className="tel secondary" href="tel:0615742382">06 08 30 28 97</a></p>
                            <div className="adresse">
                                <p>
                                    Cabinet de Psychomotricité <br /> Mérignies
                        </p>
                            </div>
                        </aside>
                    </main>
                </div>

            </Base>
        </div>
    )

}