import Sequelize from 'sequelize';

class Database  {

    constructor() {

        // Get database
        this.sequelize = new Sequelize('database', 'user', 'password', {
            host: 'localhost',
            dialect: 'sqlite',
            logging: false,
            // SQLite only
            storage: 'data/database.sqlite',
        });
        
        /*
        * equivalent to: CREATE TABLE events(
        * id INT,
        * name VARCHAR(255),
        * description TEXT,
        * date VARCHAR(255),
        * usage INT
        * );
        */
        this.events = this.sequelize.define('events', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true
            },
            title: Sequelize.STRING,
            description: Sequelize.TEXT,
            date: Sequelize.DATEONLY,
            startTime: Sequelize.STRING,
            endTime: Sequelize.STRING,
            location: Sequelize.STRING,
            URL: Sequelize.STRING
        });

        this.musicUsers = this.sequelize.define('musicUsers', {
            user: {
                type: Sequelize.STRING,
                primaryKey: true
            }
        });
    }

    /**
     * Sync collections with Database
     */
    sync() {
        this.events.sync();
        this.musicUsers.sync();
    }

    /**
     * Get list of all events from Events collection in Database
     */
    async getEvents() {
        const eventsList = await this.events.findAll({ order: [['date', 'DESC']] });
        console.log("Sent events.");
        return eventsList;
    }

    /**
     * Add event to Events collection in Database
     */
    async addEvent(eventTitle, eventDescription, eventLocation, eventDate, eventStartTime, eventEndTime, eventURL) {
        const newEvent = await this.events.create({
            title: eventTitle,
            description: eventDescription,
            location: eventLocation,
            date: eventDate,
            startTime: eventStartTime,
            endTime: eventEndTime,
            URL: eventURL,
        });
        console.log("Created new event.");
        return newEvent;
    }

    /**
     * Remove event by ID from Events collection in Database
     */
    async deleteEvent(eventId) {
        const rowCount = await this.events.destroy({ where: { id: eventId } });
        if (!rowCount) { 
            return '```diff\n- ERROR: That event does not exist.\n```';
        }
        console.log("Deleted event.");
        return '```diff\n+ Event successfully deleted.\n```';
    }

    /**
     * Get list of users from MusicUser collection in Database
     */
    async getUsers() {
        const usersList = await this.musicUsers.findAll();
        console.log("Sent list of users in database.");
        return usersList;
    }

    /**
     * Add user to MusicUser collection in Database
     */
    async addUser(userId) {
        try {
            const newUser = await this.musicUsers.create({
                user: userId
            });
        } catch {
            throw 'User is already in Database.';
        }
    }
}

export default Database;