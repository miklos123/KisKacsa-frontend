import { useState } from "react";
import "../App.css";
import { useNavigate, Link } from "react-router-dom";
import { login } from '../api'
import InputMezo from "../components/inputMezo";
import FeketeGomb from "../components/Gomb";


export default function Admin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [psw, setPsw] = useState("")

    const [hiba, setHiba] = useState('')
    const [uzenet, setUzenet] = useState('')

    async function onLogin() {
        setHiba('')
        setUzenet('')

        if (!email || !psw) {
            return setHiba('Minden mezőt tölts ki!')
        }
        try {
            const data = await login(email, psw)
            console.log(email, psw);
            if (data.error) {
                return setHiba(data.error)
            }
            setUzenet(data.message)
            setTimeout(() => navigate('/Adminpanel'))
        } catch (err) {
            return setHiba('Nem sikerült kapcsolódni a backendhez.')
        }
    }

    return (
        <div className="container">
            <h1>Admin</h1>
            <hr />
            <div className="login-form">
                <div className="form-row">
                    <InputMezo label='E-mail' type='email' value={email} setValue={setEmail} placeholder='example@example.com' />
                </div>
                <div className="form-row">
                    <InputMezo label='Jelszó' type='password' value={psw} setValue={setPsw} placeholder='********' />
                </div>
                <FeketeGomb szin='btn btn-dark px-4' text='Bejelentkezés' onClick={onLogin} />
            </div>

            {hiba && <div className="alert alert-danger text-center my-2">{hiba}</div>}
            {uzenet && <div className="alert alert-success text-center my-2">{uzenet}</div>}
        </div>
    );
}