import React from "react";

function Bottone() {
    const prova = () => {
        var colore = document.getElementById('colore')
        colore.style.color = 'red'

    };
    return (
        <div>
            <p id='colore'>devi cliccare il bottone</p>
            <button onClick={prova}>IL BOTTONE</button>
        </div>
    );
}

export default Bottone;