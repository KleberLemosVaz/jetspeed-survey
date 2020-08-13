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
                    <h3>O covid-19 transformou o dia a dia em nossa empresa. O home-office começou a fazer parte da nossa vida. Estamos realizando uma pesquisa para avaliar o impacto dessa nova experiência com nossos colaboradores.</h3>
                    <Link to="/survey">
                        <button>Responder Pesquisa</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
