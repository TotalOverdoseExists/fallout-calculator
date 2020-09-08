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
					{/*<div className='m-person'>
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
					<div className='m-view'></div>*/}
					<div style={{float:'left',width:'50%'}}>
						<div style={{float:'left',width:'100%'}}>
							<button style={{width:'25%'}}>NAME</button>
							<button style={{width:'25%'}}>AGE</button>
							<button style={{width:'25%'}}>SEX</button>
							<button style={{width:'25%'}}>RACE</button>
						</div>
						<div style={{float:'left',width:'50%'}}>
							<span style={{display:'block'}}>ST - <input style={{width:'50%'}} type="number" value="5"/></span>
							<span style={{display:'block'}}>PE - <input style={{width:'50%'}} type="number" value="5"/></span>
							<span style={{display:'block'}}>EN - <input style={{width:'50%'}} type="number" value="5"/></span>
							<span style={{display:'block'}}>CH - <input style={{width:'50%'}} type="number" value="5"/></span>
							<span style={{display:'block'}}>IN - <input style={{width:'50%'}} type="number" value="5"/></span>
							<span style={{display:'block'}}>AG - <input style={{width:'50%'}} type="number" value="5"/></span>
							<span style={{display:'block'}}>LK - <input style={{width:'50%'}} type="number" value="5"/></span>
							<div style={{float:'left',width:'100%'}}>
								<span>CHAR POINTS <input style={{width:'20%'}} type="text" value="5"/></span>
							</div>
						</div>
						<div style={{float:'left',width:'50%'}}>
							<span style={{display:'block'}}>Hit points 33/33</span>
							<span style={{display:'block'}}>Poisoned</span>
							<span style={{display:'block'}}>Radiated</span>
							<span style={{display:'block'}}>Eye damage</span>
							<span style={{display:'block'}}>Crippled Right Arm</span>
							<span style={{display:'block'}}>Crippled Left Arm</span>
							<span style={{display:'block'}}>Crippled Right Leg</span>
							<span style={{display:'block'}}>Crippled Left Leg</span>
						</div>
						<div style={{float:'left',width:'50%'}}>
							<span style={{display:'block'}}>Armor Class 6</span>
							<span style={{display:'block'}}>Action Points 8</span>
							<span style={{display:'block'}}>Carry Weight 175</span>
							<span style={{display:'block'}}>Melee Damage 1</span>
							<span style={{display:'block'}}>Damage Res. 0%</span>
							<span style={{display:'block'}}>Poison Res. 30%</span>
							<span style={{display:'block'}}>Radiation Res. 12%</span>
							<span style={{display:'block'}}>Sequence 12</span>
							<span style={{display:'block'}}>Healing Rate 2</span>
							<span style={{display:'block'}}>Critical Chance 6%</span>
						</div>
						<div style={{float:'left',width:'100%'}}>
							<h2>OPTIONAL TRAITS</h2>
							<div style={{float:'left',width:'50%'}}>
								<span style={{display:'block'}}><input type="checkbox" checked/>Fast Metabolism</span>
								<span style={{display:'block'}}><input type="checkbox" checked/>Fast Metabolism</span>
								<span style={{display:'block'}}><input type="checkbox" checked/>Fast Metabolism</span>
								<span style={{display:'block'}}><input type="checkbox" checked/>Fast Metabolism</span>
								<span style={{display:'block'}}><input type="checkbox" checked/>Fast Metabolism</span>
								<span style={{display:'block'}}><input type="checkbox" checked/>Fast Metabolism</span>
								<span style={{display:'block'}}><input type="checkbox" checked/>Fast Metabolism</span>
								<span style={{display:'block'}}><input type="checkbox" checked/>Fast Metabolism</span>
							</div>
							<div style={{float:'left',width:'50%',textAlign:'right'}}>
								<span style={{display:'block'}}>Fast Metabolism<input type="checkbox" checked/></span>
								<span style={{display:'block'}}>Fast Metabolism<input type="checkbox" checked/></span>
								<span style={{display:'block'}}>Fast Metabolism<input type="checkbox" checked/></span>
								<span style={{display:'block'}}>Fast Metabolism<input type="checkbox" checked/></span>
								<span style={{display:'block'}}>Fast Metabolism<input type="checkbox" checked/></span>
								<span style={{display:'block'}}>Fast Metabolism<input type="checkbox" checked/></span>
								<span style={{display:'block'}}>Fast Metabolism<input type="checkbox" checked/></span>
								<span style={{display:'block'}}>Fast Metabolism<input type="checkbox" checked/></span>
							</div>
						</div>
					</div>
					<div style={{float:'right',width:'50%'}}>
						<h2>SKILLS</h2>
						<span style={{display:'block'}}><input type="checkbox" checked/>Small Guns</span>
						<span style={{display:'block'}}><input type="checkbox" checked/>Small Guns</span>
						<span style={{display:'block'}}><input type="checkbox" checked/>Small Guns</span>
						<span style={{display:'block'}}><input type="checkbox" checked/>Small Guns</span>
						<span style={{display:'block'}}><input type="checkbox" checked/>Small Guns</span>
						<span style={{display:'block'}}><input type="checkbox" checked/>Small Guns</span>
						<span style={{display:'block'}}><input type="checkbox" checked/>Small Guns</span>
						<span style={{display:'block'}}><input type="checkbox" checked/>Small Guns</span>
						<span style={{display:'block'}}><input type="checkbox" checked/>Small Guns</span>
						<span style={{display:'block'}}><input type="checkbox" checked/>Small Guns</span>
						<span style={{display:'block'}}><input type="checkbox" checked/>Small Guns</span>
						<span style={{display:'block'}}><input type="checkbox" checked/>Small Guns</span>
						<span style={{display:'block'}}><input type="checkbox" checked/>Small Guns</span>
						<span style={{display:'block'}}><input type="checkbox" checked/>Small Guns</span>
						<span style={{display:'block'}}><input type="checkbox" checked/>Small Guns</span>
						<span style={{display:'block'}}><input type="checkbox" checked/>Small Guns</span>
						<span style={{display:'block'}}><input type="checkbox" checked/>Small Guns</span>
						<span style={{display:'block'}}><input type="checkbox" checked/>Small Guns</span>
						<span style={{display:'block'}}><input type="checkbox" checked/>Small Guns</span>
						<span style={{display:'block'}}><input type="checkbox" checked/>Small Guns</span>
					</div>
				</main>
			</section>
		)
	}
}

export default App