import React from 'react';
import './Popup.css';
import CategorizationForm from './CategorizationForm';
import ClientIdentificationForm from './ClientIdentificationForm';
import ClientAndOrderIdentification from './ClientAndOrderIdentification';



var clientData = []
const form = "https://tripetto.app/run/X4QMV5TY09"


class Popup extends React.Component {


	getFirstName = (data) =>{
		// var firstName = val.target.value
		clientData = data
		console.log(clientData)
	}




// handleCallback("test")
render() {
		return (

		<div >

			<iframe  src={this.props.id} width="100%" height="700vh"></iframe>


			{/*<div className="header">{this.props.taskName}</div>
			<div className="info">{Object.keys(this.props.requestInfoList).map((keyName)=>{
				return <div> 
							<p className="info-key">{keyName}: </p> 
							<p className="info-key-name">{this.props.requestInfoList[keyName]}</p> 
						</div>}) 
				 
				}   
			</div>

			<div className="form" >
			<iframe  src={this.props.id} width="100%" height="500vh"></iframe>
				<p className="title">Subject:</p>
				<div className="message">{this.props.subject}</div>
				<p className="title">Message:</p>
				<div className="message">{this.props.message}</div>
				{(this.props.id=="5bc0dd80-694c-11ec-a174-294520cfa8d9") ? 
					<CategorizationForm list={this.props.list}/> : 
					(this.props.id=="bae53e10-6716-11ec-b06a-57c90d1b1039") ? 
					<ClientAndOrderIdentification/> :
					(this.props.id=="f524e1b0-6712-11ec-b06a-57c90d1b1039") ?
					<ClientIdentificationForm firstName={this.getFirstName}/> :
					<div>error has occured</div>
				}
			</div>
			<div className="submit"><button className="button-submit" >Submit</button></div>*/}
		</div>
	)


}


}

export default Popup