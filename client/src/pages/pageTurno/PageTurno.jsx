import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useGetTurnsQuery } from "../../services/apiSlices";
import Table from 'react-bootstrap/Table';
import './PageTurnoStyle.css' 




const Turno = () => {
	const { data, isError, isLoading, error } = useGetTurnsQuery(); //ME PUEDO DVOLVER LA DATA, EL ERROR(TRUE FALSE), PROPIEDAD IS LOADING (TRUEFALSE), ERROR CUAL ES EL ERROR
	const identificationNumber = useSelector((state) => state.user.identificationNumber);
	console.log(identificationNumber);
	const users = data && data.filter((item) => item.customer.identificationNumber === identificationNumber);
	// useEffect(() => {
		// if (data) {
		  // Filtra los customers por identificationNumber
		//   const filteredCustomers = data.filter((item) => item.customer.identificationNumber === identificationNumber);
		//   users.push(filteredCustomers)
		  // Aquí puedes guardar los customers filtrados en el estado de Redux, si es necesario
		// }
	//   }, [data, identificationNumber]);
 console.log(users);
	if (isLoading) return <div>Loading...</div>;
	else if (isError) return <div>Error:{error}</div>;
	console.log(data)

	const formatDate = (dateString) => {
		const date = new Date(dateString);
		const day = date.getDate();
		const month = date.getMonth() + 1;
		const year = date.getFullYear().toString().substr(-2);
		return `${padZero(day)}/${padZero(month)}/${year}`;
	  };
	  const padZero = (value) => {
		return value.toString().padStart(2, '0');
	  };


return (
	<div className='general'>
		<p>
	<h1>Consulta tu turno</h1>
	<p className='parrafo'>Puedes revisar la información detallada del último turno que solicitaste, junto al historial guardado en nuestro sistema.</p>
	</p>
		<Table className='table'  borderless hover >
		 <thead >
        <tr className='encabezado'>
          <th>Datos Personales</th>
          <th>Fecha y hora</th>
        </tr>
      </thead>
      <tbody >
		{users.map((user) => (
			
			<>
        <tr className='body' key={user._id}>
          <td >{user.customer.name} {user.customer.surName}   Telefono: {user.customer.mobilePhone}</td>
          <td >{formatDate(user.date)}      {user.timeSlot}</td>
        </tr>
        
      
	  </>
		))}
		</tbody>
		</Table>
		<p className='parrafo'>Haz click aqui para eliminar tu historial de turnos  datos personales</p>
		</div>
	);
};

export default Turno;
