import { cvs } from './content/cv';
import { CvContext } from './i18n/CvContext';
import { useLang } from './i18n/useLang';
import { useTheme } from './theme/useTheme';
import { AiSection } from './ui/AiSection/AiSection';
import { ExperienceSection } from './ui/ExperienceSection/ExperienceSection';
import { Footer } from './ui/Footer/Footer';
import { Hero } from './ui/Hero/Hero';
import { LanguageToggle } from './ui/LanguageToggle/LanguageToggle';
import { SideNav } from './ui/SideNav/SideNav';
import { SkillsSection } from './ui/SkillsSection/SkillsSection';
import { ThemeToggle } from './ui/ThemeToggle/ThemeToggle';
import { WorkSection } from './ui/WorkSection/WorkSection';
import './App.css';

export function App() {
    const { theme, toggle: toggleTheme } = useTheme();
    const { lang, toggle: toggleLang } = useLang();
    const cv = cvs[lang];

    return (
        <CvContext value={cv}>
            <a className="skip-link" href="#main">
                {cv.labels.skipLink}
            </a>
            <Hero
                theme={theme}
                actions={
                    <>
                        <LanguageToggle lang={lang} onToggle={toggleLang} />
                        <ThemeToggle theme={theme} onToggle={toggleTheme} />
                    </>
                }
            />
            <div className="layout page">
                <SideNav />
                <main id="main" className="layout__main">
                    <WorkSection />
                    <AiSection />
                    <ExperienceSection />
                    <SkillsSection />
                </main>
            </div>
            <Footer />
        </CvContext>
    );
}
