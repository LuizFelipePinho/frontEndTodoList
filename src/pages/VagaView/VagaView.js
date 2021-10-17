import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Api from '../../api/api';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './VagaView.css'


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
        <div className="container-view">
            <div className="box-view">
                <h2 className="titulo-view">{todo.titulo}</h2>
                <p className="descricao-view">{todo.descricao}</p>
                <p className="prazo-view">{todo.prazo}</p>
                <p className="titulo-view">{todo.status}</p>

                <div className="options">
                    <Link to={`/edit/${todo._id}`}> <button className="editar-view">Editar</button></Link>
                    <button onClick={onOpenModal} className="excluir-view">Excluir</button>
                </div>
            </div>
        
            <Modal open={open} onClose={onCloseModal} center>
            <h2 className="modal-msg">Deseja realmente Excluir</h2>
            <button className="modal-not" onClick={onCloseModal}>Não</button>
            <button className="modal-yep" onClick={handleDelete}>Sim</button>
            </Modal>
        </div>
    )

}

export default VagaView;