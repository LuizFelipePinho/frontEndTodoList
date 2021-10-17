import React from 'react';
import './Cadastro.css';
import Api from '../../api/api.js';

const Cadastro = (props) => {
    const history = props.history;

    const handleSubmit = async (evento) => {
        evento.preventDefault();

        const titulo = evento.target.titulo.value;
        const descricao = evento.target.descricao.value; 
        const prioridade = evento.target.prioridade.value;
        const status = evento.target.status.value;
        const prazo = evento.target.prazo.value;

        const todo = {
            titulo,
            descricao,
            prioridade,
            status,
            prazo
        }

        try {
            const response = await Api.fetchPost(todo);
            const result = await response.json();
            alert(result.message)
            history.push('/')
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <div className="view-container">
            <form className="formulario" onSubmit={handleSubmit}>
                <h3 className="tituloAdicionaFilme">Adicione uma nova tarefa</h3>             
                <input type="text" name="titulo" placeholder="titulo" className="inputUser"/>  
                <input type="text" name="descricao" placeholder="descricao" className="inputUser"/>  
                <input type="text" name="prioridade" placeholder="prioridade" className="inputUser"/>  
                <input type="text" name="status" placeholder="status" className="inputUser"/>
                <input type="text" name="prazo" placeholder="prazo" className="inputUser"/>  
                <button className="botao-enviar" type="submit" >Enviar</button>
            </form>

        </div>
    )
}
export default Cadastro
