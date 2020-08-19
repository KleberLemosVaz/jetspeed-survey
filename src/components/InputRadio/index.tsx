import React, { TextareaHTMLAttributes, useEffect, useState } from 'react'

import nextImg from '../../assets/next.svg'
import backImg from '../../assets/back.svg'

import './styles.css'

export interface Question {
    number: number;
    question: string;
    type: string
    alternatives?: string[],
    type2?: string
}

interface InputRadioProps extends TextareaHTMLAttributes<HTMLInputElement> {
    nextQuestion(): void;
    previousQuestion(): void
    question: Question
    checked:string

}

const InputRadio: React.FC<InputRadioProps> = ({ nextQuestion, previousQuestion, checked, question, ...rest }) => {

    const [selected,setSelected] =useState('')

    useEffect(()=>{
        setSelected(checked)
    },[question,checked])

    return (
        <form id="step-form">
            <fieldset>
                <h2>{(question.number)}.</h2>
                <h3>{question.question}</h3>
                {console.log(question)}
                <ul className="options">
                    {question.alternatives && question.alternatives.map(alternative => {
                        return (
                            <li className="option">
                                <input type="radio" id={alternative} value={alternative} checked={ selected === alternative } name="option" {...rest} />
                                <label htmlFor={alternative}>{alternative}</label>
                            </li>
                        )
                    })}

                </ul>

            </fieldset>
            <div className="form-footer">

                {question.number === 1 &&
                    <div/>
                }

                {question.number >= 2 &&
                    <img src={backImg} alt="back-page" onClick={previousQuestion} />
                }

                {question.number <= 14 &&
                    <img src={nextImg} alt="next-page" onClick={nextQuestion} />
                }

            </div>
        </form>
    )
}

export default InputRadio
