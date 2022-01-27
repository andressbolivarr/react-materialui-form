import React from 'react'
import { FormControl, FormLabel, Button } from '@material-ui/core';

export default function TimeButtons(props) {

    const { label, items } = props;
console.log(items);
items.map(item=>console.log(item))
    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
                    { items && items.map (  
                        item => (<Button variant='contained' key={item.id}> {item.title}</Button>)
                    )}
        </FormControl>
    )   
}
