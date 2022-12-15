import React from 'react'
import './index.css'
import '../GridCss/grid.css'
import logo from '../Logo/logo.jpg'
import avatar from '../Logo/avt.jpg'
import avatar1 from '../Logo/avt2.jpg'
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
                                <img src= {avatar} alt={avatar} className = 'images_user'/>
                            </div>
                            <div className="personinformation_username">
                                <h3 className='user_name-custom'>Ng.Tuyết</h3>
                                <h3 className='admin'>Admin</h3>
                            </div>
                        </div>
                    </div>
                    <div className="personinformation_content">
                        <div className="personinformation_content-images l-3">
                            <h2 className='personinformation_content-title'>Thông Tin Cơ Bản</h2>
                            <div className="personinformation_content-images-icon">
                                <img src= {avatar1} alt={avatar1} className = 'images_avt'/>
                                <i class="fa-solid fa-camera icons-camera"></i>
                            </div>
                            <h2 className='personinformation_content-username'>Tuyết Nguyễn</h2>
                        </div>
                        <div className="personinformation_content-curriculumvitae l-6">
                            <div className="personinformation_content-curriculumvitae-listname row">
                                <div className="personinformation_content-curriculumvitae-listname-firtsname">
                                    <h3 className='firtsname'>Họ : </h3>
                                    <input type="text" placeholder='Nhập Họ' className='input-information'/>
                                </div>
                                <div className="personinformation_content-curriculumvitae-listname-lastname">
                                    <h3 className='lastname'>Tên : </h3>
                                    <input type="text" placeholder='Nhập Tên'className='input-information'/>
                                </div>
                            </div>
                            <div className="personinformation_content-curriculumvitae-listname row">
                                <div className="personinformation_content-curriculumvitae-listname-firtsname">
                                    <h3 className='firtsname'>Ngay Sinh : </h3>
                                    <input type="text" placeholder='Nhập Họ' className='input-information'/>
                                </div>
                                <div className="personinformation_content-curriculumvitae-listname-lastname">
                                    <h3 className='lastname'>SĐT : </h3>
                                    <input type="text" placeholder='Nhập Tên'className='input-information'/>
                                </div>
                            </div>
                            <div className="personinformation_content-curriculumvitae-email">
                                <h3 className='curriculumvitae-h3-email'>Nhập Email : </h3>
                                <input type="text" placeholder='Nhập email'className='input-email'/>
                            </div>

                            <div className="personinformation_content-curriculumvitae-email">
                                <h3 className='curriculumvitae-h3-email'>Tên Đăng Nhập : </h3>
                                <input type="text" placeholder='Nhập Tên Đăng Nhập'className='input-email'/>
                            </div>

                            <div className="personinformation_content-curriculumvitae-email">
                                <h3 className='curriculumvitae-h3-email'>Phần Quyết : </h3>
                                <input type="text" placeholder='Nhập Tên Đăng Nhập'className='input-phanquyet'/>
                            </div>

                        </div>
                        <div className="personinformation_content-menu l-3">

                        </div>
                    </div>
                    <div className="personinformation_footer">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalInformation;