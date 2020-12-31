import React, { Component } from 'react';

import Menu from './componentes/Menu'
import BoasVindas from './componentes/BoasVindas'
import Bio from './componentes/Bio'

class App extends Component {
    render() {
        return(
            <div>
                <Menu/>
                <BoasVindas/>
                <Bio/>
            </div>
        )
    }
}

export default App;