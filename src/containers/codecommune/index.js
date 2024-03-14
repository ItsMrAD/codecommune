import React from 'react';
import Sidebar from './Sidebar';
import Main from './Main';

function index() {
    return (
        <div className='codecommune-index'>
            <div className='codecommune-index-content'>
                <Sidebar />
                <Main />
            </div>
        </div>
    );
}

export default index;