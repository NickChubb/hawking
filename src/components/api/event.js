import { homepage } from '../../../package.json';

// Fetch list of events from server. 
export const fetchEvents = async () => {
    let res = await fetch(`${homepage}/api/events/getEvents`);
    let data = await res.json();
    // console.log(data);
    return data;
}

// Fetch list of events from server. 
export const addEvent = async (title, description, location, date, startTime, endTime) => {

    const event = {
        eventTitle: title,
        eventDescription: description,
        eventLocation: location,
        eventDate: date,
        eventStartTime: startTime,
        eventEndTime: endTime
    }

    let res = await fetch(`${homepage}/api/events/addEvent`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
    });
    let data = await res.json();
    // console.log(data);
    return data;
}

// Delete event from server. 
export const deleteEvent = async (id) => {
    let res = await fetch(`${homepage}/api/events/deleteEvent`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: id})
    });
    let data = await res.json();
    console.log(data);
    return data;
}

// Update event calendar on Discord. 
export const updateCalendar = async () => {
    let res = await fetch(`${homepage}/bot/updateCalendar`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let data = await res.json();
    console.log(data);
    return data;
}