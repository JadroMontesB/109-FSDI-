import { useState } from "react";
import './about.css'

const About = () =>{

    const [name, setName] = useState("");
    const [visible, setVisible] = useState(false);

    const handleShowName = () => {

        setName("Jadro");
        setVisible(true);
    }

    const getMyInfo = () =>{

        if(visible){
      
            return(         
                <div className="about-answer">

                    <h4>Name: Jadro Montes</h4>
                    <h5>Age: 22</h5>
                    <h5>Hobbies: Play musical instruments and do puzzles</h5>
                    

                </div>
            );             
        }else return "";
    };

    return(

        <div className="about-page">
            {getMyInfo()}
            <button onClick={handleShowName}>Click To see my name</button>

        </div>
    )

}

export default About;