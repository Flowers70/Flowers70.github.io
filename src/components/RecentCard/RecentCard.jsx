import './RecentCard.css';
import { Link } from 'react-router-dom'

const underConstruction = () => {
    alert("This site is still undergoing construction. I appreciate your patience and hope you have a great day! ❤️");
};

export function RecentCard({background = "#ffffff", section = "Portfolio", link = "/take_action", title = "Take Action!", description = ""}){
    return(
        <Link to={link}>
        <div className='recentCard'>
            <h2>{section}</h2>
            <div style={{backgroundColor: background}} className='info'>
            <h3>{title}</h3>
            <p>{description}</p>
            </div>
        </div>
        </Link>
    );
}