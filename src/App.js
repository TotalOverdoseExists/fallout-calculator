import React from 'react'
import './css/reset.css'
import './App.css'

function LanguageSelect(props) {
	return (
		<button>
			{props.lang}
		</button>
	)
}

class App extends React.Component {
	render() {
		return (
			<header>
				<h1>Fallout Calculator</h1>
				<div className='m-language'>
					<LanguageSelect lang='en' />
					<LanguageSelect lang='ru' />
				</div>
			</header>
		)
	}
}

export default App
