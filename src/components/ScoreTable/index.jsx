import React from "react";

const ScoreTable = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Pseudo</th>
                <th scope="col">Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>854</td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>845</td>
              </tr>
              <tr>
                <td>Larry</td>
                <td>56</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ScoreTable;
