import React from 'react';

const CreateElementComponent = () => {
    return (
        React.createElement('div', {
            style: {
                border: '2px solid black', borderRadius: '10px', padding: '10px', textAlign: 'center'
            }
        },
            React.createElement('h1', null, 'Create Element Component'),
            React.createElement('p', null, 'This functional component was constructed with the React.CreateElement() method in the return statement.'),
            React.createElement('img', {
                src: 'https://cdn-images-1.medium.com/max/1200/1*jJZHFQmhkq_7ohn18KrMhA.png', style: { height: '230px', width: 'auto' }
            })
        )
    );
};

export default CreateElementComponent;