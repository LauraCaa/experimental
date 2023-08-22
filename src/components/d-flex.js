import '../assets/globals.css'

export default function Dflex(){
    return(
            <div className="row">
                <div className="col-6">
                    <h3>Center content by my own css</h3>
                    <div className="col-6 min-vh-100 my-bg-color my-justify-content-center">
                        <div className="my-justify-content-center">
                            <div className="my-bg-yellow padding-content">Conetido</div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <h3>Center content by bootstrap</h3>
                    <div className="col-6 min-vh-100 d-flex justify-content-center bg-info">
                        <div className="d-flex justify-content-center align-items-center bg-info">
                            <div className="bg-primary p-2">Conetido</div>
                        </div>
                    </div>
                </div>  
            </div>
    )
}