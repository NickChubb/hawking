import { fetchMusicInfo } from '../api/music.js';
import { useState, useEffect } from 'react';

const MusicController = () => {

    const [music, setMusic] = useState([]);

    const getMusic = async () => {
        const musicFromServer = await fetchMusicInfo();
        setMusic(musicFromServer);
    }

    useEffect(() => {
        getMusic();
    }, []);


    return (
        <div className="element music">
            <h2>Music Controller</h2>
            <hr />
            <h3>Currently Playing</h3>
            
        </div>
    )
}

export default MusicController;
