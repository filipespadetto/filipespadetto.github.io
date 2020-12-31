import React from 'react'
import { Alert } from 'react-bootstrap'

function Bio() {
    return(
        <Alert variant="dark" className="ml-5 mr-5">
            <Alert.Heading>Um pouco sobre mim 🖖</Alert.Heading>
            <hr></hr>
            <p>
                Sou capixaba com muito orgulho, apaixonado pela programação, tecnologia, 
                e os resultados que ela traz no cotidiano da sociedade. Gosto de desenvolver projetos e aprender com eles.
                Atualmente estou me dedicando ao RPA - Robotic Process Automation 🤖... automatizando processos repetitivos
                e robóticos tornando minha vida menos rotineira, podendo fazer o que os robôs não fazem. Também estudo algumas
                linguagens que estão em ascenção no mercado, mesclando o front-end com o back-end 💻.
            </p>
        </Alert>
    );
}

export default Bio