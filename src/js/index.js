import React from 'react';
import reactDOM from 'react-dom';
import App from './app';
import Footer from 'components/Footer';

reactDOM.render(
    <React.Fragment>
        <App>
            <Footer />
        </App>
    </React.Fragment>, window.root);
