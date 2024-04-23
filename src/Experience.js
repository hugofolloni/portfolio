import { Fade } from "react-awesome-reveal";
import { useState } from "react"

const Experience = () => {

    const defaultTexts = [ 
        {
            title: "Machine Teaching",
            role: "Scientific Initiation Student"
        },
        {
            title: "COPPETEC",
            role: "ETL Intern"
        }
    ]

    const [texts, setTexts] = useState(defaultTexts[0])

    return ( 
        <div className="session-wrapper">
            <Fade direction='left' distance={"30px"}>
                <div className="xp">
                    <span className="title">~ experience</span>
                    <div className="jobs-area">
                        <div className="jobs-selector">
                            { defaultTexts.map((item, index) => (
                                <div className="job-items">
                                    <span onClick={() => setTexts(defaultTexts[index])}>{item.title}</span>
                                </div>
                            ))}
                        </div>
                        <div className="jobs-infos">
                            <span><strong>{texts.role}</strong> <strong className="green">@ {texts.title}</strong></span>
                        </div>
                    </div>
                </div>
            </Fade>
        </div> 
 );
}
 
export default Experience;