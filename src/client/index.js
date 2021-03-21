import { handleSubmit } from "./js/handleSubmit";

import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/form.scss";
import "./styles/header.scss";

window.addEventListener('DOMContentLoaded', () => {
    console.log('see me');
    //get the button for submit
    const btnSubmit = document.getElementById('btn-submit')
    //add event listener to it when the click to call handleSubmit function
    btnSubmit.addEventListener('click', ()=>{
        console.log('btn clicked');
        handleSubmit(event);
    })
})
export { handleSubmit };
