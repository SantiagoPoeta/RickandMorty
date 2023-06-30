import './About.css';
import fotoperfil from "../../assets/Perfil.jpg"

function About(){
    return(
        <div>
            <div className= "Container">
                <div className="img-Container">
                    <img className='Foto' src= {fotoperfil} alt='Mi imagen'/>
                </div>
                <div className="text-Container">
                        Mi nombre es Santiago Poeta.
                        Soy un estudiante de Ingeniería en Sistemas y soy oriundo de San José de la Esquina.
                        Un pueblo muy cerca de Rosario, por lo que estoy viviendo en dicha ciudad al dia de hoy.
                        Me uní a Henry porque me gustó la oportunidad de poder profundizar mis
                        conocimiento en Desarrollo Web, con costo inicial 0.
                        Me gusta tocar la guitarra y jugar al futbol con mis amigos, y también programar.
                        Espero poder disfrutar del trayecto y poder trabajar de lo que amo.
                </div>
            </div>   
        </div>
    )
}
export default About;