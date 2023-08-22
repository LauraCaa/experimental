export default function Positions(){
    return(
        <div className="d-flex">
            <div className="col-6">
                <div className="h3">Position Absoluta by own css</div>
                <div className="position-relative">
                    <img src='/images/red.png' className="rounded-circle end-30" width="60" height="60" alt="..."/>
                    <img src='/images/green.png' className="rounded-circle end-20" width="60" height="60" alt="..."/>
                    <img src='/images/red.png' className="rounded-circle end-10" width="60" height="60" alt="..."/>
                </div>
            </div>
            <div className="col-6">
                <div className="h3">Position Absoluta by Bootstrap</div>
                <div className="position-relative">
                    <img src='/images/red.png' className="rounded-circle position-absolute end-0" width="60" height="60" alt="..."/>
                    <img src='/images/green.png' className="rounded-circle position-absolute end-50" width="60" height="60" alt="..."/>
                    <img src='/images/red.png' className="rounded-circle position-absolute end-100" width="60" height="60" alt="..."/>
                </div>
            </div>
        </div>
    )
}