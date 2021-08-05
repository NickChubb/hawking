import React from 'react';
import Button from './elements/Button';
import EventCalendar from './elements/EventCalendar';
import MusicController from './elements/MusicController';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div className="display">
            <div className="container">
                <EventCalendar />
                <MusicController />
            </div>
        </div>
    )
}

export default MainPage;
