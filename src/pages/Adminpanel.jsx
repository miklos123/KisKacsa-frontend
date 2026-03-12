import { logout } from '../api'
import FeketeGomb from "../components/Gomb"


import Ételek from "../pages/Ételek"
import Desszertek from "../pages/Desszertek"
import Italok from "../pages/Italok"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";

export default function Adminpanel(){
    const navigate = useNavigate();
    async function onLogout() {
        const data = await logout()
        if(data.error) {
            return setErrorUser(data.error)
        }
        navigate('/')
    }

    async function handleClick() {
        navigate('/')
    }
    
    return (
        <div className="admin-container">
    
            <header className="navbar">
                <h1>Admin</h1>
                <FeketeGomb szin='btn btn-dark px-4' text='Kijelentkezés' onClick={onLogout} />
            </header>
    
            <div className="menu-buttons">
                <Link className='button' to='/etelek'>Ételek</Link>
                <Link className='button' to='/italok'>Italok</Link>
                <Link className='button' to='/desszertek'>Desszertek</Link>
            </div>
        </div>
    )
}