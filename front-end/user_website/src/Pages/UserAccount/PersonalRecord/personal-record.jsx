import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Table,
  Row,
  Col,
} from "reactstrap";

function PersonalRecord() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>
                 <h1>Record</h1>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>STT</th>
                        <th>Game</th>
                        <th>Date-time</th>
                        <th>HighScore</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>2048</td>
                        <td>14/11/2021</td>
                        <td>2000</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>FlappyBird</td>
                        <td>13/11/2021</td>
                        <td>25</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Pacman</td>
                        <td>10/11/2021</td>
                        <td>1500</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Sudoku</td>
                        <td>15/11/2021</td>
                        <td>3200</td>
                      </tr>
                      <tr>
                      <td>5</td>
                        <td>Tower Built</td>
                        <td>16/11/2021</td>
                        <td>1800</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }


export default PersonalRecord;
