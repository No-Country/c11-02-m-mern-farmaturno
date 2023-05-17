/* 
  Aca vamos a guardar toda la data del usuario
  El formato va a ser 
  
  usuario por primera vez
  usuario = {
    "name": "Jose",
    "surName": "Torre",
    "identificationNumber": 1234567890 (son 10 numeros)
    "mobilePhone": 1234563456 
  }

  Usuario que ya existe en la DB
{
  "customerId": "64542f84ba6c63c6821e1005"
  "name": "Jose",
  "surName": "Torre",
  "identificationNumber": 45896741,
  "mobilePhone": 3215896454
}

*/
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  surName: '',
  identificationNumber: '',
  mobilePhone: '',
};

export const userSlice = createSlice({
  name: 'user', // este es el nombre de este slice, puedo crear varios
  initialState,
  reducers: {
    addIdentificationNumer: (state, action) => {
      const { identificationNumber } = action.payload;
      state.identificationNumber = identificationNumber;
    },
    addUser: (state, action) => {
      const { name, surName, mobilePhone } = action.payload;
      state.name = name;
      state.surName = surName;
      state.mobilePhone = mobilePhone;
    },
  },
});

export const { addIdentificationNumer, addUser } = userSlice.actions;

export default userSlice.reducer;
