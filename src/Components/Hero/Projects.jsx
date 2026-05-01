import HideAndShow from "../Project"

export default function Projects() {
    return (
        <>
            <h2>Projects</h2>
            <div className="projects">

            <HideAndShow title="Finger Counting CNN">
                <ul>
                <li>Trained and evaluated a CNN model on a Kaggle finger-counting dataset through partitioning.</li>
                <li>Performed image preprocessing (normalization, resizing) and fine-tuned hyperparameters to improve accuracy.</li>
                <li>Processed video input by extracting frames, classifying each frame, and reconstructing an output video with overlaid classifications.</li>
                </ul>
            </HideAndShow>

            <HideAndShow title="Always Clean">
                <ul>
                <li>Designed and developed a responsive website for a local cleaning service.</li>
                <li>Implemented a lightweight CMS by syncing a Google Sheet to a JSON content file via a scheduled GitHub Actions workflow.</li>
                <li>Enabled non-technical updates by allowing the client to modify site content directly in Google Sheets.</li>
                </ul>
            </HideAndShow>

            <HideAndShow title="ANTicipated">
                <ul>
                <li>Designed, developed, and deployed a full-stack web app in nine days for Google’s Built-In AI Challenge.</li>
                <li>Integrated Google Custom Search and YouTube Data APIs to curate learning content.</li>
                <li>Implemented an AI-powered user recap using Chrome’s Built-In AI.</li>
                </ul>
            </HideAndShow>

            </div>
        </>
    )
}