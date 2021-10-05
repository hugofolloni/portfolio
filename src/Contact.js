import github from "./assets/github.svg"
import instagram from "./assets/instagram.svg"
import twitter from "./assets/twitter.svg"
import linkedin from "./assets/linkedin.svg"


const Contact = () => {

    // const handleSubmit = () => {
    //     var transporter = nodemailer.createTransport({
    //         service: 'gmail',
    //         auth: {
    //           user: 'hugofollonidev@gmail.com',
    //           pass: process.env.PASSWORD
    //         }
    //       });
      
    //       var mailOptions = {
    //         from: 'hugofollonidev@gmail.com',
    //         to: data.email,
    //         subject: 'My portfolio website is working now!',
    //         text: 'Essa é somente uma mensagem de testes, no futuro isso funcionará de verdade!'
    //       };
      
    //       transporter.sendMail(mailOptions, function(error, info){
    //         if (error) {
    //           console.log(error);
    //         } else {
    //           console.log('Email sent to ' + data.email + ':' + info.response);
    //         }
    //       });
    // }

    return ( 
        <div className="content" id='contact'>
            <div className="title">
                <h2>CONTACT</h2>
            </div>
            <div className="social-medias">
                <h3>Reach me on social medias</h3>
                <div className="social-medias-links">
                    <a href="https://github.com/hugofolloni"><img src={ github } alt="gh"/></a>
                    <a href="https://linkedin.com/in/hugofolloni"><img src={ linkedin } alt="gh"/></a>
                    <a href="https://twitter.com/hugofolloni"><img src={ twitter } alt="gh"/></a>
                    <a href="https://instagram.com/hugofolloni"><img src={ instagram } alt="gh"/></a>
                </div>
            </div>
            <div className="form">
                <h3>Or send me an email</h3>
                <div className="name-div">
                    <h4>Your name</h4>
                    <input type="text" placeholder='Name'/>
                </div>
                <div className="email-div">
                    <h4>Your email</h4>
                    <input type="text" placeholder='Email'/>
                </div>
                <div className="text-div">
                    <h4>Your message</h4>
                    <textarea placeholder='Message' cols="30" rows="10"></textarea>
                </div>
                <div className="button-div">
                    <button className='submit-button'>Submit</button>
                </div>
            </div>
        </div> 
    );
}
 
export default Contact;