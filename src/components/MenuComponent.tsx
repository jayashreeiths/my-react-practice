import { useState } from 'react'
import Settings from './Settings' 
import MainMenu from './MainMenu' 

const MenuComponent = () => {
	const [showSection, setshowSection] = useState(<MainMenu/>)

	const setMainPage = () => { setshowSection(<MainMenu/>); }
	const setSettingsPage  = () => { setshowSection(<Settings/>); }
	console.log('MenuPage: render');

	return (
		<div >
            
			<p>
            

				 <button onClick={setMainPage }> Mainpage </button>
               
				 <button onClick={setSettingsPage}> Settings </button>
                
			</p>
			{showSection}
		</div>
	)
}


export default MenuComponent;
