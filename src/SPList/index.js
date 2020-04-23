import _ from "lodash";
import React from "react";
import { Table } from "semantic-ui-react";
import "./index.css";

// class SPList extends React.Component {
//   const listData = props.data.map(dataPiece => (
//     <Table.Row key={dataPiece.year}>
//       <Table.Cell>{dataPiece.year}</Table.Cell>
//       <Table.Cell> {dataPiece.totalReturn}</Table.Cell>
//     </Table.Row>
//   ));
//
//   return (
//     <Table sortable cell fixed>
//       <Table.Body>{listData}</Table.Body>
//     </Table>
//   );
// }

/* ************************************************************** */

class SPList extends React.Component {
  constructor(props) {
    super();

    this.state = {
      column: null,
      data: _.reverse(props.data),
      direction: null
    };
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: "ascending"
      });

      return;
    }

    this.setState({
      data: data.reverse(),
      direction: direction === "ascending" ? "descending" : "ascending"
    });
  };

  render() {
    const { column, data, direction } = this.state;

    return (
      <div className="SPList-div">
        <Table sortable celled fixed size="small">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === "year" ? direction : null}
                onClick={this.handleSort("year")}
              >
                Year
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === "totalReturn" ? direction : null}
                onClick={this.handleSort("totalReturn")}
              >
                Total Return
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {_.map(data, ({ year, totalReturn }) => (
              <Table.Row key={year}>
                <Table.Cell>{year}</Table.Cell>
                <Table.Cell>{totalReturn}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default SPList;
