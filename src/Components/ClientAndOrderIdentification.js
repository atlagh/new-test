import React from 'react';
import './ClientIdentificationForm.css';
import Dropdown from './Dropdown.js';
import {useState} from 'react';

const civility = ["Mister", "Missus"]
const packageState = ["Mister", "second"]


function ClientIdentificationForm() {
	const [selected, setSelected] = useState("ㅤ")
	return (
		<main className="main-identify-client">
			<p className="paragraph-style">It is necessary to identify the client and the order in order to move forward, please select "Client and order identified" and connect to Rose or CustomerCare to do so. If it isn't possible, select "identification impossible" in the dropdown below.</p>
			<div className="client-identification-form">
				<div className="div1">
					<p className="client-identification-text">Civility</p>
					<Dropdown selected={selected} setSelected={setSelected} list={civility}/>
				</div>
				<div className="div2">
					<p className="client-identification-text">First Name</p>
					<input className="input-box" type="text"/>
				</div>
				<div className="div3">
					<p className="client-identification-text">Last Name</p>
					<input className="input-box" type="text"/>
				</div>
				<div className="div4">
					<p className="client-identification-text">Client's ID</p>
					<input className="input-box" type="text"/>
				</div>
				<div className="div5">
					<p className="client-identification-text">Fidelity Number</p>
					<input className="input-box" type="text"/>
				</div>
				<div className="div6">
					<p className="client-identification-text">Email Address</p>
					<input className="input-box" type="text"/>
				</div>
				<div className="div7">
					<p className="client-identification-text">Order ID</p>
					<input className="input-box" type="text"/>
				</div>
				<div className="div8">
					<p className="client-identification-text">Order Reference</p>
					<input className="input-box" type="text"/>
				</div>
				<div className="div9">
					<p className="client-identification-text">Is the Order Sent in a Different Package?</p>
					<input type="checkbox"/>
				</div>
				<div className="div10">
					<p className="client-identification-text">Have All the Packages Been Delivered?</p>
					<input type="checkbox"/>
				</div>
				<div className="div11">
					<p className="client-identification-text">What is the State of the Package</p>
					<Dropdown selected={selected} setSelected={setSelected} list={packageState}/>
				</div>
			</div>
		</main>
	)
}

export default ClientIdentificationForm