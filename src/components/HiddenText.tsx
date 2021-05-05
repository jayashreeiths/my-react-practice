import {useState} from 'react'


const HiddenText = () => {
	const [isVisible, setIsVisible] = useState(false)

	let maybeText = null
	if( isVisible ) {
		maybeText = (
			<div>
				Maybe visible
			</div>
		)
	}

	let buttonText;
	if( isVisible ) {
		buttonText = 'Hide text'
	} else {
		buttonText = 'Show text'
	}

	const toggleVisibility = () => {
		setIsVisible( !isVisible )
	}

	return (
		<div>
			<div>
				<button onClick={toggleVisibility}>
					{buttonText}
				</button>
			</div>
			{maybeText}
		</div>
	)
}
// Alternativt sätt att toggla textens synlighet:
// <button onClick={toggleVisibility}>
// 	{isVisible ? 'Hide' : 'Show'} text
// </button>

export default HiddenText