import React, { Component  } from "react";



class Client extends Component {

    renderLista = () =>{
        const lista = fetch("http://localhost:50317/api/client/AllClients").then(res => {
            console.log(res);
        }).catch(Error =>{
            
        });

    }
    

    
    render() {
        return(<div>            
            {this.renderLista()}
        </div>)

    }

    
}

export default Client