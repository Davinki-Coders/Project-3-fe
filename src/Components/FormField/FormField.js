import React from 'react';

//DUMMY COMPONENT FOR STYLING, DO NOT USE, FORM FIELDS WILL BE CONVERTED TO CUSTOM COMPONENTS
const FormField = ({
	type,
	id,
	err,
	required = false,
	handleChange,
	value,
}) => {
	return (
		<>
			<input
				className={!err || 'err'}
				required={required}
				type={type}
				id={id}
				value={value}
				onChange={handleChange}
			/>
			{!err || <p className='err-text'>*{err}</p>}
		</>
	);
};

export default FormField;
