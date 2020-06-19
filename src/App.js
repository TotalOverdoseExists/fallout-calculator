import React from 'react'
import './css/reset.css'
import './App.css'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			lang: 'en',
			name: 'Name',
			age: 18,
			sex: 'Male',
			race: 'Human'
		}
		this.langChange.bind(this)
	}

	langChange() {
		/*this.setState(lang = this.props.lang)*/
	}

	render() {
		return (
			<section>
				<header>
					<h1>Fallout Calculator</h1>
					<div className='m-language'>
						<button onClick={this.langChange}>{this.props.lang[0]}</button>
						<button onClick={this.langChange}>{this.props.lang[1]}</button>
					</div>
				</header>
				<main>
					<div className='m-person'>
						<button>
							{this.state.name}
						</button>
						<button>
							Age {this.state.age}
						</button>
						<button>
							{this.state.sex}
						</button>
						<button>
							{this.state.race}
						</button>
					</div>
					<div className='m-characteristics'>
						<div className='m-special'></div>
						<div className='m-specialPoints'></div>
						<div className='m-status'></div>
						<div className='m-details'></div>
					</div>
					<div className='m-traits'></div>
					<div className='m-skills'></div>
					<div className='m-view'></div>
				</main>
			</section>
		)
	}
}

export default App