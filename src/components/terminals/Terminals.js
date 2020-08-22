import React, {useState, useContext} from 'react';
import TerminalsTable from './TerminalsTable';
import { DataContext } from '../../context/dataContext';

const Terminals = () => {
    const {AddTerminal} = useContext(DataContext);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e)=>{
        const value = e.target.value;
        switch(e.target.name){
            case 'name':
                setName(value);
                break;
            case 'description':
                setDescription(value);
                break;
        }
     
    }
    const handleSubmit = e =>{
        e.preventDefault();
        
        const terminal = {
            id: Date.now(),
            name,
            description
        }
        AddTerminal(terminal);
        setName('');
        setDescription('');
    } 
  return (
    <div className="terminals">
      <div className="terminals__inner">
        <form onSubmit={handleSubmit} className="terminals__form">
          <label htmlFor="name">Название терминала</label>
          <input maxLength="40" onChange={handleChange} type="text"  name="name" placeholder="Введите название..." value={name} required/>

          <label htmlFor="description">Описание</label>
          <textarea maxLength="250"  onChange={handleChange}  name="description" placeholder="Введите описание..." value={description} required></textarea>

          <input type="submit" value="Добавить" />
        </form>
        <TerminalsTable />
      </div>
    </div>
  );
};

export default Terminals;
