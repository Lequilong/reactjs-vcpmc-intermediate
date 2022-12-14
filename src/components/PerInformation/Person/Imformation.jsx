import React from 'react'
import './index.css'
import '../GridCss/grid.css'
import logo from '../Logo/logo.jpg'
import '@fortawesome/fontawesome-free/css/all.min.css';


function PersonalInformation() {
    return (
        <div className='main'>
            <div className="imformation">
                <div className="menu_bar l-1">
                    <div className="menu_bar_logo">
                        <img src= {logo} alt={logo} className = 'logo_vcpmc'/>
                    </div>

                    <div className="menu_bar_list">
                        <ul className="menu_bar_list_ul">
                            <li className="menu_bar_list_li"> 
                                <div className="menu_bar_list_li-freme">
                                    <i class="fa-solid fa-warehouse"></i>
                                    <h2 className="menu_bar-ware">Kho Ban Ghi</h2>
                                </div>
                            </li>
                            <li className="menu_bar_list_li"> 
                                <div className="menu_bar_list_li-freme">
                                    <i class="fa-solid fa-list"></i>
                                    <h2 className="menu_bar-ware">Phaylist</h2>
                                </div>
                            </li>
                            <li className="menu_bar_list_li"> 
                                <div className="menu_bar_list_li-freme">
                                    <i class="fa-solid fa-calendar-days"></i>
                                    <h2 className="menu_bar-ware">Lập lịch phát</h2>
                                </div>
                            </li>
                            <li className="menu_bar_list_li"> 
                                <div className="menu_bar_list_li-freme">
                                    <i class="fa-solid fa-file-contract"></i>
                                    <h2 className="menu_bar-ware">Quản lý</h2>
                                </div>
                            </li>
                            <li className="menu_bar_list_li"> 
                                <div className="menu_bar_list_li-freme">
                                    <i class="fa-solid fa-sack-dollar"></i>
                                    <h2 className="menu_bar-ware">Doanh thu</h2>
                                </div>
                            </li>
                            <li className="menu_bar_list_li"> 
                                <div className="menu_bar_list_li-freme">
                                    <i class="fa-solid fa-gear"></i>
                                    <h2 className="menu_bar-ware">Cài đặt</h2>
                                </div>
                            </li>
                            <li className="menu_bar_list_li"> 
                                <div className="menu_bar_list_li-freme">
                                    <i class="fa-regular fa-circle-question"></i>
                                    <h2 className="menu_bar-ware">Hổ trợ</h2>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            
                <div className="personinformation l-11">
                    <div className="personinformation_header">
                        <div className='Language'>
                            <h2>Tiếng Việt</h2>
                            <div className='Language_iconStaff'>
                                <i class="fa-sharp fa-solid fa-star star"></i>
                            </div>
                            <div className='Language_iconbutton'>
                                <i class="fa-solid fa-chevron-down down"></i>
                            </div>
                        </div>
                        <div className="personinformation_user">
                            <div className="personinformation_user-images">
                                <img src= {logo} alt={logo} className = 'images_user'/>
                            </div>
                            <div className="personinformation_username">
                                <h3 className='user_name-custom'>Ng.Tuyết</h3>
                                <h3 className='admin'>Admin</h3>
                            </div>
                        </div>
                    </div>
                    <div className="personinformation_content">
                        
                    </div>
                    <div className="personinformation_footer">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalInformation;