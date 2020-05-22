import React from 'react';


//one way to write HOC
const WithClass = (props) => (
  <div className={props.classes}>
  {props.children}
  </div>
);



export default WithClass;
