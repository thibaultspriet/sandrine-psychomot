import Head from "next/head"
import Base from "../components/Base"
import Image from "next/image"

import parse from "html-react-parser"

import { useState, useEffect } from "react"

import "../static/css/rendez_vous.css"

export default function RendezVous({ services }) {

    const [serviceSelected, setServiceSelected] = useState(services[0])

    const handleChange = (e) => {
        const label = e.target.value
        const service = services.filter(service => service.label == label)
        setServiceSelected(...service)
    }

    return (
        <div>
            <Base route="rendez_vous">
                <Head>
                    <title>Rendez-vous</title>
                </Head>

                <div id="page-rdv">
                    <header className='rdv-header' style={{ backgroundImage: "url('/main/plaque_cabinet.jpg')" }}>
                        <h1>Prenez Un Rendez-Vous</h1>
                        <p>Contactez moi en quelques clics et en rédigeant un message si vous le souhaitez. Je vous réponds au plus vite pour confirmer le rendez-vous.</p>
                    </header>

                    <div className="form-container">
                        <form action="/rendez_vous#rdvForm" name="rendez vous" method="POST" data-netlify="true" id="rdvForm" encType="application/x-www-form-urlencoded">
                            <input type="hidden" name="rendez vous" value="rendez vous" />
                            <input type="hidden" id="subject" name="subject" value="Psychomot : demande de rendez-vous"/>

                            <div className="select-service">
                                <label htmlFor="service">Choisissez un service</label>
                                <select name="service" onChange={handleChange} required style={{ backgroundImage: "url('/main/arrow-down.svg')" }}>
                                    {
                                        services.map(({ label }, ind) => {
                                            return (
                                                <option value={label} key={ind}>{label}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <main className="recap">
                                <ul className="infos">
                                    <li className="name"><span id="name">{serviceSelected.label}</span></li>
                                    <li className="price" >{serviceSelected.label == "Bilan Psychomoteur" ? "Forfait : " : "Prix : "}<span id="price">{serviceSelected.price}</span>€</li>
                                    <li className="duration">Durée : <span id="duration">{serviceSelected.duration}</span></li>
                                </ul>
                                <div className="description">
                                    <span id="description">{parse(serviceSelected.description)}</span>
                                </div>
                                <div className="email">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" required />
                                </div>
                                <div className="message">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" cols="30" rows="10" required></textarea>
                                </div>
                                <button type="submit">Envoyer</button>
                            </main>
                        </form>
                    </div>

                    <div className="note">
                        <p>
                            Le réglement se fait par chèques ou en espèces.
                        </p>
                        <p>
                            Une facture pourra être délivrée si besoin
                        </p>
                        <p>
                            En cas d'empéchement, l'annulation du rendez-vous doit être effectuée, au plus tard 24h avant la consultation, dans le cas contraire la séance vous sera facturée.
                        </p>
                        <p>
                            Par respect pour votre psychomotricienne et les autres patients, je vous remercie de respecter les horaires de vos rendez-vous.
                        </p>
                    </div>

                </div>

            </Base>
        </div>
    )

}

export async function getStaticProps() {
    return {
        props: {
            services: [
                {
                    label: "Bilan Psychomoteur",
                    price: "165",
                    duration: "",
                    description: `
                    <ul>
                    <li>Forfait comprenant :</li>
                    <ul className="pad" >
                        <li className="disc">1 entretien préalable d'une heure</li>
                        <li className="disc">2 séances de bilan de 1h environ</li>
                        <li className="disc">rédaction du bilan & analyse des résultats</li>
                    </ul></br>
                    <li>Entretien préalable : 50€ seul</li>`
                },
                {
                    label: "Séance de psychomotricité",
                    price: "42",
                    duration: "45min",
                    description: ""
                },
                {
                    label: "Yoga / Sophrologie adultes",
                    price: "50",
                    duration: "1h",
                    description: "<p>La première séance consiste en un entretien individuel que nous menons ensemble. A cette occasion, j'identifie vos attentes et vos besoins pour parvenir à l'objectif que vous vous êtes fixé.</br>Une fois ce bilan effectué, je vous propose de pratiquer et d'expérimenter quelques exercices. (durée : 1h30 prix : 60€)</p>"
                },
                {
                    label: "Yoga / Sophrologie enfants",
                    price: "42",
                    duration: "45min",
                    description: "Séances enfants"
                }
            ]
        }
    }
}