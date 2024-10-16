import React from 'react';
import './css/TodoTemplate.scss';
import GreedyLogo from "../greedySquareImage.jpg"
const TodoTemplate = ( {children} ) => {
    return (
        <div className='TodoTemplate'>
          <div className="app-title">
            <img src={GreedyLogo} alt="greedyLogo" className="greedyLogo" />
            <p>일정관리</p>
          </div>
          <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;