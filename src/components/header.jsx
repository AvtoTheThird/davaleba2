import React from "react";

function header(props) {
  console.log(props.props);
  return (
    <nav>
      {props.props.map((prop) => {
        return <a>{prop}</a>;
      })}
    </nav>
  );
}

export default header;
