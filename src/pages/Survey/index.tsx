import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader'
import InputRadio  from '../../components/InputRadio'
import InputTextArea from '../../components/InputTextArea'

import Loader from 'react-loader-spinner'

import { questions } from './questions'

import api from '../../services/api'

import './styles.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export default function Survey() {
    const history = useHistory()

    const [questionNumber, setQuestionNumber] = useState(1)
    const [currentQuestion, setCurrentQuestion] = useState({
        number: 0,
        question: 'teste',
        type: '',
        alternatives: []
    })


    const [answers1, setAnswers1] = useState('')
    const [answers2, setAnswers2] = useState('')
    const [answers3, setAnswers3] = useState('')
    const [answers4, setAnswers4] = useState('')
    const [answers5, setAnswers5] = useState('')
    const [answers6, setAnswers6] = useState('')
    const [answers7, setAnswers7] = useState('')
    const [answers8, setAnswers8] = useState('')
    const [answers9, setAnswers9] = useState('')
    const [answers10, setAnswers10] = useState('')
    const [answers11, setAnswers11] = useState('')
    const [answers12, setAnswers12] = useState('')
    const [answers13, setAnswers13] = useState('')
    const [answers14, setAnswers14] = useState('')
    const [answers15, setAnswers15] = useState('')

    const [isLoading, setIsloading] = useState(false)


    function handleToNextQuestion() {
        setQuestionNumber(questionNumber + 1)
    }

    function handleToPreviousQuestion() {
        setQuestionNumber(questionNumber - 1)
    }

    useEffect(() => {
        const data:any = questions.filter(question => {
            return question.number === questionNumber
        })
        setCurrentQuestion(data[0])
    }, [questionNumber])

    async function submitAnswers() {
        setIsloading(true)
        await api.post('send', {
            answers1,
            answers2,
            answers3,
            answers4,
            answers5,
            answers6,
            answers7,
            answers8,
            answers9,
            answers10,
            answers11,
            answers12,
            answers13,
            answers14,
            answers15,
        }).then(() => {
            history.push('/sucesso')
        }).catch((e) => {
            alert('Ocorreu um erro com o nosso servidor. Por favor, tente novamente mais tarde.')
            history.push('/')
        })

    }

    return (
        <div id="survey-page">
            <PageHeader />
            <div id="survey-content" className="container">
                <main>
                    {isLoading ?
                        <div>
                            <h1 className="loading">Enviando</h1>
                            <Loader
                                type="ThreeDots"
                                color="#7C7C84"
                                height={100}
                                width={100}
                                timeout={5000} //3 secs

                            />
                        </div>

                        : currentQuestion.type === 'radio' ?
                            <InputRadio
                                nextQuestion={handleToNextQuestion}
                                previousQuestion={handleToPreviousQuestion}
                                question={currentQuestion}
                                onChange={

                                    questionNumber === 1 ? (e) => { setAnswers1(e.target.value) } :
                                        questionNumber === 2 ? (e) => { setAnswers2(e.target.value) } :
                                            questionNumber === 3 ? (e) => { setAnswers3(e.target.value) } :
                                                questionNumber === 4 ? (e) => { setAnswers4(e.target.value) } :
                                                    questionNumber === 5 ? (e) => { setAnswers5(e.target.value) } :
                                                        questionNumber === 6 ? (e) => { setAnswers6(e.target.value) } :
                                                            questionNumber === 7 ? (e) => { setAnswers7(e.target.value) } :
                                                                questionNumber === 8 ? (e) => { setAnswers8(e.target.value) } :
                                                                    questionNumber === 9 ? (e) => { setAnswers9(e.target.value) } :
                                                                        questionNumber === 10 ? (e) => { setAnswers10(e.target.value) } :
                                                                            questionNumber === 11 ? (e) => { setAnswers11(e.target.value) } :
                                                                                questionNumber === 12 ? (e) => { setAnswers12(e.target.value) } :
                                                                                    questionNumber === 13 ? (e) => { setAnswers13(e.target.value) } :
                                                                                        questionNumber === 14 ? (e) => { setAnswers14(e.target.value) } :
                                                                                            (e) => { setAnswers15(e.target.value) }
                                }
                                checked={
                                    questionNumber === 1 ? answers1 :
                                        questionNumber === 2 ? answers2 :
                                            questionNumber === 3 ? answers3 :
                                                questionNumber === 4 ? answers4 :
                                                    questionNumber === 5 ? answers5 :
                                                        questionNumber === 6 ? answers6 :
                                                            questionNumber === 7 ? answers7 :
                                                                questionNumber === 8 ? answers8 :
                                                                    questionNumber === 9 ? answers9 :
                                                                        questionNumber === 10 ? answers10 :
                                                                            questionNumber === 11 ? answers11 :
                                                                                questionNumber === 12 ? answers12 :
                                                                                    questionNumber === 13 ? answers13 :
                                                                                        questionNumber === 14 ? answers14 :
                                                                                            answers15
                                }
                            /> :
                            <InputTextArea
                                nextQuestion={handleToNextQuestion}
                                previousQuestion={handleToPreviousQuestion}
                                question={currentQuestion}
                                onChange={

                                    questionNumber === 1 ? (e) => { setAnswers1(e.target.value) } :
                                        questionNumber === 2 ? (e) => { setAnswers2(e.target.value) } :
                                            questionNumber === 3 ? (e) => { setAnswers3(e.target.value) } :
                                                questionNumber === 4 ? (e) => { setAnswers4(e.target.value) } :
                                                    questionNumber === 5 ? (e) => { setAnswers5(e.target.value) } :
                                                        questionNumber === 6 ? (e) => { setAnswers6(e.target.value) } :
                                                            questionNumber === 7 ? (e) => { setAnswers7(e.target.value) } :
                                                                questionNumber === 8 ? (e) => { setAnswers8(e.target.value) } :
                                                                    questionNumber === 9 ? (e) => { setAnswers9(e.target.value) } :
                                                                        questionNumber === 10 ? (e) => { setAnswers10(e.target.value) } :
                                                                            questionNumber === 11 ? (e) => { setAnswers11(e.target.value) } :
                                                                                questionNumber === 12 ? (e) => { setAnswers12(e.target.value) } :
                                                                                    questionNumber === 13 ? (e) => { setAnswers13(e.target.value) } :
                                                                                        questionNumber === 14 ? (e) => { setAnswers14(e.target.value) } :
                                                                                            (e) => { setAnswers15(e.target.value) }
                                }
                                checked={
                                    questionNumber === 1 ? answers1 :
                                        questionNumber === 2 ? answers2 :
                                            questionNumber === 3 ? answers3 :
                                                questionNumber === 4 ? answers4 :
                                                    questionNumber === 5 ? answers5 :
                                                        questionNumber === 6 ? answers6 :
                                                            questionNumber === 7 ? answers7 :
                                                                questionNumber === 8 ? answers8 :
                                                                    questionNumber === 9 ? answers9 :
                                                                        questionNumber === 10 ? answers10 :
                                                                            questionNumber === 11 ? answers11 :
                                                                                questionNumber === 12 ? answers12 :
                                                                                    questionNumber === 13 ? answers13 :
                                                                                        questionNumber === 14 ? answers14 :
                                                                                            answers15
                                }
                            />

                    }
                    {questionNumber === 15 &&
                        <button onClick={submitAnswers}>Enviar respostas</button>
                    }
                </main>

            </div>
        </div>
    )
}
