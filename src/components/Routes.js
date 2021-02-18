import React from 'react';
import { Switch, Route } from 'react-router-dom';
import useToken from './hooks/useToken';
import { usePassword } from '../res/config.json';

/**
 * Import all page components here
 */
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import AddEventPage from './AddEventPage';
import DocumentationPage from './DocumentationPage';
import SettingsPage from './SettingsPage';

const Routes = () => {

    const { token, setToken } = useToken();

    if(!token && usePassword) {
      return <LoginPage setToken={setToken} />
    }

    return (
    <Switch>

        <Route path="/./newEvent">
          <AddEventPage />
        </Route>

        <Route path="/./documentation">
          <DocumentationPage />
        </Route>

        <Route path="/./settings">
          <SettingsPage />
        </Route>

        <Route path="/">
          <MainPage />
        </Route>

    </Switch>
    )
}

export default Routes;
