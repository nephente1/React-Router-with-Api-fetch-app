import React from 'react';
import ReactDOM from 'react-dom';
import Photos from './Photos.jsx';
import About from './About.jsx';
import Gallery from './Gallery.jsx';
import TextTyper from './TextTyper.jsx';

import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';
 
document.addEventListener('DOMContentLoaded', function(){
 
    class Home extends React.Component {
        render() {
            return (
				<div>
            	<TextTyper text = "Welcome to my React App!" />
            	
            	<p><img src="./images/react.png"></img>This is my first React.js application. I've used React Router to navigate the page. The content has been filled with API and fetch() method for showing the Pictures. And Webpack as a module bundler.</p>
					<p>There are some examples of presenting the API content. </p>
           	<p>Pictures have a source in the external api's. What it include?</p>
            	<p>
				<ul>
            	<li>We have a NASA picture of the day, that changes automaticly every day. </li>
					<li>Instagram photos of a User, content will be updated whe user add some next pictures to his own account on instagram. </li>
            	<li>A gallery of pictures, that have a source in my own built json included on the server.</li>
            	</ul></p>
			</div>
				)
        }
    }
 
	
	class Contact extends React.Component {
        render() {
            return <div>
            	<TextTyper text = "Contact" />
            	<p><a href="https://www.linkedin.com/in/katarzyna-polakowska/" target="_blank"><i className="fa fa-linkedin-square fa-5x"></i></a></p>
				<p>katarzynapol (at) vp.pl</p>
            </div>
        }
    }
   
 
    class Template extends React.Component {
        render() {
            const activeStyle = {
                backgroundColor:'green'
            };
 
            return (
                <div>
                   <div className="header">
                   	<div className="container">
                    	<p>React application with React Router</p>
                    	<ul>
                        	<li className="navEl"><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                        	<li className="navEl"><IndexLink to="/about" activeClassName="active">NASA - Picture of the Day</IndexLink></li>
                        	<li className="navEl"><IndexLink to="/photos" activeClassName="active">Instafeed</IndexLink></li>
                        	<li className="navEl"><IndexLink to="/gallery" activeClassName="active">Gallery</IndexLink></li>
                        	<li className="navEl"><IndexLink to="/contact" activeClassName="active">Contact</IndexLink></li>
                    	</ul>
					 </div>
                   </div>
 					<div className="container">
                    {this.props.children}
					</div>
                </div>
            )
        }
    }
 
 
    class App extends React.Component {
        render() {
            return (
                <Router history={hashHistory}>
                    <Route path='/' component={Template}>
                        <IndexRoute component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/photos' component={Photos} />
                        <Route path='/gallery' component={Gallery} />
                        <Route path='/contact' component={Contact} />
                    </Route>
                </Router>
            )
        }
    }
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
