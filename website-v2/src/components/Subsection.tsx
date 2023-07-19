import React, { FC } from 'react';

const Subsection = (props) => (
  <>
    <div className={"h-100 d-flex flex-column justify-content-center"}>
      <h1 className={"color-primary"}>{props.title}</h1>
      {props.children}
    </div>

  </>
)

export default Subsection;
