import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import { homepage } from '../../../package.json';

const Header = () => {
    return (
        <>
            <div className="header">
                <h1>Hawking<small> - The SFU Science Discord Bot</small></h1>
                <div className="button-container">
                    <Link to="/">
                        <Button color="dodgerblue" text="🤖 Dashboard" />
                    </Link>
                    <Link to="/event">
                        <Button color="dodgerblue" text="🎉 Add event to Event Calendar" />
                    </Link>
                    <Link to="/documentation">
                        <Button color="dodgerblue" text="📜 Documentation" />
                    </Link>
                    <a href="https://github.com/NickChubb/science-bot">
                        <Button color="dodgerblue" text="🐙 GitHub" />
                    </a>
                    <Link to="/settings">
                        <Button color="dodgerblue" text="⚙️ Settings" />
                    </Link>
                    <Button color="dodgerblue" text="🗄 View Database" disabled={true} />
                </div>
            </div>
        </>
    )
}

export default Header;
