export default function Navbars(){
    return(
        <div className="row">
            <div className="col-6">
                <nav className="my-d-flex padding-nav my-bg-color">
                    <div className="container-fluid">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bootstrap-fill" viewBox="0 0 16 16">
                            <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"/>
                            <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z"/>
                        </svg>
                    </div>
                    <ul className="ul-style my-d-flex">
                        <li className="padding-item">
                            <a className="a-color" href="#" >Home</a>
                        </li>
                        <li className="padding-item bg-item dis-block">
                            <a className="a-color" href="#">Features</a>
                            <ul className="mp-0 ul-style dis-none dis-block ul-position">
                                <li>
                                    <a className="a-color" href="#">Item 1</a>
                                </li>
                                <li>
                                    <a className="a-color" href="#">Item 2</a>
                                </li>
                                <li>
                                    <a className="a-color" href="#">Item 3</a>
                                </li>
                            </ul>
                        </li>
                        <li className="padding-item">
                            <a className="a-color" href="#">Pricing</a>
                        </li>
                    </ul>   
                </nav>
                <h3>Navbar by my own css</h3>
            </div>
            <div className="col-6">
                <nav class="navbar navbar-expand-lg bg-warning">
                    <div className="container-fluid p-4">
                        <div className="container-fluid">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bootstrap-fill" viewBox="0 0 16 16">
                                <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"/>
                                <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z"/>
                            </svg>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active"href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Pricing</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <h3>Navbar by Bootstrap</h3>
            </div>
        </div>
    )
}