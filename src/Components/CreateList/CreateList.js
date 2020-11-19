import React, { useState } from 'react';

const CreateList = () => {
    const [formState, setFormState] = useState()

    // form 
    // list name, description, imgURL, author/owner, [games array]


    return (
        <div className='container center'>
            <form className="form-stack">
                <h1>Create List</h1>
            </form>
        </div>
    );
};

export default CreateList;