import React, { useState } from 'react';

import listSvg from './assets/img/list.svg';

import List from './components/List/index';
import AddList from './components/AddList';

import DB from './assets/db.json';

function App() {

  const [lists, setLists] = useState(
    DB.lists.map( item => {
      item.color = DB.colors.filter(color => color.id === item.colorId)[0].name;
      return item;
    } )
  );

  const onAddList = (obj) =>{

    const newList = [
      ...lists,
      obj
    ];

    setLists(newList);

  }

  return (
    <>
      <div className="todo">
        <div className="todo__sidebar">
          <List 
            items={[
              {
                icon: ( <img src={listSvg} alt="List icon" /> ),
                name: 'Всі завдання',
                active: true
              }
            ]}
          />

          <List items={lists} isRemovable />
          <AddList onAdd={onAddList} colors={DB.colors} />

        </div>
        <div className="todo_tasks">

        </div>
      </div>
    </>
  );
}

export default App;
