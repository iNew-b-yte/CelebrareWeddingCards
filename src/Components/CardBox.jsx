import React from "react";
import Caraousel from "./Caraousel";
// import Input from "./utility_components/Input";

// import Page1 from "../ASSETS/Page1.jpg";
// import Page2 from "../ASSETS/Page2.jpg";
// import Page3 from "../ASSETS/Page3.jpg";




function CardBox() {
    return (
        <div className="cardBox shadow col pb-5">
            <div className="row pt-5 px-5 ">
                <div className="col-lg-7 col-md-7">
                    <Caraousel />                   
                </div>
                <div className="col-lg-5 col-md-5 row card">
                    <div className="col-lg-12 fs-2 card-title text-center">Card Title</div>
                    <div className="col-lg-12 fs-4 pricing text-center mt-3"><span className="me-3">$499</span>    <span className="ms-3 text-success">75%Off</span></div>
                    <p className="hr-line"></p>
                    <div className="col-lg-12 text-secondary card-txt text-center my-4">Donec eu ornare mi. Sed finibus
                        condimentum mauris, ut dictum eros
                        maximus vitae. Nullam
                        condimentum tortor ac elit feugiat
                        iaculis. Aenean mauris nisl, blandit
                    </div>
                    <div className="col-lg-12 btn btn-dark btn-lg text-white my-3 p-2 fs-1 card-btn">Try this Card</div>
                </div>
            </div>
        </div>
    )
}
export default CardBox;