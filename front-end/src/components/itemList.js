import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Item from './item';


export default function ItemList(prop){

    if (prop.category === "All Category") {
        return (
            <InfiniteScroll
                pageStart={0}
                loadMore={false}
                hasMore={false}
                style={{
                    paddingTop: 15,
                    height: '69vh',
                    overflow: 'visible'
                }}
                loader={<div className="loader" key={0}>Loading ...</div>}
                useWindow={false}
            >
                {prop.itemList.map(item => {
                    let categoryName;
                    if (item.categoryId === 1){
                        categoryName = "Red";
                    } else {
                        categoryName = "Blue";
                    }
                    if (!prop.query) {
                        return(
                            <Item 
                                title={item.eventName}
                                category={categoryName}
                                summary={item.eventSummary}
                            />
                        )
                    }else if (prop.query && (item.eventKeyword.includes(prop.query) || item.eventName.includes(prop.query))) {
                        return(
                            <Item 
                                title={item.eventName}
                                category={categoryName}
                                summary={item.eventSummary}
                            />
                        )
                    }
                })}
            </InfiniteScroll>
        )
    } else {
        return (
            <InfiniteScroll
                dataLength={9}
                next={12}
                hasMore={true}
                style={{
                    paddingTop: 15,
                    height: '69vh',
                    overflow: 'visible'
                }}
            >   
                {prop.itemList.map(item => {
                    let categoryName;
                    if (item.categoryId === 1){
                        categoryName = "Red";
                    } else {
                        categoryName = "Blue";
                    }
                    if (!prop.query){
                        if (categoryName === prop.category){
                            return(
                                <Item 
                                    title={item.eventName}
                                    category={categoryName}
                                    summary={item.eventSummary}
                                />
                            )
                        }
                    } else {
                        if (prop.query && (item.eventKeyword.includes(prop.query) || item.eventName.includes(prop.query)) && categoryName === prop.category) {
                            return(
                                <Item 
                                    title={item.eventName}
                                    category={categoryName}
                                    summary={item.eventSummary}
                                />
                            )
                        }
                    }
                })}
            </InfiniteScroll>
        )
    }
}