import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../../context/dataContext';
import avatar from '../../images/img_avatar.png';
const Buyer = () => {
  let { id } = useParams();
  const { state } = useContext(DataContext);
  const buyer = state.buyers.find((buyer) => buyer.id === +id);

  return (
    <div className="buyer">
      <div className="buyer__inner">
        <div className="buyer__image-container">
          <img className="buyer__img" src={avatar} alt="Avatar" />
        </div>
        <div className="buyer__container">
          <h2>
            <b>{buyer.name}</b>
          </h2>
          <ul className="buyer__container-list">
            <li>
              <b>ID покупателя: </b> {buyer.id}
            </li>

            <li>
              <b>Средний чек: </b> {buyer.averageCheck}
            </li>
            <li>
              <b>Количество покупок: </b> {buyer.purchaseCount}
            </li>
            <li>
              <b>Общая выручка: </b> {buyer.totalIncome}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Buyer;
