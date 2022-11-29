import React from 'react'
import Img from '../img/resultImg.png'

export default function Result({ questions, correct }) {
	return (
		<div className="result">
			<img src={Img} alt="Картинка" />
			<h2>
				Вы отгадали {correct} ответа из {questions.length}
			</h2>
			<a href="/">
				<button>Попробовать снова</button>
			</a>
		</div>
	)
}
