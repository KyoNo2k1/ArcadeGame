import React from 'react'

const Categories = ({categoriesData}) => {
    return (
        <datalist id="category">
        {categoriesData.map(category => (
                <option key={category.id} value={category.CategoryName}></option>
            ))}
        </datalist>
    )
}
export default Categories
