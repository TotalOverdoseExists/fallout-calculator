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
						<div className='m-special'>
							<div>
								ST - <input type="number"/>
							</div>
							<div>
								PE - <input type="number"/>
							</div>
							<div>
								EN - <input type="number"/>
							</div>
							<div>
								CH - <input type="number"/>
							</div>
							<div>
								IN - <input type="number"/>
							</div>
							<div>
								AG - <input type="number"/>
							</div>
							<div>
								LK - <input type="number"/>
							</div>
						</div>
						<div className='m-specialPoints'>
							CHAR POINTS <input type="text"/>
						</div>
						<div className='m-status'>
							<span>Hit points 33/33</span>
							<span>Poisoned</span>
							<span>Radiated</span>
							<span>Eye damage</span>
							<span>Crippled Right Arm</span>
							<span>Crippled Left Arm</span>
							<span>Crippled Right Leg</span>
							<span>Cripples Left Leg</span>
						</div>
						<div className='m-details'>
							<span>Armor Class 6</span>
							<span>Action Points 8</span>
							<span>Carry Weight 175</span>
							<span>Melee Damage 1</span>
							<span>Damage Res. 0%</span>
							<span>Poison Res. 30%</span>
							<span>Radiation Res. 12%</span>
							<span>Sequence 12</span>
							<span>Heailng Rate 2</span>
							<span>Critical Chance 6%</span>
						</div>
					</div>
					<div className='m-traits'>
						<h2>Optional traits</h2>
					</div>
					<div className='m-skills'></div>
					<div className='m-view'></div>
				</main>
			</section>
		)
	}
}

export default App
