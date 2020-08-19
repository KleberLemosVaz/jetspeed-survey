import React, { TextareaHTMLAttributes } from 'react'

import { Question } from '../InputRadio'

import nextImg from '../../assets/next.svg'
import backImg from '../../assets/back.svg'

import './styles.css'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    nextQuestion(): void;
    previousQuestion(): void;
    question: Question;
    checked: string

}

const InputTextArea: React.FC<TextareaProps> = ({ question, nextQuestion, checked, previousQuestion, ...rest }) => {
    return (
        <form id="step-form">
            <fieldset>
                <div className="textarea-block">
                    <label htmlFor="question">
                        <h2>{question.number}</h2>
                        <h3>{question.question}</h3>
                    </label>
                    <textarea id="question" value={checked} {...rest} />
                </div>

            </fieldset>
            <div className="form-footer">
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

export default InputTextArea
