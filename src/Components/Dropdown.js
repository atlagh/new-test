import React from 'react';
import {useState, useRef, useEffect} from 'react';
import './Dropdown.css';




function Dropdown({selected, setSelected, list, getDataSelected}) {
	const [isActive, setIsActive] = useState(false);
	const [query, setQuery] = useState("")
	const ref = useRef(null);
	useEffect(()=> {
		document.addEventListener("click", close);
		return () => document.removeEventListener("click", close)
	})
	function close(e){
		setIsActive(e && e.target === ref.current)
	}
	function filter(list){
		return list.filter((data) => data.toLowerCase().indexOf(query.toLowerCase()) > -1);
	}
	function displayValue() {
		if(query.length > 0) return query;
		// getDataSelected()
		// if(selected) return selected;
		return "";
	}
	// function sendData(){
	// 	getDataSelected();
	// 	console.
	// }

	return (
		<main className="dropdown">
			<div className="dropdown-btn"  onClick={e => setIsActive(!isActive)}>
				<input 
					type="text" 
					ref={ref} 
					placeholder={selected ? selected : prompt}
					value={displayValue()}
					onChange=""
					onClick=""

					/>
				<span>▼</span>
				
			</div>
		{isActive && (
			<div className="dropdown-content">
				{filter(list).map(data=> <div onClick={(e) => {setSelected(data); setIsActive(false); setQuery("");}} className="dropdown-item">{data}</div>) } 
					
			</div>
			)}
			
			

		</main>
	)
}

export default Dropdown


