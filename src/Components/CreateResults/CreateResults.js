import React from "react";
import CreateCard from "../CreateCard/CreateCard"
import './CreateResults.css'

const CreateResults = ({ results, setFormState, formState }) => {

	return (
		<div className='scrolling-wrapper'>
			{results.map((result) => {
                return <CreateCard key={result.id} result={result} setFormState={setFormState} formState={formState} />
            })}
		</div>
	);
};

export default CreateResults;
