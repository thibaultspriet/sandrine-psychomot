import Head from "next/head"
import Base from "../components/Base"
import Image from "next/image"

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
                        <form action="/rendez_vous#rdvForm" name="rendez vous" method="POST" data-netlify="true" id="rdvForm" enctype="application/x-www-form-urlencoded">
                            <input type="hidden" name="rendez vous" value="rendez vous" />

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
                                    <li className="price" >Prix : <span id="price">{serviceSelected.price}</span>€</li>
                                    <li className="duration">Durée : <span id="duration">{serviceSelected.duration}</span></li>
                                </ul>
                                <div className="description">
                                    <span id="description">{serviceSelected.description}</span>
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
                    price: "150",
                    duration: "1h30",
                    description: "Lors du premier rendez-vous, le psychomotricien r\u00e9alise un entretien qui permet de mieux comprendre la demande initiale en reprenant l\u2019histoire de vie, les diff\u00e9rentes \u00e9tapes de son d\u00e9veloppement, les difficult\u00e9s rencontr\u00e9es, les particularit\u00e9s comportementales"
                },
                {
                    label: "Séance de psychomotricité",
                    price: "50",
                    duration: "1h",
                    description: "Ateliers de psychomotricité"
                },
                {
                    label: "Yoga / Sophrologie adultes",
                    price: "50",
                    duration: "1h",
                    description: "Séance pour adultes"
                },
                {
                    label: "Yoga / Sophrologie enfants",
                    price: "40",
                    duration: "45min",
                    description: "Séances enfants"
                }
            ]
        }
    }
}