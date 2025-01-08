import { Fade } from "react-awesome-reveal";
import { useState } from "react"

const Studies = () => {

    const defaultTexts = [ 
        {
            title: "Universidade Federal do Rio de Janeiro",
            role: "Computer Science",
            date: 'FEB 2021 - NOV 2025',
            task: [
                "I gained strong foundations into algorithms, data structures, and programming languages, exploring the foundational concepts of computing. Through coursework and projects, I gain practical experience in software development, problem-solving, and system design.",
                "In the university environment, I also developed soft skills essential for effective communication, teamwork, and problem-solving. I am adept at collaborating with peers on group projects, presenting ideas clearly, and adapting to new challenges and learning environments."            ]
        }
    ]
    .reverse()

    const [texts, setTexts] = useState(defaultTexts[0])
    const [current, setCurrent] = useState(0)


    return ( 
        <div className="table-wrapper">
            <Fade direction='right' distance={"30px"}>
                <div className="studies">
                    <h2 className="title">~ studies</h2>
                    <div className="studies-area">
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
 
export default Studies;