import { useState } from 'react'
import './Settings.css'

const Settings = () => {
	const [mode, setMode] = useState('dark')

	// const onClickLight = () => setMode('light');

	return (
		<div className={"settings " + mode}>
			<label>
				Light mode
				<input type="radio" name="settings"
					onClick={() => setMode('light')} />
			</label>
			<label>
				Dark mode
				<input type="radio" name="settings"
					onClick={() => setMode('dark')} />
			</label>
			<label>
				Party mode
				<input type="radio" name="settings"
					onClick={() => setMode('party')} />
			</label>
		</div>
	)
}

export default Settings