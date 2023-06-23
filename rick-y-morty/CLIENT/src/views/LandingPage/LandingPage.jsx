import LoginForm from "../../components/LoginForm/LoginForm";

import style from "../LandingPage/Landing.module.css";

function LandingPage({login}){
    return(
        <div className={style.body}> 
            <LoginForm login={login}/>
        </div>
    )
}
export default LandingPage;