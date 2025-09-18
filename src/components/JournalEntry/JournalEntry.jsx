import { Link } from "react-router-dom";
import styles from './JournalEntry.module.css'

export function JournalEntry(props){
    const workInProgress = () => {
        alert("This site is still undergoing construction. I appreciate your patience and hope you have a great day! ❤️");
    }

    const bulletPoints = props.bulletPoints.map(point => <li key={point}>{point}</li>);

    if(props.oldProject){
        return(
            <>
                <a href={props.navLink} target="_blank" className={styles.journalEntry}>
                    <img alt="Some picture" src={props.image}></img>
                    <div>
                        <div><h2>{props.title}</h2> {props.date}</div>
                        <div><ul>{bulletPoints}</ul></div>
                    </div>                                
                </a>
            </>
        );
    }else{
        return(
            <>
                <Link to={props.navLink} className={styles.journalEntry}>
                    <img alt="Some picture" src={props.image}></img>
                    <div>
                        <div><h2>{props.title}</h2> {props.date}</div>
                        <div><ul>{bulletPoints}</ul></div>
                    </div>                                
                </Link>
            </>
        );
    }
}