import React from 'react';

function useLocarStorage(itemName, initialValue) {
    const[item, setItem] = React.useState(initialValue);
    const[loading, setLoading] = React.useState(true);
    const[error, setError] = React.useState(false);
    React.useEffect(
      () => {
        setTimeout(() => {
         try{
          const localStorageItem = localStorage.getItem(itemName)
          let parsedItem;
          
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = [];
          } else {
            parsedItem = JSON.parse(localStorageItem)
          }
          setItem(parsedItem);
          setLoading(false);
         }catch(error){
          setError(error);
         }
         
        }, 1000);
      }
  
    );
    const saveItem = (newItem) => {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      }
      return {
        item,
        saveItem,
        loading,
        error
    };
    }

    export{useLocarStorage}