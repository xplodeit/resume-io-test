var works = [
	{ id: 1, name: "Software Engineer" },
	{ id: 2, name: "Computer hardware engineer" },
	{ id: 3, name: "Network Engineer" },
	{ id: 4, name: "Technical Support" },
	{ id: 5, name: "Network administrator" },
	{ id: 6, name: "Management" },
	{ id: 7, name: "Data analysis" },
	{ id: 8, name: "Computer technician" }
];		


var anotherWorks = [
	{ id: 1, name: "Past search 1" },
	{ id: 2, name: "Past search 2" },
	{ id: 3, name: "Computers and information..." },
	{ id: 4, name: "Database administrator" },
	{ id: 5, name: "Computer security" },
	{ id: 6, name: "Computer Systems Analyst" }
];
	
	
var LandPageTemplates = function() {
	return (
		<div className="landPageTemplates">
			<div className="landPageTemplatesHeader">
				<img src="./icon/x.svg" alt="icon" />		
				<h6>My templates</h6>
			</div>
			
			<div className="landPageTemplatesSearch">
				<img src="./icon/search.svg" alt="icon" />
				<input type="text" placeholder="Search" />
			</div>
			
			<ul>{
				works.map( x => <li key={ x.id }>
					<img src="./icon/star.svg"  alt="icon" />
					<span>{ x.name}</span>
				</li>)
			}</ul>
			
			<ul>{
				anotherWorks.map( x => <li key={ x.id }>
				 	<img src="./icon/clock.svg" alt="icon" />
					<span>{ x.name}</span>
				</li>)
			}</ul>
		</div>
	);
};


export default LandPageTemplates;

