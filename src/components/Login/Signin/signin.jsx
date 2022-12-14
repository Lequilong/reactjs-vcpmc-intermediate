import React from 'react'
import './index.css'
import './GridCss/grid.css'
import logo from './Logo/logo.jpg'
import '@fortawesome/fontawesome-free/css/all.min.css';


function Login() {
    return (
        <div className='main '>
            <div className='header grid wide'>
                <div className='Language'>
                    <h2>Tiếng Việt</h2>
                    <div className='Language_iconStaff'>
                        <i class="fa-sharp fa-solid fa-star star"></i>
                    </div>
                    <div className='Language_iconbutton'>
                        <i class="fa-solid fa-chevron-down down"></i>
                    </div>
                </div>

                <div className="header_logo">
                    <img src= {logo} alt={logo} className = 'header_logo_vcpmc'/>
                </div>

                <div className="header_signin">
                    <h2>Đăng Nhập</h2>

                    <div className="header_signin_username">
                        <h3>Tên Đăng Nhập</h3>
                        <input type="text" className='header_signin_username_1'/>                    
                    </div>

                    <div className="header_signin_passwork">
                        <h3>Passwork</h3>
                        <input type="password" className='header_signin_username_2'/>
                    </div>
                </div>

                <div className="header_signin_rememberpassword">
                    <input type="checkbox" name="" value={"rememberpasswork"} className='header_signin_rememberpassword_checkbox' />Ghi Nhớ Mật Khẩu
                   
                </div>
                <div>
                    <button className='btndangnhap'>Đăng Nhập</button>
                </div>
               <div className="footer_forgotpassword">
                    <a href="0">Quên Mật Khẩu ?</a>
               </div>
            </div>
        </div>
    )
}

export default Login;