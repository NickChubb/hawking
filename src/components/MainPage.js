import React from 'react';
import Button from './elements/Button';
import EventCalendar from './elements/EventCalendar';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div className="display">
            <div className="container">
                <EventCalendar />
            </div>
        </div>
    )
}

export default MainPage;
