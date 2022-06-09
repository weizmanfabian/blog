import React, { useEffect, useState } from 'react';

import Post from '../components/Post';
import { getAllPost, getAllUsers } from '../data/api';

const HomeApp = ({ user }) => {

    const [numberLimit, setNumberLimit] = useState(10);
    const [posts, setPosts] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        firstAction()
    }, [])

    const firstAction = async () => {
        const { data } = await getAllPost(numberLimit)
        setPosts(data.data)
        setNewData(data.data)
    }

    const handleChange = e => {
        const { value } = e.target
        setBusqueda(value);
        filtrar(value);
    }

    const filtrar = (terminoBusqueda) => {
        var resultadosBusqueda = posts.filter((elemento) => {
            if (elemento.tags.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ) {
                return elemento;
            }
        });
        setNewData(resultadosBusqueda);
    }

    return (
        <>
            <div className='container'>
                <br />
                <div className="containerInput">
                    <input
                        className="form-control"
                        value={busqueda}
                        placeholder="Busqueda personalizada"
                        onChange={handleChange}
                    />
                </div>
                <br />
                <Post posts={newData} />
            </div>
        </>
    );
}

export default HomeApp;