import webIco from '../icon/web.svg'

var LandPagePremiumCard = function() {
	return <div className="landPagePremiumCard">
		<img className="landPagePremiumCardLeft" src={ webIco } alt="premium" />
		<div className="landPagePremiumCardRight">
			<h5>Premimum Account</h5>
			<p>You have a premium account, granting you access to all the remarkable features offered by RsumeDone. With this privilege, you can indulge in the freedom of downloading an unlimed number of resumes and cover letters in both PDF and Word formats.</p>
		</div>
	</div>;
};


export default LandPagePremiumCard;

