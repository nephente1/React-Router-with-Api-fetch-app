import React from 'react';
import TextTyper from './TextTyper.jsx';


class Gallery extends React.Component {
        constructor(props){
			super(props);
			this.state = {
				images: [],
				page: 0
			}
		}
		
		componentDidMount(){
			this.loadData();			
//			fetch('http://localhost:3000/items?_page=1&_limit=6')
//			.then( resp => resp.json() )
//			.then( img => this.setState({ 
//				images: img 
//			}) )
//			.catch( e => console.log(e) );
		}
	
		loadData = () => {
			let page = this.state.page + 1;			
			fetch('http://localhost:3000/items?_page='+page+'&_limit=6')
			.then( resp => resp.json() )
			.then( img => {
				let stateImages = [...this.state.images, ...img];
				
				this.setState({ 
					images: stateImages ,
					page: page
				}) 
			})
			.catch( e => console.log(e) );
		}
		
		render(){
			if(this.state.images === null) {
				return null;
			}
			
			let gallery = this.state.images.map( el => <li><img src={el.url}/></li>);
			
			return <div>
				<div className="clearfix">
			<TextTyper text = "Watch the gallery of images" />
				
				<ul className="gallery">
					{gallery}
				</ul>
			</div>
			<button onClick={this.loadData}>loadMore</button>
			</div>
		}
    }
													 
module.exports = Gallery;													 