import React from 'react';
import insta from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
const Footer = () => {
    return (
        <div className="w-full  my-10 lg:px-20 h-36">
            <div className="lg:border-2 h-full flex justify-evenly  items-center  lg:shadow-lg">
               
                <a className="hover:shadow-lg  rounded-md" href="https://www.linkedin.com/in/alok-yadav-00173718a/">
                    <img className="h-10 w-10 rounded-sm" src={linkedin} alt="instagram" />
                </a>
                <a className="hover:shadow-lg  rounded-md" href="https://github.com/ALOK9821">
                    <img className="h-10 w-10 rounded-sm" src={github} alt="instagram" />
                </a>
            </div>
        </div>
    );
}

export default Footer
