import React from "react";
import { Button } from "react-bootstrap";
// import Swal from "sweetalert2";
import { useUpdateEstadoTurnoMutation } from "../../../services/apiSlices";

export const ButtonEstado = (_id) => {
	const [updateState] = useUpdateEstadoTurnoMutation();
	const confirmar = (_id) => {
		console.log(_id);
		updateState({ status: false, _id });


		// Swal.fire({
		// 	icon: "success",
		// 	title: "Turno Confirmado!",
		// 	showConfirmButton: false,
		// 	timer: 1500,
		// });
	}
    return (
		<>
			<Button variant="dark" size="md" onClick={(e) => confirmar(_id._id)}>
				confirmar
			</Button>
		</>
	);
}