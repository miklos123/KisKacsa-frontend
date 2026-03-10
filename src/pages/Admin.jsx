import "../App.css";

export default function Admin() {
    return (
        <div className="container">
            <h1>Admin</h1>
            <hr />
            <form className="login-form">
                <div className="form-row">
                    <label>E-mail:</label>
                    <input type="email" />
                </div>
                <div className="form-row">
                    <label>Jelszó:</label>
                    <input type="password" />
                </div>
                <button type="submit">Bejelentkezés</button>
            </form>
        </div>
    );
}