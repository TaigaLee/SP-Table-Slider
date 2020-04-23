import React from "react";
import { Table } from "semantic-ui-react";

function SPList(props) {
  const listData = props.data.map(dataPiece => (
    <Table.Row key={dataPiece.year}>
      <Table.Cell>{dataPiece.year}</Table.Cell>
      <Table.Cell> {dataPiece.totalReturn}</Table.Cell>
    </Table.Row>
  ));

  return (
    <Table sortable cell fixed>
      <Table.Body>{listData}</Table.Body>
    </Table>
  );
}

export default SPList;
