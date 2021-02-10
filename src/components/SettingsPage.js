import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from './elements/Button';
import { useHistory } from "react-router-dom";

const SettingsPage = () => {

    const [prefix, setPrefix] = useState("+");

    const handleSubmit = (evt) => {
    } 

    return (
        <div className="display">
            <div className="container">
                <Form onSubmit={handleSubmit} className="form">

                    <Form.Group controlId="formTitle" className="setting-group">
                        <Form.Label>Prefix</Form.Label>
                        <Form.Control className="setting-input" type="text" value={prefix} onChange={e => setPrefix(e.target.value)} placeholder="" />
                    </Form.Group>

                    {/* <Form.Group controlId="formTitle">
                        <Form.Label>Event Title</Form.Label>
                        <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter Event Title..." />
                        <Form.Text className="text-muted">
                        Include your student union's acronym or department name for your respective logo.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} value={description} onChange={e => setDescription(e.target.value)} placeholder="Come out to our awesome event where we will.... (Don't forget to include lots of emojis 😎)" />
                    </Form.Group>

                    <Form.Group controlId="formLocation">
                        <Form.Label>Event Location</Form.Label>
                        <Form.Control type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder="Event Location (eg. AQ 9001 or #meeting-room-1)" />
                    </Form.Group>
                    
                    <Form.Group controlId="formDate">
                        <Form.Label>Event Date</Form.Label>
                        <Form.Control type="date" value={date} onChange={e => setDate(e.target.value)} placeholder="" />
                    </Form.Group>

                    <Form.Group controlId="formStartTime">
                        <Form.Label>Start Time</Form.Label>
                        <Form.Control type="time" value={startTime} onChange={e => setStartTime(e.target.value)} placeholder="" />
                    </Form.Group>

                    <Form.Group controlId="formEndTime">
                        <Form.Label>End Time</Form.Label>
                        <Form.Control type="time" value={endTime} onChange={e => setEndTime(e.target.value)} placeholder="" />
                    </Form.Group> */}

                    <Button variant="primary" color="dodgerblue" type="submit" text="submit" />
                </Form>
            </div>
        </div>
    )
}

export default SettingsPage;
