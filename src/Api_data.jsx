import React from 'react'
import {
    Outlet,
    Link,
    useLoaderData,
  } from "react-router-dom";

export default function Api_data() {
    const { contacts } = useLoaderData();
    console.log("contacts",contacts);
  return (
    <div>
        Tayyab
    </div>
  )
}
