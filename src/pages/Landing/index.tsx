import React from 'react'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/logo.svg'
import workingImg from '../../assets/working-remotely.svg'

import './styles.css'


export default function Landing() {
    return (
        <div id="landing-page"  >
            <div id="landing-content" className="container">
                <header className="page-header">
                    <img src={logoImg} alt="logo" />
                </header>

                <img src={workingImg} alt="working" className="working-img" />

                <div className="content-container">
                    <h1>PesquisaOnline</h1>
                    <h3>Você está sendo convidado a preencher uma pesquisa de opinião interna dos colaboradores da JETSPEED sobre o período de home office.</h3>
                    <Link to="/enunciado">
                        <button>Responder Pesquisa</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
