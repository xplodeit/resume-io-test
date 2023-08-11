import AppInputInfo from './AppInputInfo.tsx'

var LandPagePersonalInformation = function() {
	return <div className="landPagePersonalInformation">
		<form>
			<h4 className="personalInfoHeader">Personal Information</h4>
			
			<div className="appInput">
				<AppInputInfo />
				
				<div className="appInputRightSide">
					<img className="appInputImage" src="./icon/boy.svg" alt="picture" />
				</div>
			</div>
			
			<p>Use this email to log in to your <a href="#">resumedone.io</a> account and receive notifications.</p>
			
			<button>Save</button>
			
			<div>
				<input type="checkbox" />
				<p>Show my profile to serious employers on <a href="#">hirethebest.io</a> for free</p>
			</div>
			
			<div>Delete account</div>
			
			<p><a href="#">Get in touch with our support team</a> if you have any question or want to leave some feedback.</p>
			
			<p>We'll be happy to hear from you.</p>
		</form>
	</div>;
};


export default LandPagePersonalInformation

