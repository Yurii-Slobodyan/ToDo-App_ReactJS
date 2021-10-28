import React, {useState} from 'react';
import List from '../List';
import Tags from '../Tags';

import './AddListButton.scss';

import addSvg from '../../assets/img/add.svg';
import closeSvg from '../../assets/img/close.svg';

const AddList = ( {colors, onAdd} ) => {

    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedColor, selectColor] = useState(colors[0].id);
    const [inputValue, setInputValue] = useState('');

    const onClose = () =>{

        setVisiblePopup(false);
        setInputValue('');
        selectColor(colors[0].id);

    }

    const AddList = () =>{

        if( !inputValue ){
            alert("Введіть назву списку!");
            return;
        }

        const color = colors.filter( c => c.id === selectedColor )[0].name;
        onAdd( 
            { 
                id: Math.random(), 
                name: inputValue, 
                color: color 
            } 
        );

        onClose();

    }

    return(
        <div className="add-list">
            <List click={ ()=>{
                setVisiblePopup(true);
            } } 
                items={[
                    {
                        className: 'list__add-button', 
                        icon: ( <img src={addSvg} alt="Create icon" /> ),
                        name: 'Створити список'
                    }
                ]}
            />
            {visiblePopup && ( 
                <div className="add-list__popup"> 
                    <img
                        onClick={onClose} 
                        src={closeSvg} 
                        alt="Close button" 
                        className="add-list__popup-close-btn" 

                    />

                    <input 
                        value={inputValue} 
                        onChange={ event => setInputValue(event.target.value) } 
                        className="field" type="text" placeholder="Назва списку" 
                    />  

                    <div className="add-list__popup-colors">
                        {colors.map(color => (
                            <Tags 
                                onClick={ () => selectColor(color.id) } 
                                key={color.id} 
                                color={color.name}
                                className={selectedColor === color.id && 'active'}  
                            />
                        ))}
                    </div>
                    <button onClick={AddList} className="button">Додати</button>
                </div>  
            )}
        </div>
    );
    
};

export default AddList;