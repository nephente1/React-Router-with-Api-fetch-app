import React from 'react';
import TextTyper from './TextTyper.jsx';


class Photos extends React.Component {
        constructor(props){
			super(props);
			this.state = {
				images: null
			}
		}
		
		componentDidMount(){
			const token = '4516295417.0de4b00.359624c4020f4190820a1cac42aa51b6';
			let hashtag = "cyclinglife";
			
			fetch("https://api.instagram.com/v1/users/self/media/recent/?access_token="+ token)
			.then( resp => resp.json() )
			.then( img => this.setState({ 
				images: img 
			}) )
			.catch( e => console.log(e) );
		}
		
		render(){
			if(this.state.images === null) {
				return null;
			}
			console.log(this.state.images.data[0]);
			let zdjecia = this.state.images.data.map( el => <li><img src={el.images.low_resolution.url} /></li>);
			
			return <div>
			<TextTyper text = "Checkout some photos from Instagram" />
				<ul className="instafeed" >
					{zdjecia}
				</ul>
			</div>
		}
    }
													 
module.exports = Photos;													 