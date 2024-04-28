import { Fade } from 'react-awesome-reveal';

const Contact = () => {
  
    return ( 
        <div className="contact-wrapper">
            <Fade direction="up">
                <div className="contact">
                <span className="title">~ contact</span>
                    <div className='contact-texts'>
                        <span className="main-title" style={{fontWeight: '700'}}>contact me!</span>
                        <span className='subtitle' style={{fontSize: '27px'}}>Let's <span className="orange">create</span> something together.</span>
                        <div className='contact-button'>
                            <a style={{fontWeight: '700'}} href="mailto:hugofolloni@gmail.com?subject=Let's create something together!&body=Hi, I visited your portfolio website and I want to contact you.">Reach me!</a>
                        </div>
                        <div className="contact-button-background"></div>
                    </div>
                </div>
            </Fade>
        </div>
     );
}
 
export default Contact;