import { ArticleCard } from "../components/ArticleCard/ArticleCard";
import './articles.css'

export function Articles(){
    return(
        <>
            <div className="recipes">
                <div className="spotlight">
                    <div className="titleDate">
                        <h2>The Difference Between Agile and Kanban</h2>
                        <div>May 27, 2025</div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum eros in sollicitudin pellentesque. Aenean sollicitudin tellus sed dolor pretium feugiat. Suspendisse tincidunt est faucibus velit iaculis, et tincidunt dolor auctor. Aenean turpis mi, elementum ac eros eu, posuere viverra ex. Nam vitae velit vel odio aliquam lobortis. Vestibulum nulla nisl, tempor vel nisi eu, hendrerit luctus dui. Maecenas porttitor convallis ex, sed iaculis enim vestibulum ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce lobortis fringilla tempor. Suspendisse a diam nec lectus pellentesque consequat. Nam egestas iaculis turpis sed bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
                    <button>Continue Reading</button>
                </div>
                <div className="gallery">
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                </div>
            </div>
        </>
    );
}