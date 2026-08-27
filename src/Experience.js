import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { motion } from "framer-motion";

const Experience = () => {

    const defaultTexts = [ 
        {
            title: "Machine Teaching",
            role: "Undergraduate Researcher",
            date: 'FEB 2022 - NOV 2025',
            task: [
                "Selected for a CNPq-funded fellowship to advance an educational platform used by hundreds of STEM students. Optimized system performance by rewriting database queries to reduce dashboard page load times by up to 80%.",
                "Led the development of a synchronous assessment module for my capstone thesis, created automated tests to ensure system reliability, and co-authored a peer-reviewed paper accepted at WEI 2026, presenting research on competency-driven autograder frameworks. href=https://doi.org/10.5753/wei.2026.21827"
            ]
        },
        {
            title: "COPPETEC",
            role: "ETL Researcher",
            date: 'JUN 2023 - JAN 2026',
            task: [
                "Contributed to a large-scale data management project for a state public defender's office, ensuring the reliability of data pipelines by designing and modifying over 40 Talend jobs.",
                "Led an initiative to containerize the Talend development environment using Docker, eliminating cross-platform dependency issues and streamlining the team's workflow under Scrum methodologies."
            ]
        },
        {
            title: "BigDataCorp",
            role: "Software Engineer Intern",
            date: "JUN 2024 - DEC 2025",
            task: [
                "Developed and modernized full-stack internal solutions, implementing automated Purchase Order systems that streamlined workflows and eliminated manual ERP checks for the Finance team.",
                "Played a key role in a major platform modernization, migrating core UI components to React 18 and backend routes to .NET 8, significantly improving system maintainability and developer productivity."
            ]
        },
        {   
            title: "BigDataCorp",
            role: "Software Engineer",
            date: 'JAN 2026 - NOW',
            task: [
                "Took on technical ownership of the core billing and monetization ecosystem, architecting internal web applications and REST APIs serving executive leadership, Sales, and Finance operations.",
                "Spearheaded the architectural shift to a new Price Tables model supporting 5,000+ enterprise clients and 10,000+ contracts, successfully scaling the core billing and monetization ecosystem.",
                "Implemented a proactive caching layer that reduced data retrieval times by up to 90%, and achieved 100% automated test coverage for the core API by establishing internal TDD protocols.",
            ],
        }
    ]
    .reverse()

    const [current, setCurrent] = useState(0);
    const texts = defaultTexts[current];

    return ( 
        <div className="table-wrapper">
            <Fade direction='left' distance={"30px"}>
                <div className="xp">
                    <h2 className="title">~ experience</h2>
                    <div className="jobs-area">
                        <div className="selector" style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            {defaultTexts.map((item, index) => {
                                const isSelected = current === index;
                                return (
                                    <div 
                                        key={index}
                                        onClick={() => setCurrent(index)} 
                                        className="items"
                                        style={{ cursor: 'pointer', position: 'relative', zIndex: 1, padding: '10px 14px' }}
                                    >
                                        {isSelected && (
                                            <motion.div
                                                layoutId="experience-pill"
                                                style={{
                                                    position: 'absolute',
                                                    inset: 0,
                                                    zIndex: -1,
                                                    borderRight: '3px solid #ff5f00'
                                                }}
                                                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                                            />
                                        )}
                                        <span>{item.title}</span>
                                    </div>    
                                )
                            })}
                        </div>
                        <div className="table-infos">
                            <Fade key={current} triggerOnce direction="up" duration={300} cascade damping={0.12}>
                                <span className='table-title'><strong>{texts.role}</strong> <strong className="orange">@ {texts.title}</strong></span>
                                <span className="table-duration">{texts.date}</span>
                                <div className="table-all-tasks">
                                    {texts.task.map((value, index) => {
                                        if (value.includes("href=")) {
                                            return (
                                                <span key={index} className="table-task">
                                                    {value.split('co-authored')[0]}
                                                    <a href={value.split('href=')[1]} target="_blank" rel="noreferrer" className="orange">co-authored a peer-reviewed paper</a>
                                                    {value.split('paper')[1].split('href=')[0]}
                                                </span>
                                            )
                                        }
                                        return <span key={index} className="table-task">{value}</span>

                                    })}
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </Fade>
        </div> 
    );
};
 
export default Experience;