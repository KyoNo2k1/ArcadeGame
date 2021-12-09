import React  from "react";
import "./CategoriesCell.css"
import "../GameCell/game-cell"


function CategoriesCell({categories,filter}){
    return (
            <div className="game-category">
                <a className="game-category-link" onClick={(e) => filter(`${categories.CategoryName}`,e)}>
                    {categories.CategoryName}
                </a>
            </div>
    );
}

export default CategoriesCell;