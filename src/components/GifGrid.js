import { useFetchGifs } from '../hooks/useFetchGifs';
//import React, { useEffect } from "react";
import { GifGridItem } from "./GifGridItem";
//import { useState } from "react";

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category );

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{ category }</h3>
            { loading && <p className='animate__animated animate__flash'>Loading..</p>  }
            <div className='cardGrid'>
                <ol>
                    {
                        images.map((img) =>(
                            <GifGridItem
                                key={ img.id }
                                { ...img }
                            
                            />
                        ))
                    }
    
                </ol>
            </div>        
         
        </>
        
    );
};