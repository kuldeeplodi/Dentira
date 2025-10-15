"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { syncUser } from "../lib/actions/users";

function UserSync  ()  {
 const {isSignedIn,isLoaded} = useUser();
 useEffect(()=>{
    const handleSync=async()=>{
        if(isLoaded && isSignedIn){
            try {
                await syncUser();
            } catch (error) {
                console.log("failed to sync user:",error)
            }
        }

    }
    handleSync();
 },[isLoaded,isSignedIn])

 return null;
}

export default UserSync
