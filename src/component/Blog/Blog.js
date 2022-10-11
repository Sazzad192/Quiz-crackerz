import React from 'react';

const Blog = () => {
    return (
        <div className='container my-3 text-start'>
            <div className="card my-4 p-3">
                <h5>Q. What is the Purpose of Route Apps?</h5>
                <p><b>Ans:</b> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div className="card my-4 p-3">
                <h5>Q. How does context work?</h5>
                <p><b>Ans:</b> Context is designed to share data that can be considered “global” for a tree of React Components. It sits next to React to props and state. In other words, Context provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
            </div>
            <div className="card my-4 p-3">
                <h5>Q. What about Use Refs in React?</h5>
                <p><b>Ans:</b> Refs are a function provided by React to access the DOM element and the React element that you might have created on your own. They are used in cases where we want to change the value of a child component, without making use of props and all.</p>
            </div>
        </div>
    );
};

export default Blog;