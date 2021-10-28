import React from 'react';
import classNames from 'classnames';

import removeSVG from '../../assets/img/remove.svg';

import './List.scss'

import Tags from '../Tags';

const List = ({ items, isRemovable, click }) =>{
    return(
        <ul onClick={click} className="list">
            
            {items.map( (item, index) => (
                    
                <li 
                key={index} 
                className={classNames(item.className, {'active': item.active})
                }>
                    <i>
                        {item.icon ? (
                            item.icon
                        ) : (
                            <Tags color={item.color} />
                        )}
                    </i>
                    <span>{item.name}</span>
                    { isRemovable && 
                        <img 
                            className="list__remove-icon" 
                            src={removeSVG} 
                            alt="Remove icon" 
                        /> 
                    }
                </li>
            ))}
        </ul>
    );
}

export default List;