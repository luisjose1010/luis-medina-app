import Header from "./Header";
import ProjectsSection from "./Projects";
import SkillsSection from "./Skills";
import CallToAction from "./CallToAction";
import ExperienceSection from "./Experience";


interface LandingPageProps { }

const LandingPage: React.FC<LandingPageProps> = ({ }) => {
    return (
        <>
            <Header />
            <ProjectsSection />
            <ExperienceSection />
            <CallToAction />
            <SkillsSection />
        </>
    );
};

export default LandingPage;

