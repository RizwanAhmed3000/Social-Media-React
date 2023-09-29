import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h1 className="loginTitle">SocialMedia</h1>
                    <p className="tagline">This is the tag line of SocialMedia</p>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="email" placeholder="Email" className="loginInput"/>
                        <input type="password" placeholder="Password" className="loginInput" />
                        <button className="loginBtn">Log in</button>
                        <button className="signupBtn">Create new account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
