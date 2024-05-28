import { Link } from "react-router-dom";

export default function Tarefa(){
    return(
        <> 
        <ul>
            <li> Tarefa 1</li>
            <li> Tarefa 2</li>
            <li> Tarefa 3</li>
            <li> Tarefa 4</li>
            </ul>  
            <Link to='/'> Home </Link>
        </>
    )
}