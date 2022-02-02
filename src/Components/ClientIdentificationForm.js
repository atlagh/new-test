import React from 'react';
import './ClientIdentificationForm.css';
import Dropdown from './Dropdown.js';
import {useState} from 'react';

const civility = ["Mister", "Missus"]
const packageState = ["Mister", "second"]


var clientData = [{
	firstName: '',
	lastName: '',
	civility: '',
	clentId: '',
	fidelityNumber: '',
	emailAdress: ''
}]


function ClientIdentificationForm({firstName}) {
	const [selected, setSelected] = useState("ㅤ")

	function getFirstName(val){
		clientData.civility = selected
		firstName(clientData)
	}


	return (
		<main className="main-identify-client">
			<p className="paragraph-style">It is necessary to identify the client and the order in order to move forward, please select "Client and order identified" and connect to Rose or CustomerCare to do so. If it isn't possible, select "identification impossible" in the dropdown below.</p>
			<div className="client-identification-form">
				<div className="div1">
					<p className="client-identification-text">Civility</p>
					<Dropdown selected={selected} setSelected={setSelected} list={civility} getDataSelected={getFirstName}/>
				</div>
				<div className="div2">
					<p className="client-identification-text">First Name</p>
					<input className="input-box" type="text" onChange={(val) => {clientData.firstName= val.target.value;  getFirstName()}}/>
				</div>
				<div className="div3">
					<p className="client-identification-text">Last Name</p>
					<input className="input-box" type="text" onChange={(val) => {clientData.lastName= val.target.value;  getFirstName()}}/>
				</div>
				<div className="div4">
					<p className="client-identification-text">Client's ID</p>
					<input className="input-box" type="text" onChange={(val) => {clientData.clientId= val.target.value;  getFirstName()}}/>
				</div>
				<div className="div5">
					<p className="client-identification-text">Fidelity Number</p>
					<input className="input-box" type="text" onChange={(val) => {clientData.fidelityNumber= val.target.value;  getFirstName()}}/>
				</div>
				<div className="div6">
					<p className="client-identification-text">Email Address</p>
					<input className="input-box" type="text" onChange={(val) => {clientData.emailAddress= val.target.value;  getFirstName()}}/>
				</div>
			</div>
		</main>
	)
}

export default ClientIdentificationForm