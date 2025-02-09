import { Fade } from "react-awesome-reveal";
import { useState } from "react"

const Experience = () => {

    const defaultTexts = [ 
        {
            title: "Machine Teaching",
            role: "Undergraduate Researcher",
            date: 'FEB 2022 - NOW',
            task: [
                "I am responsible for automating tests and optimizing dashboards to ensure the platform's reliability and enhance user experience. This involves creating automated test cases, implementing testing frameworks, and refining dashboard layouts for efficient data visualization.",
                "Additionally, I develop and add new functionalities to the platform while troubleshooting and fixing bugs to maintain its stability and functionality. This hands-on experience allows me to contribute effectively to the platform's continuous improvement and user satisfaction."
            ]
        },
        {
            title: "COPPETEC",
            role: "ETL Researcher",
            date: 'JUN 2023 - NOW',
            task: [
                "As an intern on the ETL area within Verde, I tackle challenges centered on creating and maintaining Talend jobs. This role also involves providing support in resolving database-related issues. Through this experience, I've enhanced my skills in SQL and Java.",
                "I work under the Scrum methodology, ensuring efficient and collaborative project management. This environment has allowed me to gain practical insights into agile development practices and teamwork dynamics."
            ]
        },
        {
            title: "BigDataCorp",
            role: "Software Engineer Intern",
            date: "JUN 2024 - NOW",
            task: [
                "In my role, I focus on solving challenges involving the foundational services of the company, like billing and access control. This role involves the development of web pages with React + Redux and implementing API routes in .NET, enhancing my skills in front-end and back-end integration.",
                "I contribute to the continuous improvement of the platform by refactoring legacy code, adopting modern technologies, and fostering collaboration to ensure a user-centric and reliable experience."
            ]
        }
    ]
    .reverse()

    const [texts, setTexts] = useState(defaultTexts[0])
    const [current, setCurrent] = useState(0)

    return ( 
        <div className="table-wrapper">
            <Fade direction='left' distance={"30px"}>
                <div className="xp">
                    <h2 className="title">~ experience</h2>
                    <div className="jobs-area">
                        <div className="selector">
                            { defaultTexts.map((item, index) => 
                                ((((current === index) && 
                                        (
                                                <div onClick={() => {setTexts(defaultTexts[index]); setCurrent(index)}} className="items-selected"><span>{item.title}</span></div>
                                        )
                                    ) 
                                    || 
                                     <div onClick={() => {setTexts(defaultTexts[index]); setCurrent(index)}} className="items">
                                    <span>{item.title}</span>
                                </div>
                                ))
                            )}
                        </div>
                        <div className="table-infos">
                            <span className='table-title'><strong>{texts.role}</strong> <strong className="orange">@ {texts.title}</strong></span>
                            <span className="table-duration">{texts.date}</span>
                            <div className="table-all-tasks">
                                {texts.task.map((value) => (
                                    <span className="table-task">{value}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div> 
 );
}
 
export default Experience;