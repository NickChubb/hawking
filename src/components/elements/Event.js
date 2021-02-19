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
                <h4>
                    <b>Location:</b> {event.location}
                </h4>
                <h4>
                    <b>Date:</b> {event.date}
                    <div>
                        <b>{event.startTime} - {event.endTime}</b>
                    </div>
                </h4>
            </div>
        </div>
    )
}

export default Event;
