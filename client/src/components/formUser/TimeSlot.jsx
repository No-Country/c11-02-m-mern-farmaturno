import React from 'react';
import { useGetTurnsQuery } from "../../services/apiSlices";

const TimeSlot = () => {
    const { data, isError, isLoading, error } = useGetTurnsQuery(); //ME PUEDO DVOLVER LA DATA, EL ERROR(TRUE FALSE), PROPIEDAD IS LOADING (TRUEFALSE), ERROR CUAL ES EL ERROR
    if (isLoading) return <div>Loading...</div>;
	else if (isError) return <div>Error:{error}</div>;
  const horarios = {
    "08:00": 0,
    "09:00": 0,
    "10:00": 0,
    "11:00": 0,
    "12:00": 0,
    "13:00": 0,
    "14:00": 0,
    "15:00": 0,
    "16:00": 0,
    "17:00": 0,
    "18:00": 0,
    "19:00": 0,
  };
  if (data) {
    data.forEach((item) => {
      const timeSlot = item.timeSlot;
      if (horarios.hasOwnProperty(timeSlot)) {
        horarios[timeSlot]++;
      }
    })};
	console.log(horarios)
  return (
    horarios
  )
}

export default TimeSlot