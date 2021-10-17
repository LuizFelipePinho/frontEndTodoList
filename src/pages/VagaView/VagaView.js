import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Api from '../../api/api';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


const VagaView = (props) => {
    const _id = props.match.params.id;
    const [todo, setTodo] = useState({});
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    useEffect(() => {
        getTodoById()
    }, []);


    const getTodoById = async () => {
        const response = await Api.fetchGetById(_id)
        const result = await response.json();
        setTodo(result);
    }

    const handleDelete = async (evento) => {
        evento.preventDefault();
        const response = await Api.fetchDelete(_id);
        const result = await response.json();
        alert(result.message);
        props.history.push('/');
    }

    return(
        <div className="container">
            <div>
                <h2>{todo.titulo}</h2>
                <p>{todo.descricao}</p>
                <p>{todo.prazo}</p>
                <p>{todo.status}</p>


            <Link to={`/edit/${todo._id}`}> <button>Editar</button></Link>
            <button onClick={onOpenModal}>Excluir</button>
            </div>
        
            <Modal open={open} onClose={onCloseModal} center>
            <h2>Deseja realmente Excluir</h2>
            <button className="btn btn-danger" onClick={onCloseModal}>Não</button>
            <button className="btn btn-success" onClick={handleDelete}>Sim</button>
            </Modal>
        </div>
    )

}

export default VagaView;