// import { createSlice } from "@reduxjs/toolkit";
/* 
Aca vamos a tener toda la data que le tenemos que pasar del turno

Datos del turno
{
  "date": (La Fecha), //Esto se pone solo en la DB
  "status": Boolean, 
  "timeSlot": 2 (número de la franja horaria para el turno),
}

o sea le tenemos que pasar franja que va a ser un numero y si ese esta true o no
*/

// export const turnSlice=createSlice({
//   name:"turnos",
//   initialState:{
//     list:[]
//   },
//   reducers:{
//     setTurnList:(state,action)=>{
// 			state.list=action.payload;
// 			console.log(action.payload)
// 			console.log(state)
// 		},
//   }


// })



// export default turnSlice.reducer;

// export const {
//   setTurnList,

//  } = turnSlice.actions;

// const baseUrl = "http://localhost:3002/api";




// export const getTurns = ()=> async(dispatch) => {
//   try{
//   const url= "http://localhost:3002/api/turn/";
//   const res= await fetch (url);
//   const data= await (res.json())
//   console.log(data)
//     dispatch(setTurnList(data))
//   }catch (error) {
//     console.log(error.response)}

//   }

