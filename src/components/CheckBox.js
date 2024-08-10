import React, { useState } from 'react';

const CheckBox = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    function getData(e) {
        e.preventDefault();
        alert(`Username: ${username}\nSelected Language: ${userData}\nCheckbox Checked: ${isChecked}`);
    }

    function clearData() {
        setUsername('');
        setUserData('');
        setIsChecked(false);
    }

    return (
        <div>
            <form onSubmit={getData}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /><br /><br />

                <select value={userData} onChange={(e) => setUserData(e.target.value)}>
                    <option value="">Select a language</option>
                    <option value="JAVA">JAVA</option>
                    <option value="C++">C++</option>
                    <option value="JavaScript">JavaScript</option>
                </select><br /><br />

                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                /> Mark here <br /><br />

                <button type="submit">Submit</button>
                <button type="button" onClick={clearData}>Clear</button>
            </form>
        </div>
    );
};

export default CheckBox;
