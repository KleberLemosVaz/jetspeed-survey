import React from 'react'

import logoImg from '../../assets/logo.svg'

import './styles.css'

export default function PageHeader() {
    return (
        <header className="header-page">
            <div className="header-content">
                <img src={logoImg} alt="logo" />
            </div>
            <span className="title">PesquisaOnline</span>
        </header>   
        ) 
}
