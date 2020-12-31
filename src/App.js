import React, { Component } from 'react';

import Menu from './componentes/Menu'
import BoasVindas from './componentes/BoasVindas'
{/*import Rodape from './componentes/Rodape'*/}

class App extends Component {
    render() {
        return(
            <div>
                <Menu/>
                <BoasVindas/>
                {/*<Rodape/>*/}
            </div>
        )
    }
}

export default App;