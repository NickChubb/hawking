import Events from "./Events";
import { useState, useEffect } from 'react';
import { fetchEvents, deleteEvent, updateCalendar } from '../api/event.js';
import { Link } from 'react-router-dom';

const EventCalendar = () => {

    const [events, setEvents] = useState([]);

    const getEvents = async () => {
        const eventsFromServer = await fetchEvents();
        setEvents(eventsFromServer);
    }

    useEffect(() => {
        getEvents();
    }, []);

    const onDelete = async (id) => {
        deleteEvent(id);
        setTimeout(getEvents, 100);
        updateCalendar();
    }

    return (
        <div className="element">
            <h2>Event Calendar</h2>
            <hr />
            {events.length > 0 ? <Events events={events} onDelete={onDelete}/> 
            : <span>No events, <Link to={'/newEvent'}>click here</Link> to add new event.</span>}
        </div>
    )
}

export default EventCalendar;
