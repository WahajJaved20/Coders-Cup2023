import './App.css';
import HomePage from './components/HomePage';
import './fonts/CircularSpotifyText-Black.otf';
import './fonts/CircularSpotifyText-BlackItalic.otf';
import './fonts/CircularSpotifyText-Bold.otf';
import './fonts/CircularSpotifyText-Book.otf';
import './fonts/CircularSpotifyText-Light.otf';
import './fonts/CircularSpotifyText-Medium.otf';
import './fonts/AnonymousPro-Regular.ttf';
import './fonts/circular-std.ttf';
import TeamPage from './components/TeamPage';
import teamList from './components/teamList';
import teambackground from './assets/teamBackground.jpg';
import teamHeader from './assets/teamHeader.png';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import { useEffect, useState } from 'react';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.addEventListener('load', () => {
            setLoading(false);
        });
    });

    return (
        <>
            <div style={{display: loading ? 'block' : 'none'}}>
                <div className="h-screen w-screen flex justify-center items-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-700 "></div>
                </div>
            </div>
            <div style={{ display: loading ? 'none' : 'block' }}>
                <HomePage />
                <div
                    className="flex flex-col justify-center items-center duration-10 ease-in-out relative snap-start transition"
                    style={{
                        backgroundImage: `url(${teambackground})`,
                        backgroundSize: 'cover',
                        position: 'relative',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        height: '100vh',
                        width: '100vw',
                        backgroundAttachment: 'fixed',
                    }}
                >
                    <img src={teamHeader} alt="logo" className="relative mt-[-50px]"></img>
                </div>
                {teamList.map((team, index) => {
                    return (
                        <div
                            className="snap-start"
                            style={{ top: 0, left: 0, height: '100vh', width: '100vw', position: 'relative', transition: 'all 0.5s ease-in-out' }}
                        >
                            <TeamPage backgroundImageUrl={team.backgroundImage} teamNameImage={team.headerImage} description={team.description} />
                        </div>
                    );
                })}
                <Footer />
            </div>
        </>
    );
}

export default App;
