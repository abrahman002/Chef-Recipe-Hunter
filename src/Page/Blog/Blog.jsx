import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-3xl mt-5 mb-5'>Question Answer</h1>
            <h1>Q.1 Tell us the differences between uncontrolled and controlled components.</h1>
            <p className='mb-5'>Ans:In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. </p>

            <h1>Q.2 How to validate React props using PropTypes.</h1>
            <p  className='mb-5'>Ans:Props are an important mechanism for passing the read-only attributes to React components. The props are usually required to use correctly in the component. If it is not used correctly, the components may not behave as expected. Hence, it is required to use props validation in improving react components. </p>

            <h1>Q.3 Tell us the difference between nodejs and express js.</h1>
            <p  className='mb-5'>Ans:NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications. </p>

            <h1>Q.4What is a custom hook, and why will you create a custom hook?</h1>
            <p  className='mb-5'>Ans:Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. </p>


        </div>
    );
};

export default Blog;