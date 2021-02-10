import { FaTimes } from 'react-icons/fa';

const Event = ({ event, onDelete }) => {
    return (
        <div className="event">
            <h3>
                {event.title} 
                <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(event.id)}/>
            </h3>
            <p>{event.description}</p>
            <br />
            <div>
                {event.location}
                {event.date}
                {event.startTime} - {event.endTime}
            </div>
        </div>
    )
}

export default Event;
