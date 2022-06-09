

import React, { useState } from 'react';
import { login } from '../data/api';


const Login = ({ setUser }) => {

    const initialForm = {
        user: '',
        pass: ''
    }

    const [form, setForm] = useState(initialForm);
    const [loginStatus, setLoginStatus] = useState('');

    const handleChange = (e) => {
        const { value, name } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const submitLogin = async (e) => {
        e.preventDefault();
        let { msg, user } = await login(form)

        setLoginStatus(msg)
        if (!msg) {
            setUser(user)
            sessionStorage.data = JSON.stringify(user)
        }
    }


    return (

        <div className="container text-center">
            <div className="row">
                <div className="col-md-4" />
                <div className="col-md-4">
                    <main className="form-signin">
                        <img
                            src="/logo512.png"
                            alt=""
                            width="350"
                            className="d-inline-block align-text-top"
                        />
                        <form onSubmit={submitLogin}>
                            <hr />
                            <h1 className="h3 mb-3 fw-normal">Iniciar Sesión</h1>

                            <div className="form-floating">
                                <input
                                    type="email"
                                    className="form-control"
                                    value={form.user}
                                    name="user"
                                    onChange={handleChange}
                                    placeholder="example@example.com"
                                    required
                                />
                                <label htmlFor="user">Email</label>
                            </div>
                            <div className="form-floating">
                                <input
                                    type="password"
                                    className="form-control"
                                    value={form.pass}
                                    name="pass"
                                    onChange={handleChange}
                                    placeholder="Password"
                                    required
                                />
                                <label htmlFor="pass">Contraseña</label>
                            </div>

                            <button className="w-100 btn btn-lg btn-primary" type="submit">
                                Iniciar Sesión
                            </button>
                            <p className="mt-5 mb-3 text-muted">Weizman &copy; 2022</p>
                        </form>
                        <h1>{loginStatus}</h1>
                    </main>
                </div>
                <div className="col-md-4" />
            </div>
        </div>
    );
}

export default Login;