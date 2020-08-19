import React from 'react'

import successImg from '../../assets/confirmed.svg'

import './styles.css'


export default function Success() {
    return (
        <div id="success-page" className="container">
            <h1>Enviado com sucesso!</h1>
            <img src={successImg} alt="sucesso"/>

        </div>
    )
}
