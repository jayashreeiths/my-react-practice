import { useState } from 'react';
import './ToggleMode.css'

const ToggleMode = () => {
	const [mode, setMode] = useState('dark')

	const setLightMode = () => { setMode('light'); }
	const setDarkMode  = () => { setMode('dark'); }

	console.log('ToggleMode: render');

	return (
		<div className={mode}>
			<p>
				<button onClick={setLightMode}> Light mode </button>
				<button onClick={setDarkMode}> Dark mode </button>
			</p>
			<p>
				This is a component that toggles between light mode and dark mode.
			</p>
		</div>
	)
}

export default ToggleMode;