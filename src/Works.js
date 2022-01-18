import cityweather from "./assets/city-weather.ico";
import heyo from "./assets/heyo.jpg";
import todo from "./assets/to-do.png";
import coding from "./assets/coding.png"
import landing from "./assets/landing.ico"
import gamedealer from "./assets/gamedealer.png"

const Works = () => {
    return ( 
        <div className="content" id='works'>
            <div className="title">
                <h2>WORKS</h2>
            </div>
            <div className="works">
                <div className="row">
                    <div className="project">
                        <h4>CITY WEATHER</h4>
                        <img src={ cityweather } alt="" />
                        <p>Um website que mostra a atual condição climática de qualquer lugar do mundo. Foi feito com React e algumas APIs. O usuário pode buscar localizações ou ver a sua própria.</p>
                        <div className="link-buttons">
                            <a href="https://city-weather-live.netlify.app">Projeto</a>
                            <a href='https://github.com/hugofolloni/city-weather'>Github</a>
                        </div>
                    </div>
                    <div className="project">
                        <h4>GAME DEALER</h4>
                        <img src={ gamedealer } alt="" />
                        <p>Um site para localizar o melhor preço para jogos de computador. Foi feito com React e utilizando uma API, mostra informações sobre os jogos pesquisados (em inglês e USD).</p>
                        <div className="link-buttons">
                            <a href="https://game-dealer-app.netlify.app">Projeto</a>
                            <a href='https://github.com/hugofolloni/game-dealer'>Github</a>
                        </div>
                    </div>
                    <div className="project">
                        <h4>HEYO DISCORD BOT</h4>
                        <img src={ heyo } style={ { borderRadius:"20%" } } alt="" />
                        <p>Um bot interativo e divertido para servidores do Discord. Foi feito com Node.js, especificamente Discord.js. Ele junta comandos de música, diversão e curiosidades.</p>
                        <a href='https://github.com/hugofolloni/heyo-discord-bot'>Github</a>
                    </div>
                </div>
                <div className="row">
                    <div className="project">
                        <h4>50 DAYS OF CODE</h4>
                        <img src={ coding } alt="" />
                        <p>Um desafio de programar algo por 50 dias consecutivos. Ainda estou fazendo, e estou aprendendo muito no processo, ganhando confiança e criando rotinas.</p>
                        <a href='https://github.com/hugofolloni/50-days-of-code-challenge'>Github</a>
                    </div>
                    <div className="project">
                        <h4>LANDING PAGE</h4>
                        <img src={ landing } alt="" />
                        <p>É uma página para "ainda em construção" com um input (feito em react), além de um backend/banco de dados (feitos com Node.js) para enviar emails quando estiver pronto.</p>
                        <a href='https://github.com/hugofolloni/landing-page'>Github</a>
                    </div>
                    <div className="project">
                        <h4>REACT TO-DO-LIST</h4>
                        <img src={ todo } alt="" />
                        <p>Uma to-do-list simples feita com React. Ela é uma lista de tarefas integrada com um relógio pomodoro, para controlar o tempo das tarefas de estudo/trabalho do usuário.</p>
                        <a href='https://github.com/hugofolloni/react-to-do-list'>Github</a>
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
                        <h4>CITY WEATHER</h4>
                        <img src={ cityweather } alt="" />
                        <p>A website that displays the current weather of any place on earth. Made with React and some APIs, user can search any location, even auto-search his own location.</p>
                        <div className="link-buttons">
                            <a href="https://city-weather-live.netlify.app">Project</a>
                            <a href='https://github.com/hugofolloni/city-weather'>Github</a>
                        </div>
                    </div>
                    <div className="project">
                        <h4>GAME DEALER</h4>
                        <img src={ gamedealer } alt="" />
                        <p>A website to search for the best prices for PC games. It was build with React and using an API, shows info about your searched games (in english and USD).</p>
                        <div className="link-buttons">
                            <a href="https://game-dealer-app.netlify.app">Project</a>
                            <a href='https://github.com/hugofolloni/game-dealer'>Github</a>
                        </div>
                    </div>
                    <div className="project">
                        <h4>HEYO DISCORD BOT</h4>
                        <img src={ heyo } style={ { borderRadius:"20%" } } alt="" />
                        <p>An interactive and fun bot for discord servers. Made with Node.js, especially Discord.js. It runs in portuguese language, mixing music, fun and curiosity commands.</p>
                        <a href='https://github.com/hugofolloni/heyo-discord-bot'>Github</a>
                    </div>
                </div>
                <div className="row">
                    <div className="project">
                        <h4>50 DAYS OF CODE</h4>
                        <img src={ coding } alt="" />
                        <p>A challenge to code something for the next 50 days. I still doing it, and I'm learning a lot during the process, getting confidence and code routine.</p>
                        <a href='https://github.com/hugofolloni/50-days-of-code-challenge'>Github</a>
                    </div>
                    <div className="project">
                        <h4>LANDING PAGE</h4>
                        <img src={ landing } alt="" />
                        <p>It's an "under construction" landing page with input field (made with React) and a database/backend (made with Node.js), to send emails when the page is ready.</p>
                        <a href='https://github.com/hugofolloni/landing-page'>Github</a>
                    </div>
                    <div className="project">
                        <h4>REACT TO-DO-LIST</h4>
                        <img src={ todo } alt="" />
                        <p>A simple to-do list made with React. It is a to-do list with a pomodoro timer integrated where the user can control his tasks and time for study/work.</p>
                        <a href='https://github.com/hugofolloni/react-to-do-list'>Github</a>
                    </div>
                </div>
            </div>
        </div>
     );
}


export { Works, EnWorks };