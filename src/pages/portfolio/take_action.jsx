import { PortfolioProject } from "./PortfolioProject";

export function Take_Action(){
    return(
        <PortfolioProject 
        name="Take Action!"
        date="May 9, 2025"
        info={[`During my time at Walmart, I was given the opportunity to develop my skills in Angular by creating a to-do app. 
                I decided to give this to-do app the name Take Action! and use it not only to grow in my skills but also to create a tool 
                I and others would later find useful. The resulting application allows a user to create, edit, complete or delete actions 
                (tasks) and apply categorization. To give the user a feeling of accomplishment I also included a time chart that tracks how 
                many actions are completed in a given day. The picture on the right is a screenshot of my application after a few days of use 
                (potentially sensitive information has been blocked out).`,

                `This application was an invaluable learning experience that contributed directly to the skills I used in my job as a Software 
                Engineer. Before beginning the job my only other experience with Angular was during an internship. I like how the Angular 
                framework divides an application into components and services. One of my coworkers explained the components as the Lego 
                building blocks of an application. Each component has a specific function and contains both the user interface design of the 
                element and the code logic. Services control the input and flow of information throughout the application.`,

                `While the purpose of this application was to focus on learning Angular, for the first time I learned how to create an 
                API (Application Programming Interface) using ExpressJS! Although I did spend some time designing the application before 
                developing it, I was mainly focused on the frontend, which later led to complications and the need to rework the backend 
                multiple times. For my next application I will spend more time designing it rather than jumping into the code. 😂`]}
        buttonText="Watch the Demo!"
        externalSources={["https://v17.angular.io/tutorial/tour-of-heroes/toh-pt0", "https://www.geeksforgeeks.org/angular-cli-angular-project-setup/"]}
        technologies={["Angular", "JavaScript", "HTML", "CSS", "Express JS"]}
        tools={["GitHub", "VSCode"]}
        imagePath="/images/Take_Action.png"
        />
    );
}