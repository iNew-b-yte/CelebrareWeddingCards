import React from 'react';
import Text from "./utility_components/Text";

function Feature() {
    return (

        <div id="feature-section">

            <div className='text-center mt-5 fs-2'>Features</div>
            <div className='row cover-box py-4 shadow'>
                <div className="col-lg-4">
                    <div className='custom-h-w col-lg-4 my-4 radical-gradient' />
                    <Text _className="custom-text px-5" >Create your card in just 5 mins</Text>
                </div>
                <div className="col-lg-4">
                    <div className='custom-h-w col-lg-4 my-4 radical-gradient' />
                    <Text _className="custom-text px-5">Customize the Text with "Edit this Page" Option</Text>
                </div>
                <div className="col-lg-4">
                    <div className='custom-h-w col-lg-4 my-4 radical-gradient' />
                    <Text _className="custom-text px-5"> Editing is available after purchase also </Text>
                </div>

            </div>
        </div>
    )
}

export default Feature;