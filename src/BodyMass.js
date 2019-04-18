import React, { Component } from 'react';

class BodyMass extends React.Component {
	constructor(props) {
		super(props);

		this.CheckHeight = this.CheckHeight.bind(this);
		this.CheckWeight = this.CheckWeight.bind(this);
		this.Calculator = this.Calculator.bind(this);
		
		this.state = {
			resultHeight:'Это не реальный рост*',
			resultWeight:'Это не реальный вес*',
			result:''
		};
	}

    CheckHeight = function (height) {
		let value = height.target.value;
		

		if (value.search(/\D/g) == -1 && value.length >=2 && value.length <=3) {
			
			this.setState({
				resultHeight:'Это ваш рост'
			});
        }
		 else {
			
			this.setState( {
				resultHeight:'Введите ваш реальный рост'
			});

		}

	};

	CheckWeight = function (weight) {
		let value = weight.target.value;
		

		if (value.search(/\D/g) == -1 && value.length >=2 && value.length <=3) {
			
			this.setState({
				resultWeight:'Это ваш вес'
			});

		
		}
		 else {
			
			this.setState({
				resultWeight:'Введите ваш реальный вес'
			});

		}

	};

	showResult () {
		
		let height = document.querySelector('#result-height').value;
		 if (height == '') {
		 	 return 0;
		 }
		let weight = document.querySelector('#result-weight').value;
        
        let result = (weight/(height*height/10000));
        
       
       	

        document.querySelector('#calc').innerHTML += result.toFixed(2);     
	}

	

	Calculator = function (result) {
        

	}
    render() {
		return (
			<div className="body-mass">
				<h1>{this.props.children}</h1>
				<div className="main_bodymass">
					<p id="calc">Body Mass Index(BMI) = </p>
					<span className="BMI">{this.state.result}</span>
					<p>Height(cm)<input required id="result-height" onChange={this.CheckHeight}  type="text" name="height" /></p><i><span className="check_height">{this.state.resultHeight}</span></i>
					<p>Weight(kg)<input id="result-weight" required onChange={this.CheckWeight}  type="text" name="weight" /></p><i><span className="check_weight">{this.state.resultWeight}</span></i><br/>
				

					<button className="reset-btn" onClick={this.showResult}>Calculate</button>
					<button className="replay-btn" onClick={this.showReset}>Reset</button>
				</div>
			</div> 
		);
	}
}

export default BodyMass;
/*ReactDOM.render(
	<BodyMass>BMI Healthy Weight Calculator</BodyMass>,
	document.getElementById('app')
); */