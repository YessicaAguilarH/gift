import React, { useState } from 'react';
import { GifGrid } from './components/GifGrid';
import { AddCategory } from './components/AddCategory';

export const GiftSearchApp = () => {

    //const categories = ['One Piece', 'Naruto', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Piece']);

    //const handleAdd = () =>{
        //setCategories(['Attack on Titan', ...categories ]);
        //setCategories( cats => [ ...cats, 'Attack on Titan' ]);
    //}

    return(
        <div>
            <h2>GifSearchApp</h2>
            <hr/>

            <AddCategory setCategories={setCategories}/>

            <ol>
                {
                    categories.map((category) => (
                        <GifGrid
                        key = { category }    
                        category = { category }
                        />
                    ))
                }
            </ol>
        </div>
    );
};