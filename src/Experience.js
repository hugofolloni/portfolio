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
            role: "ETL Intern",
            date: 'JUN 2023 - NOW',
            task: [
                "As an intern on the ETL area within Verde, I tackle challenges centered on creating and maintaining Talend jobs. This role also involves providing support in resolving database-related issues. Through this experience, I've enhanced my skills in SQL and Java.",
                "I work under the Scrum methodology, ensuring efficient and collaborative project management. This environment has allowed me to gain practical insights into agile development practices and teamwork dynamics."
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
                    <span className="title">~ experience</span>
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
                            <span className='table-title'><strong>{texts.role}</strong> <strong className="green">@ {texts.title}</strong></span>
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