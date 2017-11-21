import React from 'react';
import TextTyper from './TextTyper.jsx';


class Gallery extends React.Component {
        constructor(props){
			super(props);
			this.state = {
				images: null, //[]
				page: 0
			}
		}
		
		componentDidMount(){
//			this.loadData();			
			fetch('https://api.myjson.com/bins/hdp1z')
			.then( resp => resp.json() )
			.then( img => this.setState({ 
				images: img 
			}) )
			.catch( e => console.log(e) );
		}
	
//		loadData = () => {
//			let page = this.state.page + 1;			
//			fetch('https://api.myjson.com/bins/hdp1z/items?_page='+page+'&_limit=6')
//			.then( resp => resp.json() )
//			.then( img => {
//				let stateImages = [...this.state.images, ...img];
//				
//				this.setState({ 
//					images: stateImages ,
//					page: page
//				}) 
//			})
//			.catch( e => console.log(e) );
//		}
		
		render(){
			if(this.state.images === null) {
				return null;
			}
			console.log(this.state.images);
			let gallery = this.state.images.items.map( el => <li><img src={el.url}/></li>);
			
			return <div>
				<div className="clearfix">
			<TextTyper text = "Watch the gallery of images from self-made Json" />
				
				<ul className="gallery">
					{gallery}
				</ul>
			</div>
			<button onClick={this.loadData}>loadMore</button>
			</div>
		}
    }
													 
module.exports = Gallery;													 