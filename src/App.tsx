import { useTheme } from './theme/useTheme';
import { AiSection } from './ui/AiSection/AiSection';
import { ExperienceSection } from './ui/ExperienceSection/ExperienceSection';
import { Footer } from './ui/Footer/Footer';
import { Hero } from './ui/Hero/Hero';
import { SideNav } from './ui/SideNav/SideNav';
import { SkillsSection } from './ui/SkillsSection/SkillsSection';
import { ThemeToggle } from './ui/ThemeToggle/ThemeToggle';
import { WorkSection } from './ui/WorkSection/WorkSection';
import './App.css';

const sections = [
    { id: 'work', label: 'Work' },
    { id: 'ai', label: 'AI' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
];

export function App() {
    const { theme, toggle } = useTheme();

    return (
        <>
            <a className="skip-link" href="#main">
                Skip to content
            </a>
            <Hero theme={theme} actions={<ThemeToggle theme={theme} onToggle={toggle} />} />
            <div className="layout page">
                <SideNav sections={sections} />
                <main id="main" className="layout__main">
                    <WorkSection />
                    <AiSection />
                    <ExperienceSection />
                    <SkillsSection />
                </main>
            </div>
            <Footer />
        </>
    );
}
