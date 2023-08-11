var boardArr = [
	{ id: 1, name: "Board 1" },
	{ id: 2, name: "Board 2" },
	{ id: 3, name: "Board 3" }
];		


var boardAgentArr = [
	{ id: 1, name: "Board agent 1" },
	{ id: 2, name: "Board agent 2" },
	{ id: 3, name: "Board agent 3" },
];


var LandPageBoards = function() {
	return (<div className="landPageBoards">
		<div className="landPageBoardsHeader">
			<img src="./icon/boardTitle.svg" alt="icon" />
			<h5>My boards</h5>
			<img src="./icon/plus.svg" />
		</div>
	
		<ul>{ 
			boardArr.map( x => <li key={x.id}>
				<img src="./icon/boardLi.svg" alt="icon" />
				<span>{ x.name}</span>
			</li>) 
		}</ul>
		
		<ul>{
			boardAgentArr.map( x => <li key={x.id}>
				<img src="./icon/boardAgent.svg" />
				<span>{ x.name}</span>
			</li>)
		}</ul>
	</div>);
};


export default LandPageBoards;

