import Typical from 'react-typical'
import resume from '../Tejasresume.pdf';
import Footer from './Footer';
import './profile.css'
const Profile = () => {
    return (
        <>
        <div className="profile-container">
            
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <a href="https://www.facebook.com/tejasv.naidu" target="_blank">
                            <i className="fa fa-facebook-square"></i>
                        </a>

                        <a href="https://www.instagram.com/_tejastej/" target="_blank">
                            <i class="fa fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/tejas-v-9444b3112" target="_blank" >
                            <i className="fa fa-linkedin-square"></i>
                        </a>
                    </div>

                    <div className="profile-details-name">
                        <span className="primary-text">
                            Hello, I am <span className="highlighted-text">Tejas</span>
                        </span>
                    </div>

                    <div className="profile-details-row">
                        <span className="primary-text">
                            <h1>
                                <Typical
                                    loop={Infinity}
                                    steps={
                                        [
                                            "Front End developer 😇 ", 2000,
                                            "React developer 💻 ", 2000
                                        ]}
                                />
                            </h1>
                            <span className='profile-role-tagline' >
                                knack of building applications with frontend and backend
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className='btn primary-btn' >
                            Hire me
                        </button>
                        <a href={resume} download="resume" target="_blank"> 
                        <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                        
                    </div>
                  
                </div>
                <div className="profile-picture">
                <div className='profile-picture-background '>

                </div>


                        </div>
            </div>
            
        </div>
        <Footer/>
        </>
    );
}

export default Profile;