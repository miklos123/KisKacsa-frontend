import { useState } from "react";
import "../App.css";
import { loginAdmin } from "../api";
import { useNavigate } from "react-router-dom";

export default function Admin() {
    const [email, setEmail] = useState("")
    const [Jelszo, setJelszo] = useState("")
    const navigation = useNavigate();
    return (
        <div className="container">
            <h1>Admin</h1>
            <hr />
            <div className="login-form">
                <div className="form-row">
                    <label>E-mail:</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="form-row">
                    <label>Jelszó:</label>
                    <input type="password" value={Jelszo} onChange={(e)=>setJelszo(e.target.value)}/>
                </div>
                <button onClick={async()=>{
                    console.log(email, Jelszo);
                    //const data = await loginAdmin(email, jelszo)
                    // megfelelő érték érkezett-e, azaz bejektnekzett-e
                    // ha nem --> hibaüzenet
                    // ha igen --> akkor sikerességről üzi
                    // és navigálás --> adminpanel --> navigation("/admin-panel")
                }}>Bejelentkezés</button>
            </div>
        </div>
    );
}