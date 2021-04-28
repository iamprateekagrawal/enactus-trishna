import React from 'react'

function Footer() {
    return(
        <footer>
            <div className="footer-head">Contact Us</div>
            <div className='handles'>
                <div className="set"><i className="fas fa-at"></i>&nbsp;</div>
                <div className="set"><i class="fab fa-instagram"></i>&nbsp;</div>
                <div className="set"><i class="fab fa-facebook-f"></i>&nbsp;</div>
                {/* <div className="set"><i className="fas fa-at"></i>&nbsp;mail@gmail.com</div>
                <div className="set"><i class="fab fa-instagram"></i>&nbsp;enactus_iitmadras</div>
                <div className="set"><i class="fab fa-facebook-f"></i>&nbsp;enactusiitm</div>
                <div className="set"><i class="fab fa-twitter-square"></i></div> */}
            </div>
            <div className="copyright"><i class="far fa-copyright"></i>2021. All Rights Reserved</div>
        </footer>
    )
}

export default Footer;