import React, { useState } from 'react'
import Game from './components/Game'
import Result from './components/Result'

const questions = [
	{
		title: 'React - это ... ?',
		variants: ['Библиотека', 'Фреймворк', 'Приложение'],
		correct: 0,
	},
	{
		title: 'Компонент - это ... ',
		variants: [
			'Приложение',
			'Часть приложения или страницы',
			'То, что я не знаю что такое',
		],
		correct: 1,
	},
	{
		title: 'Что такое JSX?',
		variants: [
			'Это простой HTML',
			'Это функция',
			'Это тот же HTML, но с возможностью выполнять JS-код',
		],
		correct: 2,
	},
]

function App() {
	const [step, setStep] = useState(0)
	const [correct, setCorrect] = useState(0)
	const question = questions[step]

	const onClickVariant = (index) => {
		setStep(step + 1)
		if (index === question.correct) {
			setCorrect(correct + 1)
			console.log(correct)
		}
	}

	return (
		<div className="App">
			{step !== questions.length ? (
				<Game
					step={step}
					question={question}
					onClickVariant={onClickVariant}
					questions={questions}
				/>
			) : (
				<Result correct={correct} questions={questions} />
			)}
		</div>
	)
}

export default App
