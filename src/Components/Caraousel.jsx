import React from 'react';
import Page1 from '../ASSETS/Page1.jpg';
import Page2 from '../ASSETS/Page2.jpg';
import Page3 from '../ASSETS/Page3.jpg';


function Caraousel() {
  return (
    <div id="slider">
    <input type="radio" name="slider" id="s1" checked/>
    <input type="radio" name="slider" id="s2" checked/>
    <input type="radio" name="slider" id="s3" checked/>

    {/* <div id="slide1">1</div>
    <div id="slide2">2</div>
    <div id="slide3">3</div> */}
    <img src={Page1} className="page1 Page" id="slide1" alt="page-1" width="200" height="300" />
    <img src={Page2} className="page1 Page" id="slide2" alt="page-2" width="200" height="300" />
    <img src={Page3} className="page1 Page" id="slide3" alt="page-3" width="200" height="300" />
</div>
  )
}

export default Caraousel;