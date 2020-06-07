import React, {Component} from 'react';



import Header from '../Common/Header/Header';
import Body from '../Common/Body/Body';



class Home extends Component {
    render(){
        return(
			<div className="page">
                <Header />
                <Body />
            </div>
            
        )
    }
}

export default Home;