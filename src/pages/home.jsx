// import { useState } from 'react'
import { RecentCard } from '../components/RecentCard/RecentCard.jsx'
// import { readFromFile } from '../utils/fileUtils'

export function Home({content = ""}){
    // const [count, setCount] = useState(0)
    // const [aboutMeContent, setAboutMeContent] = useState("");

    // readFromFile('/data/aboutMe.txt', setAboutMeContent);

    return (
    <>
        <div className='body body-desktop'>
        <div>
            <h2>Recent</h2>
            <RecentCard background="#DC566C" description="A to-do app developed using Angular & Express JS" />
            <RecentCard background="#F7926E" section="Articles" title="The Difference Between Agile and Kanban" link="/articles" description="May 23, 2025" />
            <RecentCard background="#FCC183" section="Recipes" title="Arepas" link="/recipes" description="A mouthwatering Columbian food that is a family favorite" />
        </div>
        <div className='colB'>
            <div>
            <h2>About Me</h2>
            <p>
                {content} 
            </p>
            </div>         
        </div>
        <div className='colC'>
            <img src="/images/Jacinth-JBU-Grad-wDecor.png"></img>
        </div>
        </div>

        <div className='body body-mobile'>
        <div className='colB'>
            <div>
            <h2>About Me</h2>
            <p>
                {content}
            </p>
            </div>         
        </div>
        <div className='colC'>
            <img src="/images/Jacinth-JBU-Grad-wDecor.png"></img>
        </div>
        <div className='colA'>
            <h2>Recent</h2>
            <RecentCard background="#DC566C" description="A to-do app developed using Angular & Express JS" />
            <RecentCard background="#F7926E" section="Articles" title="The Difference Between Agile and Kanban" description="May 23, 2025" />
            <RecentCard background="#FCC183" section="Recipes" title="Arepas" description="A mouthwatering Columbian food that is a family favorite" />
        </div>
        </div>
    </>
    );
}