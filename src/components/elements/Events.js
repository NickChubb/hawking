import Event from './Event';

const Events = ({ events, onDelete }) => {
    return (
        <>
            {events.map((event, i) => (
                <Event key={i} event={event} onDelete={onDelete}/>
            ))}
        </>
    )
}

export default Events;
