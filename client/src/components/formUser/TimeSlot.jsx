import React from 'react';
import { useGetTurnsQuery } from "../../services/apiSlices";

const TimeSlot = () => {
    const { data, isError, isLoading, error } = useGetTurnsQuery(); //ME PUEDO DVOLVER LA DATA, EL ERROR(TRUE FALSE), PROPIEDAD IS LOADING (TRUEFALSE), ERROR CUAL ES EL ERROR
    if (isLoading) return <div>Loading...</div>;
	else if (isError) return <div>Error:{error}</div>;
	// console.log(data)
  return (
    <div>TimeSlot</div>
  )
}

export default TimeSlot