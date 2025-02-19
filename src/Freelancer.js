import LaunchIcon from '@mui/icons-material/Launch';

const Freelancer = () => {

    const projects = [
        {
            title: "Instituto de Proteção ao Jogador",
            link: "https://ipjbr.com.br"
        },
        {
            title: "UFRJ — LARHCO",
            link: "https://larhco.iq.ufrj.br"
        },
        {
            title: "Bracell — Floresta Sempre Viva",
            link: "https://florestasempreviva.com.br"
        },
    ]

    return ( 
        <div className="projects-wrapper">
            <div className="freelancer-projects" >
                <h2 className="title">~ freelancer</h2>
                <div className="minor-projects-area">
                    {projects.map((item) => (
                        <div className="minor-project">
                            <div className="minor-project-title" style={{cursor: 'default'}}>
                                <span className='orange' style={{color: '#d3d3d5', cursor: 'default'}}>{item.title}</span>
                                <a href={item.link} target='_blank' rel='noreferrer'><LaunchIcon className='icon'/></a>
                            </div>
                        </div>
                    ))}          
                </div>          
            </div>
        </div>
     );
}
 
export default Freelancer;