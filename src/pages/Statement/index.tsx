import React from 'react'

import PageHeader from '../../components/PageHeader'


import './styles.css'
import { Link } from 'react-router-dom'

export default function Statement() {
    return (
        <div id="survey-page">
            <PageHeader />
            <div id="survey-content" className="container">
                <div id="statement">
                    <h2>Enunciado:</h2>
                    <div className="lista">
                        <ul>
                            <li>Você deverá responder a um total de <strong>15 questões</strong>;</li><br/>
                            <li>Não será necessário se identificar;</li><br/>
                            <li>Todas as suas respostas permanecerão <strong>anônimas</strong>.</li><br/>
                            <li>Seja <strong>sincero</strong> em suas respostas;</li><br/>
                            <li>O prazo final para responder ao questionário será em <strong>21 de Agosto de 2020 as 18h</strong>;</li><br/>
                            <li>Ao final, vamos consolidar todas as respostas e divulgar os resultados da pesquisa;</li>
                        </ul>
                    </div>
                </div>
                <Link to="/questionário">
                    <button>Começar</button>
                </Link>
            </div>
        </div>
    )
}
