import React from 'react'
// import axios from 'axios'
import "./GameCategories.css";
import CategoriesCell from '../CategoriesCell/CategoriesCell';

function GameCategories({listCategory,filter}){

    const allCategories = listCategory.map(categories => {
        return (
            <CategoriesCell categories={categories} filter={filter}/>
        );
    })
    
    return (
        <div className="GameCategories">
            <h3 className="SectionTitle">Game Categories</h3>
            <div className = "CategoryCell" id="CategoryCell" >
                {allCategories}
            </div>
        </div>
    );
};

export default GameCategories;