import React,  { useState } from 'react';
import Filter from './filter';
import ItemList from './itemList';
import Search from './search';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    filterAndSearch: {
        height: "5%",
        width: "100%"
    },
    categoryDropDown: {
        width: "20"
    },
    items: {
        height: "72vh"
    }
})
export default function FilterAndItems(prop){
    const classes = useStyles();
    const [category, setCategory] = useState('All Category');
    const [filter, setFilter] = useState('');
    return(
        <Grid container className={classes.filterAndSearch} spacing={2}>
            <Grid item>
                <Filter
                    className={classes.categoryDropDown}
                    categoryList = {prop.categoryList}
                    setCategory = {setCategory}
                    category = {category}
                />
            </Grid>
            <Grid item>
                <Search
                    setFilter={setFilter}
                />
            </Grid>
            <Grid item xs={12} className={classes.items}>
                
                <ItemList
                    itemList={prop.itemList}
                /> 
               
            </Grid>
        </Grid>
    );
}