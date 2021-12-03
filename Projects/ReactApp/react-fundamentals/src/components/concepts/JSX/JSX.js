import NormalComponent from "./ChildComponents/NormalComponent";
import CreateElementComponent from "./ChildComponents/CreateElementComponent";

const JSX = () => {
    return (
        <div className='main'>
            <div className='mainDiv'>
                <h1>JSX</h1>
                <p>JSX is a JavaScript extension syntax used in React to easily write HTML and JavaScript
                    together.</p>
                <dl>
                    <dt>Resembles HTML</dt>
                    <dd>JSX is a syntax extension of JavaScript, and is used to describe what the UI (use
                        r interface) looks like. JSX produces React "elements".
                    </dd>
                    <dt>React Elements</dt>
                    <dd>React Elements are used to construct and update the DOM, or what you see on the sc
                        reen.
                    </dd>
                    <dt>Not required</dt>
                    <dd>Although not required by React, JSX is the widespread de facto go-to for most Reac
                        t developers - as JSX acts as a helpful visual aid when working with UI in JavaScript code.
                    </dd>
                </dl>
                <hr />
                <NormalComponent />
                <br />
                <CreateElementComponent />
            </div>
        </div>
    );
};

export default JSX;
