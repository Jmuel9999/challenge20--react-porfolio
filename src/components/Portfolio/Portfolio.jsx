import Projects from "../Projects/Projects";
import "./portfolio.scss";


export default function Portfolio() {
    return (
        <div className="portfolio">
            <h1>Portfolio</h1>
            <Projects
            title="The Wine Cage"
            link="https://bootcamp-project1.github.io/The-wine-cage/"
            github="https://github.com/bootcamp-project1/The-wine-cage/tree/main"
            >
            </Projects>

            <Projects
            title="Shot-Map"
            link="http://shot-map.herokuapp.com/"
            github="https://github.com/JayARTman/Shot-map"
            >
            </Projects>

            <Projects
            title="Book-Search"
            link="https://challenge21-book-search.herokuapp.com/"
            github="https://github.com/Jmuel9999/challenge21--book-search"
            >
            </Projects>

            <Projects
            title="Work Day Scheduler"
            link="https://jmuel9999.github.io/challenge5-workdayscheduler/"
            github="https://github.com/Jmuel9999/challenge5-workdayscheduler"
            >
            </Projects>

            <Projects
            title="Weather Dashboard"
            link="https://jmuel9999.github.io/Challenge-6--Weather-Dashboard/"
            github="https://github.com/Jmuel9999/Challenge-6--Weather-Dashboard"
            >
            </Projects>

            <Projects
            title="Note Taker"
            link="https://note-taker1112233.herokuapp.com/"
            github="https://github.com/Jmuel9999/challenge11----Express-Note-Taker/tree/main"
            >
            </Projects>
        </div>
    )
};