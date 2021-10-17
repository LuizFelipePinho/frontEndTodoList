import React from "react";
import { Link } from "react-router-dom";
import './card.css'

const Card = (props) => {
    const todo = props.data

    return (
        <div>
            <Link to={`/view/${todo._id}`}>
            <div className="card">
                <h4>{todo.titulo}</h4>
                <p>{todo.prazo}</p>
                <p>{todo.status}</p>
            </div>
            </Link>
        </div>
    )
}

export default Card;