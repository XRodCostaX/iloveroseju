const RegisterUser = () => {
    return (
        <div className="register-container">
            <form action="" method="post">
                <label htmlFor="name">
                    <span>Nome:</span>
                    <input type="text" className="form-register name" />
                </label>
                <label htmlFor="email">
                    <span>E-mail</span>
                    <input type="email" className="form-register email" />
                </label>

                <label htmlFor="company">
                    <span>Escola</span>
                    <input type="text" className="form-register company" />
                </label>
                <label htmlFor="password">
                    <span>Senha</span>
                    <input type="password" className="form-register password" />
                </label>
                <label htmlFor="password2">
                    <span>Repita a senha</span>
                    <input
                        type="password"
                        className="form-register password2"
                    />
                </label>
                <input type="submit" className="form-register submit" />
            </form>
        </div>
    );
};

export default RegisterUser;
