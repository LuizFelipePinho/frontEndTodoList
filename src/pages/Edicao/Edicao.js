import React, { useEffect, useState} from "react";
import Api from "../../api/api";
import './edicao.css'

const Edicao = (props) => {
    const _id = props.match.params.id;
    const history = props.history;

    const [todo, setTodo ] = useState({});

    useEffect( () => {
        getTodoById()
    }, []);

    const getTodoById = async () => {
        const response = await Api.fetchGetById(_id);
        const result = await response.json();
        setTodo(result);
    }

// pega os input e atribui aos seus values os respesctivos valores que foram puxados do banco

    const handleFieldsChange = (event) => {
        const campos = {
            ...todo
        };

        //atualiza o estado do obj
        campos[event.target.name] = event.target.value;
        setTodo(campos)
    }

    const handleSubmit = async (evento) => {
        evento.preventDefault();

        const todoObj = {
            ...todo
        };

        try {
            const response = await Api.fetchPut(todoObj, _id);
            const result = await response.json();
            history.push("/");
        }catch (erro) {
            console.log(erro)
        }
    }

    return (
        <div className="edit-container">
            <form onSubmit={handleSubmit} className="formulario">
                <h3 className="tituloAdicionaFilme">Adicione um filme assistido</h3>             
                <input type="text" name="titulo" placeholder="titulo" onChange={handleFieldsChange} className="inputUser"/>  
                <input type="text" name="descricao" placeholder="descricao" onChange={handleFieldsChange} className="inputUser"/>  
                <input type="text" name="prioridade" placeholder="prioridade" onChange={handleFieldsChange} className="inputUser"/>  
                <input type="text" name="status" placeholder="status" onChange={handleFieldsChange} className="inputUser"/>
                <input type="text" name="prazo" placeholder="prazo" onChange={handleFieldsChange} className="inputUser"/>  
                <button className="botao-enviar" type="submit">Enviar</button>
            </form>

        </div>
    )


}

export default Edicao
