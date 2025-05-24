import './RecentCard.css';

const underConstruction = () => {
    alert("This site is still undergoing construction. I appreciate your patience and hope you have a great day! ❤️");
};

export function RecentCard({background = "#ffffff", section = "Portfolio", title = "Take Action!", description = ""}){
    return(
        <a onClick={underConstruction}>
        <div className='recentCard'>
            <h2>{section}</h2>
            <div style={{backgroundColor: background}} className='info'>
            <h3>{title}</h3>
            <p>{description}</p>
            </div>
        </div>
        </a>
    );
}