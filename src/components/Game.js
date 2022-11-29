import React from 'react'

export default function Game({ question, onClickVariant, step, questions }) {
	const procent = Math.round((step / questions.length) * 100)

	return (
		<>
			<div className="progress">
				<div style={{ width: `${procent}%` }} className="progress__inner"></div>
			</div>
			<h1>{question.title}</h1>
			<ul>
				{question.variants.map((text, index) => (
					<li key={text} onClick={() => onClickVariant(index)}>
						{text}
					</li>
				))}
			</ul>
		</>
	)
}
