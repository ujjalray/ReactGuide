//input field raf or javaScript are madhone controlled hoi ;

import React, { useRef } from 'react';

const UncontrolledComponent = () => {
    let inputRef = useRef();

    function submitForm(e) {
        e.preventDefault();
        console.log(inputRef.current.value);
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <input type="text" placeholder='Enter your Name' ref={inputRef} /><br /><br />
                <input type='submit' />
            </form>
        </div>
    );
}

export default UncontrolledComponent;
