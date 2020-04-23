import React from "react";

function SPList(props) {
  console.log(props.data);

  const listData = props.data.map(dataPiece => (
    <li>
      {dataPiece.year} {dataPiece.totalReturn}{" "}
    </li>
  ));

  return <div>{listData}</div>;
}

export default SPList;
