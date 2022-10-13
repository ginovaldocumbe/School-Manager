import React from 'react';
import styles from './Login.module.css';
import MainLogo from "../../components/AdminComp/Imagens/NewLogo2.png"
import BtnPrimaria from "../../components/AdminComp/Btn_primaria/Btn_primaria"
import MainImg from "../../components/AdminComp/Imagens/oluwakemi-solaja-ZN52ZBFkw4Y-unsplash.jpg"
import Admin from '../AdminPages/admin/admin';
import { Link } from "react-router-dom";
function Login() {
    return (
        <section className='h-screen overflow-hidden'>
            <div className={styles.MainLog}>
                <div className={styles.TamanhoImg}>
                    <img className="img-fluid" src={MainLogo} />
                </div>
                <h3>Login</h3>
                <div className={styles.Blr}></div>
                <form>
                    <div className={styles.Inputs}>
                        <span>E-mail</span>
                        <input type="email" id={styles["inp"]} className="form-control" />
                    </div>
                    <div className={styles.Inputs}>
                        <span>Senha</span>
                        <input type="password" id={styles["inp"]} className="form-control" />
                    </div>
                    <div className={styles.DivEsquecei}>
                        <a href="#x">Esquecei minha senha.</a>
                    </div>
                    {/* <Link to='/Professores/inicio'>   <BtnPrimaria funcao="Entrar" >Entrar</BtnPrimaria></Link> */}
                    <Link to='/admin/inicio'> <BtnPrimaria funcao="Entrar" >Entrar</BtnPrimaria></Link>

                </form>
            </div>
            <div className={styles.SlideLog}>
                <div className={styles.ImagemMain}>
                    <img id={styles["mainImg"]} className="img-fluid" src={MainImg} />
                </div>
            </div>
        </section>
    )
};


export default Login;
