import { React, useEffect, useState } from 'react';
const [users, setUsers] = useState()
const [isLoading, setIsLoading] = useState()
const [error, setError] = useState()

useEffect(()=>{
    fetch("http://localhost:3000/api/users")
    .then((res)=>{
        if(!res.ok){
            throw new Error("failed to fetch");
        }
        return res.json();
    })
    .then((results)=>{
        setUsers(results.users);
        setIsLoading(false);
        setError(null);
    })
    .catch((err)=>{
        
    })
})

