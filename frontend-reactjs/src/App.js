import React, { useState } from 'react';
import CalendarMain from "./components/CalendarMain";
import Events from "./components/Events";
import "./App.css"

function App() {
    const [selectedDate, setSelectedDate] = useState(new Date())

    return (
        <div className="d-flex flex-row">
            <div id="panel-calendar">
                <CalendarMain
                    onDateChange = {setSelectedDate}
                />
            </div>
            <div className='flex-grow-1'>
                <Events
                    selectedDate = {selectedDate}
                />
            </div>
        </div>
    );
}

export default App;