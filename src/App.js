import React from 'react'
import './css/reset.css'
import './App.css'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			lang: '',
			name: 'Name',
			age: 18,
			sex: 'Male',
			race: 'Human'
		}
	}

	render() {
		return (
			<section>
				<header>
					<h1>Fallout Calculator</h1>
					<div className='m-language'>
						<button>{this.state.lang = 'en'}</button>
						<button>{this.state.lang = 'ru'}</button>
					</div>
				</header>
				<main>
					<div className='m-person'>
						<button>
							{this.state.name}
						</button>
						<button>
							{this.state.age}
						</button>
						<button>
							{this.state.sex}
						</button>
						<button>
							{this.state.race}
						</button>
					</div>
					<div className='m-characteristics'></div>
					<div className='m-traits'></div>
					<div className='m-skills'></div>
					<div className='m-view'></div>
				</main>
			</section>
		)
	}
}

export default App