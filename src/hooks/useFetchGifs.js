import {useEffect, useState} from "react";
import {getGifts} from "../helpers/getGifts";

export const UseFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGifts(category).then(imgs => (


            // console.log(imgs)
            setState({
                data: imgs,
                loading: false
            })


        ))
    }, [category])

    return state;
};
