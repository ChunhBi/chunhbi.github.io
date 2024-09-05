import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone, ChevronRight, Briefcase, Book, Code } from 'lucide-react';

const Card = ({ children, className = "" }) => (
    <div className={`bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl ${className}`}>
        {children}
    </div>
);

const Section = ({ title, children, color = "bg-indigo-100" }) => (
    <div className={`mb-12 ${color} rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg`}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800 font-display">{title}</h2>
        {children}
    </div>
);

const ExperienceItem = ({ title, organization, date, description }) => (
    <Card className="mb-6 border-t-4 border-indigo-500">
        <h3 className="text-xl font-semibold text-indigo-600 font-display">{title}</h3>
        <p className="text-lg text-gray-700 font-body">{organization}</p>
        <p className="text-sm text-gray-500 font-body mb-2">{date}</p>
        <ul className="list-none text-gray-600 font-body">
            {description.map((item, index) => (
                <li key={index} className="mb-1 flex items-start">
                    <ChevronRight size={16} className="mr-2 mt-1 flex-shrink-0 text-indigo-500" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </Card>
);

const ProjectItem = ({ title, description }) => (
    <Card className="mb-6 border-t-4 border-green-500">
        <h3 className="text-xl font-semibold text-green-600 font-display">{title}</h3>
        <ul className="list-none mt-2 text-gray-600 font-body">
            {description.map((item, index) => (
                <li key={index} className="mb-1 flex items-start">
                    <ChevronRight size={16} className="mr-2 mt-1 flex-shrink-0 text-green-500" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </Card>
);

const Navigation = () => (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 text-white sticky top-0 z-10 shadow-md">
        <ul className="flex justify-center space-x-6 font-display">
            <li><Link to="/" className="hover:text-yellow-200 transition-colors duration-300">Home</Link></li>
            <li><Link to="/experiences" className="hover:text-yellow-200 transition-colors duration-300">Experiences</Link></li>
            <li><Link to="/projects" className="hover:text-yellow-200 transition-colors duration-300">Projects</Link></li>
        </ul>
    </nav>
);

const HomePage = () => (
    <div className="max-w-4xl mx-auto p-8">
        <Card className="text-center mb-12 bg-gradient-to-r from-blue-100 to-purple-100">
            <h1 className="text-5xl font-bold mb-4 text-indigo-700 font-display">Chunhao Bi</h1>
            <p className="text-2xl mb-4 text-gray-600 font-body">Boston, MA, USA</p>
            <div className="flex justify-center space-x-4 flex-wrap">
                <a href="tel:8573616929" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300 m-2">
                    <Phone size={20} className="mr-2" /> (857)-361-6929
                </a>
                <a href="mailto:bch1755@outlook.com" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300 m-2">
                    <Mail size={20} className="mr-2" /> bch1755@outlook.com
                </a>
                <a href="https://www.linkedin.com/in/chunh-bi/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300 m-2">
                    <Linkedin size={20} className="mr-2" /> LinkedIn
                </a>
                <a href="https://github.com/ChunhBi" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300 m-2">
                    <Github size={20} className="mr-2" /> GitHub
                </a>
            </div>
        </Card>

        <Section title="Education" color="bg-blue-100">
            <ExperienceItem
                title="Master of Science in Computer Science"
                organization="Boston University"
                date="Sep 2023 - Dec 2024"
                description={["GPA: 3.77", "Boston, MA, U.S."]}
            />
            <ExperienceItem
                title="Bachelor of Science in Computer Science"
                organization="ShanghaiTech University"
                date="Sep 2019 - Jun 2023"
                description={["GPA: 3.51", "Shanghai, China"]}
            />
        </Section>

        <Section title="Technical Skills & Experience" color="bg-green-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-gradient-to-br from-indigo-50 to-blue-100">
                    <h3 className="text-lg font-semibold text-indigo-600 mb-2 font-display">Programming Languages & Platforms:</h3>
                    <p className="text-gray-600 font-body">C, C++, C#, Python, Java, Kotlin, JavaScript, React, Matlab, Linux, ROS</p>
                </Card>
                <Card className="bg-gradient-to-br from-green-50 to-teal-100">
                    <h3 className="text-lg font-semibold text-green-600 mb-2 font-display">Skills:</h3>
                    <p className="text-gray-600 font-body">ML, DL, AI, Robotics, VR, Game Development, Software Engineering, Web Development, Mobile App Development</p>
                </Card>
            </div>
            <Card className="mt-4 bg-gradient-to-br from-yellow-50 to-orange-100">
                <h3 className="text-lg font-semibold text-yellow-600 mb-2 font-display">Competitions:</h3>
                <p className="text-gray-600 font-body">Kaggle AI Mathematical Olympiad - Progress Prize 1: Silver Medal</p>
            </Card>
        </Section>
    </div>
);

const ExperiencesPage = () => (
    <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-indigo-700 font-display">Work & Research Experience</h1>

        <Section title="Work Experience" color="bg-yellow-100">
            <ExperienceItem
                title="Part-Time Software Engineer"
                organization="Shanghai RhythMo Digital Technology Co."
                date="May 2021 - Aug 2022"
                description={[
                    "Collaborated on projects that commercialize research achievements, with the goal of reducing barriers to the public's adoption of human motion capture technology for social and gaming applications.",
                    "Leveraged Deep Learning metrics to incorporate industrial products, such as Google MediaPipe and Apple ARKit. Utilized databases and error monitoring frameworks to gather and analyze user feedback.",
                    "Conceptualized solutions for human-computer interaction using a single camera, with particular focus on VR software and game development.",
                    "Developed motion capture-related software RhyLive and RhyVerse. Released on App Store with 4.3-stars rating and on Steam platform."
                ]}
            />
        </Section>

        <Section title="Research Experience" color="bg-pink-100">
            <ExperienceItem
                title="Undergraduate Thesis Research"
                organization="Mobile Perception Lab"
                date="Sep 2022 - May 2023"
                description={[
                    "Developed a robust LiDAR-based localization method for indoor localization tasks for robots and humans in cluttered environments, utilizing prior floor plan information.",
                    "Revised the Flood Fill algorithm for efficient plane segmentation on LiDAR point clouds.",
                    "Significantly enhanced the performance and stability of the original FP-Loc framework across multiple datasets featuring complex indoor structures and clutter."
                ]}
            />
        </Section>
    </div>
);

const ProjectsPage = () => (
    <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-green-700 font-display">Projects</h1>

        <Section title="Featured Projects" color="bg-green-100">
            <ProjectItem
                title="LoCATor | Android App Development Project"
                description={[
                    "Developed an Android mobile application utilizing Google Map SDK for real-time location sharing of campus cats, facilitating community engagement.",
                    "Leveraged Firebase to implement real-time database functionalities, enabling users to track cat locations and take photos, fostering a collaborative environment."
                ]}
            />
            <ProjectItem
                title="Photorealistic Video Generation | Deep Learning Project"
                description={[
                    "Research on Video Generation and Translation based on Stable Diffusion and LLM.",
                    "Experimented and Slightly improved SOTA SD-based framework."
                ]}
            />
            <ProjectItem
                title="Doodle Jump AI | Artificial Intelligence Project"
                description={[
                    "Implemented a PC version of the popular mobile game 'Doodle Jump' using Python.",
                    "Applied Reinforcement Learning methods to create an AI for the game 'Doodle Jump' that play autonomously and outperformed human players."
                ]}
            />
            <ProjectItem
                title="Photon Mapping | Computer Graphics Project"
                description={[
                    "Implemented Photon Mapping, a specialized ray-tracing rendering algorithm, to efficiently produce photorealistic images of complex virtual scenes at a faster rate than traditional path-tracing techniques.",
                    "Produced high-fidelity, photorealistic images of transparent materials like glass and water."
                ]}
            />
        </Section>
    </div>
);

const PersonalWebsite = () => {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100 font-body">
                <Navigation />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/experiences" element={<ExperiencesPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default PersonalWebsite;