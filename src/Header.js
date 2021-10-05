import { HashLink } from 'react-router-hash-link';
import brFlag from "./assets/brFlag.png"
import uksFlag from "./assets/uksFlag.png"

const Header = () => {    
    return ( 
        <div className="header">
            <div className="left">
                <HashLink className='page-title' smooth to='/#home'><h3>hugofolloni</h3></HashLink>
            </div>
            <div className="right">
                <HashLink smooth to='/#skills'>Skills</HashLink>
                <HashLink smooth to="/#works">Works</HashLink>
                <HashLink smooth to="/#contact">Contato</HashLink>
                <a href='/english'><img src={ uksFlag } alt="" /></a>
            </div>
        </div>
     );
}


// // // // // // //


const EnHeader = () => {    
    return ( 
        <div className="header">
            <div className="left">
                <HashLink className='page-title' smooth to='/#home'><h3>hugofolloni</h3></HashLink>
            </div>
            <div className="right">
                <HashLink smooth to='#skills'>Skills</HashLink>
                <HashLink smooth to="#works">Works</HashLink>
                <HashLink smooth to="#contact">Contact</HashLink>
                <a href='../'><img src={ brFlag } alt="" /></a>
            </div>
        </div>
     );
}
 
export { Header, EnHeader };


