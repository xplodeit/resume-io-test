var successImage = "./icon/up.svg";
		
var errorImage = "./icon/down.svg";
		
var appPersoInfo = [
	{ id: 1, name: "First Name", value: "Petter" },
	{ id: 2, name: "Last Name", value: "Cettera" },
	{ id: 3, name: "City", value: "London" },
	{ id: 4, Name: "Postal Code", value: "E24XF" },
	{ id: 5, name: "Address", value: "123Example", width: 100 },
	{ id: 6, name: "E-Mail", value: "Petter@gmail.com", isValid: true },
	{ id: 7, name: "Phone", value: "+442223334444" },
	{ id: 8, name: "Password", value: "Password" }
];
	

var inputCSS = function(index) {
	return `appInputLogin ${ appPersoInfo[index].width == 100 ? 'appPersoInfoWidth100' : 'appPersoInfoWidth50' }`;
};


var ifValidShow = function(index) {
	return appPersoInfo[index].isValid ? 'appInputInfoIsValidShow' : 'appInputInfoIsValidHide';
};	


var AppInputInfo = function(that) {
	return (<div className="appInputInfo">{
		appPersoInfo.map( (anItem, i) => <div className={ inputCSS(i) } key={ appPersoInfo[i].id }>
			<h5 className="appInputInfoName">{ appPersoInfo[i].name }</h5>
			<input className="appInputInfoRegister" type="text" value={ appPersoInfo[i].value } onChange={ () => true }/>
			<img className={ ifValidShow(i) } src={ successImage } />
		</div>)
	}</div>)
};



export default AppInputInfo

