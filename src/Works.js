import cityweather from "./assets/mygiftlist.ico";
import larhco from "./assets/larhco.png";
import heyo from "./assets/heyo.jpg";
import anigme from "./assets/anigme.png";
import ala from "./assets/ala.ico"
import ecs from "./assets/ecs.png"
import corujinha from "./assets/corujinha.png"

const Works = () => {
    return ( 
        <div className="content" id='works'>
            <div className="title">
                <h2>WORKS</h2>
            </div>
            <div className="works">
                <div className="row">



                    <div className="project">
                        <h4>ANIGME</h4>
                        <img src={ anigme } alt="" />
                        <p>Uma mistura de anime com enigma, jogo no qual se deve acertar o personagem por trás da imagem borrada, com base nas informações obtidas em seus erros anteriores. Usa uma API pública para os coletar os dados.</p>
                        <div className="link-buttons">
                            <a target='_blank'  rel="noreferrer" href="https://anigme.netlify.app">Projeto</a>
                            <a target='_blank'  rel="noreferrer" href='https://github.com/hugofolloni/anigme'>Github</a>
                        </div>
                    </div>



                    <div className="project">
                        <h4>MYGIFTLIST</h4>
                        <img src={ cityweather } alt="" />
                        <p>Um aplicativo fullstack que permite aos usuários disponibilizar listas de presentes que querem em seus eventos. Feito em TypeScript, possui um frontend em React e uma API para requisições no banco de dados.</p>
                        <a target='_blank'  rel="noreferrer" href='https://github.com/hugofolloni/my-gift-list'>Github</a>                        
                    </div>



                    <div className="project">
                        <h4>EVENT CONFIRMATION</h4>
                        <img src={ ecs } style={ { borderRadius:"20%" } } alt="" />
                        <p>Event Confirmation System é uma plataforma para gerenciamento de eventos. O criador deve criar seu evento e enviar o link para convidados. Esses podem confirmar a presença e receber lembretes próximo ao evento.</p>
                        <div className="link-buttons">
                            <a target='_blank'  rel="noreferrer" href="https://event-confirmation-system.netlify.app">Projeto</a>
                            <a target='_blank'  rel="noreferrer" href='https://github.com/hugofolloni/event-confirmation-system'>Github</a>
                        </div>
                    </div>



                </div>
                <div className="row">



                <div className="project">
                        <h4>LARHCO</h4>
                        <img src={ larhco } alt="" />
                        <p>Trabalho freelancer realizado para laboratório de química LARHCO, da Universidade Federal do Rio de Janeiro. Contém informações sobre os membros e projetos da organização e é editável por administradores com permissão.</p>
                        <a target='_blank'  rel="noreferrer" href="https://larhco.netlify.app">Projeto</a>
                    </div>



                    <div className="project">
                        <h4>FLORESTA SEMPRE VIVA</h4>
                        <img src={ corujinha } alt="" height='45px' width='45px' />
                        <p>Trabalho freelancer realizado para a empresa Bracell, é uma single-page-application para um projeto da corporação. Conta com layout detalhado, junto de algumas funcionalidades, como vídeos embed e galeria de fotos.</p>
                        <a target='_blank'  rel="noreferrer" href="https://florestasempreviva.com.br">Projeto</a>
                    </div>



                    <div className="project">
                        <h4>HEYO DISCORD BOT</h4>
                        <img src={ heyo } style={ { borderRadius:"20%" } } alt="" />
                        <p>Um bot interativo e divertido para servidores do Discord. Foi feito com Node.js, especificamente com o framework Discord.js. Ele junta comandos de música, piadas, utilidades, para melhorar a experiência com o aplicativo. </p>
                        <div className="link-buttons">
                            <a target='_blank'  rel="noreferrer" href="https://discord.com/oauth2/authorize?client_id=867456901716246538&permissions=8&scope=bot">Projeto</a>
                            <a target='_blank'  rel="noreferrer" href='https://github.com/hugofolloni/heyo-discord-bot'>Github</a>
                        </div>
                    </div>



                </div>
            </div>
        </div>
     );
}


