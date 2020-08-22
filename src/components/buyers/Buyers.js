import React, { useContext, useState } from 'react';
import {     Link, useRouteMatch } from 'react-router-dom';
import { DataContext } from '../../context/dataContext';
import Pagination from './Pagination';

const Buyers = () => {
  let match = useRouteMatch();
  const { state } = useContext(DataContext);

  
  const [previousPage, setPreviousPage] = useState(1);
  const [paginationIndex, setPaginationIndex] = useState(0);
  
  let cur = 1;
  let countOfPages = Math.ceil(state.buyers.length / 5);
  let paginationArray = [];
  for (let i = 1; i <= countOfPages; i++) {
    paginationArray.push(i);
  }

  const [activeClass, setActiveClass] = useState(0);
  const [isPaginationShown, setIsPaginationShown] = useState(false);

  const [buyers, setBuyers] = useState([...state.buyers]);

  const [sortParams, setSortParams] = useState({
    averageCheck: 1,
    purchaseCount: 1,
    totalIncome: 1,
  });

  const handleInput = (e) => {
    const value = e.target.value.toLowerCase();
    setBuyers(state.buyers.filter((buyer) => buyer.name.toLowerCase().indexOf(value) > -1));
  };

  const sortColumn = (property) => {
    const copyBuyers = [...buyers];
    const sortIndex = sortParams[property];
    setBuyers(copyBuyers.sort((a, b) => sortIndex * a[property] - sortIndex * b[property]));
    setSortParams((state) => ({ ...state, [property]: -state[property] }));
  };

  const chooseDisplayCount = (number = state.buyers.length) => {
    const copyBuyers = [...state.buyers];
    copyBuyers.length = number;
    if (number === 5) {
      setIsPaginationShown(true);
    }
    setBuyers(copyBuyers);
  };
  const handlePagination = (e) => {
    //Прошу прощения за говнокод, забыл про пагинацию, решил написать по-быстрому
    //не оставалось времени разобраться, как ее надо правильно писать

    if (+e.target.value > 2 && +e.target.value < paginationArray.length) {
      if (+e.target.value > previousPage) {
        setPreviousPage(+e.target.value);
        cur = +e.target.value;
        setPaginationIndex(+e.target.value - 2);
        setActiveClass(+e.target.id - 1);
        setBuyers(state.buyers.slice((cur - 1) * 5, cur * 5));
        return;
      }
    }
    if (+e.target.value > 1 && +e.target.value < paginationArray.length - 1) {
      if (+e.target.value < previousPage) {
        setPreviousPage(+e.target.value);
        cur = +e.target.value;
        setPaginationIndex(+e.target.value - 2);
        setActiveClass(+e.target.id + 1);
        setBuyers(state.buyers.slice((cur - 1) * 5, cur * 5));
        return;
      }
    }

    setPreviousPage(+e.target.value);
    cur = +e.target.value;
    setActiveClass(e.target.id);
    setBuyers(state.buyers.slice((cur - 1) * 5, cur * 5));
  };

  return (
    <div className="buyers">
      <div className="buyers__inner">
        <div className="buyers__count-panel">
          <h2>Отобразить покупателей: </h2>
          <div className="buyers__count-panel-buttons">
            <button onClick={() => chooseDisplayCount()}>Всех </button>
            <button onClick={() => chooseDisplayCount(10)}>10</button>
            <button onClick={() => chooseDisplayCount(5)}>5</button>
          </div>
        </div>

        <input
          onChange={handleInput}
          type="text"
          className="buyers__name-filter"
          placeholder="Фильтр по имени.."
          title="Type in a name"
        />
        <table className="buyers__table">
          <tbody>
          <tr>
            <th>ID покупателя</th>
            <th>Имя покупателя</th>
            <th style={{cursor: 'pointer'}} onClick={() => sortColumn('averageCheck')}>Средний чек</th>
            <th style={{cursor: 'pointer'}} onClick={() => sortColumn('purchaseCount')}>Количество покупок</th>
            <th style={{cursor: 'pointer'}} onClick={() => sortColumn('totalIncome')}>Общая выручка</th>
          </tr>
          {buyers.map((buyer) => {
            return (
              <tr key={buyer.id}>
                <td>
                  <Link className='buyers__table_link' to={`${match.url}/${buyer.id}`}>{buyer.id}</Link>
                </td>
                <td>{buyer.name}</td>
                <td  >{buyer.averageCheck}</td>
                <td >{buyer.purchaseCount}</td>
                <td >{buyer.totalIncome}</td>
              </tr>
            );
          })}
          </tbody>
        </table>

        {isPaginationShown ? (
          <Pagination
            handlePagination={handlePagination}
            activeClass={activeClass}
            paginationArray={paginationArray}
            paginationIndex={paginationIndex}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Buyers;
