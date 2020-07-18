import React, {useState} from 'react';
import AddCategory from "./AddCategory";
import GiftGrid from "./GiftGrid";

const GiftExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Money'])


    return (
        <>
            <h2>Gift Expert App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            {categories.map((category, i) => (
                <GiftGrid key={i} category={category}/>
            ))}

        </>
    );
};

export default GiftExpertApp;
