const NormalComponent = () => {
    return (
        <div style={{
            border: '2px solid black', borderRadius: '10px', padding: '10px', textAlign:
                'center'
        }}>
            <h1>Normal Functional Component</h1>
            <p>This component was constructed with JSX in the <i>return</i> of a functional component.</p>
            <img style={{ height: '230px', width: 'auto' }} src='https://pbs.twimg.com/media/DOzL82mXkAA0zFs.jpg' alt="JSX" />
        </div>
    );
};
export default NormalComponent;
