import React, {Component} from 'react';
import Header from '../components/header';
import Home  from '../components/home';
import Error from '../components/error';
import FooterIt from '../components/footerIt';

class Error404 extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Home/>
                <Error/>
                <FooterIt/>
            </div>
        )
    }
}


export default Error404;
