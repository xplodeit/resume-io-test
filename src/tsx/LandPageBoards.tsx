import boardImg from '../icon/board.png'
import DirImg from '../icon/Directory.jpeg'
import LockImg from '../icon/key.jpeg'

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
			<img src={boardImg} alt="icon" />
			<h5>My boards</h5>
			<img src="./icon/add.png" />
		</div>
	
		<ul>{ 
			boardArr.map( x => <li key={x.id}>
				<img src={ DirImg } alt="icon" />
				<span>{ x.name}</span>
			</li>) 
		}</ul>
		
		<ul>{
			boardAgentArr.map( x => <li key={x.id}>
				<img src={ LockImg } />
				<span>{ x.name}</span>
			</li>)
		}</ul>
	</div>);
};


export default LandPageBoards;

