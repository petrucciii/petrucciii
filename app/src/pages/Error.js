import React, {Component} from 'react';
import Header from '../components/header';
import Home  from '../components/home';
import Error from '../components/error';
import Footer from '../components/footerIt';

class Error extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Home/>
                <Error/>
                <Footer/>
            </div>
        )
    }
}


export default Error;