// // // // // // //


const EnWorks = () => {
    return ( 
        <div className="content" id='works'>
            <div className="title">
                <h2>WORKS</h2>
            </div>
            <div className="works">
                <div className="row">
                    <div className="project">
                        <h4>MYGIFTLIST</h4>
                        <img src={ cityweather } alt="" />
                        <p>A fullstack application that allows the user to create and share giftlists with what they want for their events. It was made with TypeScript, with a ReactTS frontend and an API with Express for the database connection, allowing to save and update the lists.</p>
                        <div className="link-buttons">
                            {/* <a target='_blank'  rel="noreferrer" href="https://mygiftlist-live.netlify.app">Projeto</a> */}
                            <a target='_blank'  rel="noreferrer" href='https://github.com/hugofolloni/my-gift-list'>Github</a>
                        </div>
                    </div>
                    <div className="project">
                        <h4>ANIGME</h4>
                        <img src={ anigme } alt="" />
                        <p>A mix of enigma and anime, it's a game which the player has to guess the character behind the blur photo, based on the informations that he got on the last misses. Uses an API to get the data to random generate the character.</p>
                        <div className="link-buttons">
                            <a target='_blank'  rel="noreferrer" href="https://anigme.netlify.app">Projeto</a>
                            <a target='_blank'  rel="noreferrer" href='https://github.com/hugofolloni/anigme'>Github</a>
                        </div>
                    </div>
                    <div className="project">
                        <h4>WIKI-ANALYSIS</h4>
                        <img src={ ala } alt="" />
                        <p>A fullstack project for the Linear Algebra college subject, it's an application that can define the category of a Wikipedia article, based on the words that the text contains. It has a system to learn based on the lasts inputs.</p>
                        <div className="link-buttons">
                            <a target='_blank'  rel="noreferrer" href="https://wiki-analysis.netlify.app">Projeto</a>
                            <a target='_blank'  rel="noreferrer" href='https://github.com/hugofolloni/wiki-analysis'>Github</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="project">
                        <h4>EVENT CONFIRMATION</h4>
                        <img src={ ecs } style={ { borderRadius:"20%" } } alt="" />
                        <p>Event Confirmation System is, like the name, a plataform to handle events and their confimations. The manager can create the event, and share the link with the guests. They can confirm their presence and get alerts next to the event.</p>
                        <div className="link-buttons">
                            <a target='_blank'  rel="noreferrer" href="https://event-confirmation-system.netlify.app">Projeto</a>
                            <a target='_blank'  rel="noreferrer" href='https://github.com/hugofolloni/event-confirmation-system'>Github</a>
                        </div>
                    </div>
                    <div className="project">
                        <h4>FLORESTA SEMPRE VIVA</h4>
                        <img src={ corujinha } alt="" height='45px' width='45px' />
                        <p>Freelancer job made to Bracell, it's a single-page-application for a company project. It has a detailed layout, about the sustainability and care for nature, with some functionalities like embeded videos and a photo carrousel.</p>                       
                        <a target='_blank'  rel="noreferrer" href="https://florestasempreviva.com.br">Projeto</a>
                    </div>
                    <div className="project">
                        <h4>HEYO DISCORD BOT</h4>
                        <img src={ heyo } style={ { borderRadius:"20%" } } alt="" />
                        <p>An interactive and fun bot for discord servers. Made with Node.js, with the framework Discord.js. It runs with portuguese, mixing music, jokes, fun, utility and curiosity commands, trying to enhance the experiency with the app.</p>
                        <div className="link-buttons">
                            <a target='_blank'  rel="noreferrer" href="https://discord.com/oauth2/authorize?client_id=867456901716246538&permissions=8&scope=bot">Projeto</a>
                            <a target='_blank'  rel="noreferrer" href='https://github.com/hugofolloni/heyo-discord-bot'>Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}


export { Works, EnWorks };