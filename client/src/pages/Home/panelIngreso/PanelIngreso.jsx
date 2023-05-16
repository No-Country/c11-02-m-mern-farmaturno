import "./panelIngreso.css";

const PanelIngreso = () => {
	return (
		<div className="panelIngreso">
			<div className="top-buttons-container">
				<button className="top-button">Pide tu turno</button>
				<button className="top-button">consulta tu turno</button>
			</div>
			<hr />
			<div className="bottom-section">
				<h3>Optimiza tu tiempo y solicita un turno aquí</h3>
				<p>Pide un turno para ser atendido en tu farmacia</p>
				<label htmlFor="dni">Número de identidad</label>
				<input
					type="number"
					id="dni"
				/>
				<button>INGRESAR</button>
			</div>
		</div>
	);
};

export default PanelIngreso;
