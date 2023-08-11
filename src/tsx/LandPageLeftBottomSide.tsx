import settingsIco from '../icon/settings.svg'
import userImg from '../image/User.png'

var LandPageLeftBottomSide = function(that) {
	return <div className="landPageLeftBottomSide">
		<img className="landPageLeftBottomSideImage" src={ userImg } alt="carla" /> 
		<p>Carla</p>
		<img src={ settingsIco } alt="parameters" />
	</div>;
};


export default LandPageLeftBottomSide;


