import Image from "next/image"
import Dining from "@/Pictures/dining.png"
import Living from "@/Pictures/living.png" 
import Bedroom from "@/Pictures/bedroom.png" 
export default function SubHero(){

    return (
        <>
        <div className="subText mt-20">
            <h3> Browse The Range</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="imgArea mt-5">
            <div className="imgOne">

            <Image src={Dining} width={282} alt="Picture of the author" />
                <h6>Dining</h6>
            </div>
                

            <div className="imgTow">
            <Image src={Living} width={282} alt="Picture of the author" />
            <h6>Living</h6>
            </div>
            
            <div className="imgThree">

            <Image src={Bedroom} width={282} alt="Picture of the author" />
            <h6>Bedroom</h6>    
            </div>
           </div>

        </>
    )
}