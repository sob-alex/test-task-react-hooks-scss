import React, { useReducer } from 'react';
import { dataReducer } from './dataReducer';
import { DataContext } from './dataContext';
import { addAvatar, addTerminal, deleteTerminal } from './dataActions';

const DataState = ({ children }) => {
  const initialState = {
    avatarUrl: null, 
    terminals: [],
    buyers: [
      { id: 1, name: 'Боб', averageCheck: 545, purchaseCount: 4, totalIncome: 2180 },
      { id: 2, name: 'Андрей', averageCheck: 765, purchaseCount: 2, totalIncome: 1530 },
      { id: 3, name: 'Михаил', averageCheck: 445, purchaseCount: 7, totalIncome: 3115 },
      { id: 4, name: 'Алексей', averageCheck: 648, purchaseCount: 4, totalIncome: 2592 },
      { id: 5, name: 'Анна', averageCheck: 555, purchaseCount: 3, totalIncome: 1665 },
      { id: 6, name: 'Катерина', averageCheck: 531, purchaseCount: 12, totalIncome: 6372 },
      { id: 7, name: 'Афанасий', averageCheck: 2000, purchaseCount: 2, totalIncome: 400 },
      { id: 8, name: 'Глеб', averageCheck: 120, purchaseCount: 18, totalIncome: 216 },
      { id: 9, name: 'Александр', averageCheck: 500, purchaseCount: 7, totalIncome: 3500 },
      { id: 10, name: 'Михаил', averageCheck: 452, purchaseCount: 6, totalIncome: 2712 },
      { id: 11, name: 'Александр', averageCheck: 1500, purchaseCount: 6, totalIncome: 9000 },
      { id: 12, name: 'Алексей', averageCheck: 995, purchaseCount: 8, totalIncome: 7960 },
      { id: 13, name: 'Антон', averageCheck: 785, purchaseCount: 12, totalIncome: 9420 },
      { id: 14, name: 'Олег', averageCheck: 673, purchaseCount: 10, totalIncome: 6730 },
      { id: 15, name: 'Ксения', averageCheck: 1745, purchaseCount: 4, totalIncome: 6980 },
      
    ],
  };
  const [state, dispatch] = useReducer(dataReducer, initialState);
  window.st = state;

  const AddAvatar = (avatarUrl) => dispatch(addAvatar(avatarUrl));
  const AddTerminal = (terminal) => dispatch(addTerminal(terminal));
  const DeleteTerminal = (id) => dispatch(deleteTerminal(id));

  const shared = {
    state,
    AddAvatar,
    AddTerminal,
    DeleteTerminal,
  };
  return <DataContext.Provider value={shared}>{children}</DataContext.Provider>;
};

export default DataState;
