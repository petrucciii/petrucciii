import React, {Component} from 'react';
import Header from '../components/header';
import Home  from '../components/home';
import Error from '../components/error';
import FooterIt from '../components/footerIt';

class Error404 extends Component{
    state = {
        footerIt: [
            {
              id: 5, 
              copyright: "Tutti i Diritti Riservati."
            }
        ],
    }
    render(){
        return(
            <div>
                <Header/>
                <Home/>
                <Error/>
                {this.state.footerIt.map(footer => (
                    <FooterIt
                        key={footer.id}
                        copyright={footer.copyright}
                    />
                ))}
            </div>
        )
    }
}


export default Error404;
