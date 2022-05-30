import React from "react";

function Input({_type,_name,_id,_checked}){
    return <input type={_type} name={_name} id={_id} checked={_checked} />
}

export default Input;