import React from 'react'
import './CategorizationForm.css'
import Dropdown from './Dropdown.js'
import {useState} from 'react';

const countries = ["Morocco", "France", "Belgium"]


function CategorizationForm({list}) {
	const [selected, setSelected] = useState("ㅤ")
	return (
		<main className="categorization-form">
			<div>
				<p className="categorization-form-text">Root Cause</p>
				<Dropdown selected={selected} setSelected={setSelected} list={list}/>
			</div>
			<div>
				<p className="categorization-form-text">Check if unable to identify</p>
				<input type="checkbox"/>
			</div>
		</main>
	)
}

export default CategorizationForm