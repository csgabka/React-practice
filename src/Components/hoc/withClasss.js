import React from 'react';


//another way to create HOC, wrapping my component
//this is NOT a functional component. it is a function.
//{...props} spread allows us to receive all the props
const withClasss = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent { ...props } />

    </div>
  );
}

export default withClasss;
