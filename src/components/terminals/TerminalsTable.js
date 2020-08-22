import React, { useContext } from 'react';
import { DataContext } from '../../context/dataContext';

const TerminalsTable = () => {
  const { state, DeleteTerminal } = useContext(DataContext);
  return (
    <div className="terminals__table-outer">
      <table className="terminals__table">
          <tbody>
        <tr>
          <th>Название терминала</th>
          <th>Описание</th>
          <th></th>
        </tr>
        {state.terminals.map((terminal) => {
          return (
            <tr key={terminal.id}>
              <td>{terminal.name}</td>
              <td>{terminal.description}</td>
              <td>
                <button
                  onClick={() => DeleteTerminal(terminal.id)}
                  className="terminals__table-button"
                >
                 <i class="material-icons">delete_sweep</i>
                </button>
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
};

export default TerminalsTable;
