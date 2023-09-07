export default function StuckObject(){
    return( 
        <div className="bg-lila min-vh-100 row">
            <h1>Fixed at the end page</h1>
            <div className="d-flex justify-content-end fixed-bottom">
                <button className="btn btn-light btn-lg">hola mundo</button>
            </div>   
            <div className="p-3 fixed-bottom col-3">
                <fieldset className="">
                    <input type="text" className="form-control border border-white rounded-pill bg-body-tertiary pt-3" placeholder="Type a message"/>
                </fieldset>
            </div>
        </div>
    )
}