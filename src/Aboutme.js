const Aboutme = () => {
    return ( 
        <div className="content">
            <div className="title">
                <h2>SOBRE MIM</h2>
            </div>
            <div className="infos-about-me">
                <p>Olá, eu sou Hugo Folloni Guarilha e sou um desenvolvedor fullstack de 19 anos. Amo tecnologias e desenvolvimento de ideias desde a minha infância, mas em 2017 comecei a programar. Meus primeiros aplicativos foram em Python, ainda no ensino médio. Depois disso, comecei a focar no desenvolvimento web, com Javascript e HTML/CSS. Neste último ano, me aperfeiçoei meus conhecimentos em React e Node.js, e hoje domino tais ferramentas.</p>
                <br />
                <p>Sou programador autodidata, mas agora curso a faculdade de Ciência da Computação na UFRJ, uma das universidades mais prestigiadas do país, na qual estou envolvido no projeto de ensino de programação <a href="https://github.com/hugofolloni/machine-teaching" target='_blank'  rel="noreferrer">Machine Teaching</a>. Minha perseverança e habilidade de aprender sozinho são minhas características mais marcantes, e vão me manter focado em me desenvolver como profissional.</p>
            </div>
        </div>
     );
}


// // // // // // //


const EnAboutme = () => {
    return ( 
        <div className="content">
            <div className="title">
                <h2>ABOUT ME</h2>
            </div>
            <div className="infos-about-me">
                <p>My name is Hugo Folloni Guarilha and I'm a 19yo fullstack developer. I love technologies and development since my childhood, but just in 2017 I started to code. My first apps was with Python, while I was on high school. After that, I focused on Web development, with JavaScript and HTML/CSS. In July 2021, I started to learn React and I'm currently looking for opportunities in this area.</p>
                <br />
                <p>I am a self-taught developer, but now I'm a Computer Science student, at UFRJ, one of the most prestigiated universities in Brazil. My perseverance and my ability to learn by myself are my best skills, and that will keep me focused on grow as a professional and a person.</p>
            </div>
        </div>
     );
}
 
export { Aboutme, EnAboutme };