import Image from "next/image"
import "../static/css/goTop.css"

import {gsap} from "gsap"
import {useEffect,useRef} from "react"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function GoTop(){

    const handleClick = () =>{
        window.scrollTo({top:0,behavior:"smooth"})
    }

    const button = useRef()
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger : {
                trigger : button.current,
                toggleActions : "play pause pause pause",
            }
        })
        .to(button.current,{
            y:"-=3px",
            duration:.8,
            ease:"power4.out"
        })
        .yoyo(true)
        .repeat(-1)
    },[])

    return(
        <div className="scrollTopContainer" onClick={handleClick}>
            <img ref={button} src="/main/scrollTop.svg" alt="Retourner en haut de la page" title="Haut de page"/>
        </div>
    )
}