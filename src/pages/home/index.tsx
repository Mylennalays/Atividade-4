import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div>
           <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum assumenda distinctio ullam in facere impedit nam, odio libero blanditiis. Aut nostrum quam consectetur eum placeat recusandae voluptas, quis consequuntur eligendi!</p>
            <Link to="/sobre">Sobre</Link> <br />
            <Link to="/contato">contato</Link> <br />
            <Link to="/tarefa">tarefa</Link> <br />
        </div>
    )
}