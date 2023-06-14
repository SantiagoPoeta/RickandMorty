import errorimg from "../../assets/images.jpg"

function ErrorPage(){
    return <div>
        <img src={errorimg} alt="Error 404" />
        <h1> Error 404, tu ruta está equivocada</h1>
    </div>
};

export default ErrorPage;