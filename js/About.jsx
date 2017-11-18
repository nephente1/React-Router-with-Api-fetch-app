import React from 'react';
import TextTyper from './TextTyper.jsx';

class About extends React.Component {
			constructor(props){
			super(props);
			this.state = {
				nasaPhoto: null
			}
		}
		
		componentDidMount(){
			
			fetch("https://api.nasa.gov/planetary/apod?api_key=vqpH3QwgVVGGcY9RTYorPjP9R5cC9nZKniaSbhtT")
			.then( resp => resp.json() )
			.then( el => this.setState({ 
				nasaPhoto: el
			}) )
			.catch( e => console.log(e) );
		}
		
		render(){
			if(this.state.nasaPhoto === null) {
				return null;
			}
			console.log(this.state.nasaPhoto.url+"tu");
			
			return (<div>
			<TextTyper text = "NASA: Photo of the Day" />
				<p>Get some cosmic inspiration for every day...</p>
				<div><img src={this.state.nasaPhoto.url} /></div>	
				
			</div>
				)
		}
    }
            	
            	
            	

module.exports = About;