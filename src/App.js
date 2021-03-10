import React from 'react';
import {
    Tabs,
    Tab,
    ButtonGroup,
    ToggleButton,
    Container,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    const tabsId = 'uncontrolled-tab-example';
    return (
        <Tabs defaultActiveKey="home" id={tabsId}>
            <Tab eventKey="home" title="Home">
                Home
            </Tab>
            <Tab eventKey="profile" title="Profile">
                Profile
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
                Contact
            </Tab>
        </Tabs>
    );
}

export default App;