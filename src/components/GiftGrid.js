import React from 'react';
import {UseFetchGifs} from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GiftGrid = ({category}) => {

    const {data, loading} = UseFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Cargando...</p>}
            <div className={'cardGrid'}>
                {data.map((image) => (
                    <GifGridItem key={image.id} img={image}/>
                ))}
            </div>
        </>
    );
};

export default GiftGrid;
