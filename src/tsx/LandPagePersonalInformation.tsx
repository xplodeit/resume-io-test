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
			
			<p className="receiveNotification">Use this email to log in to your <a href="#">resumedone.io</a> account and receive notifications.</p>
			
			<button className="saveBtn">Save</button>
			
			<div className="showProfileToEmployer">
				<img src="./icon/unchecked.svg" />
				<p>Show my profile to serious employers on <a href="#">hirethebest.io</a> for free</p>
			</div>
			
			<div className="deleteAccount">
				<h5>Delete account</h5>
				
				<p>If you delete your account, you'll be permanently removing it form our systrems - you can't undo it.</p>
				
				<button>Yes, Delete my account</button>
			</div>
			
			<p className="getInTouch"><a href="#">Get in touch with our support team</a> if you have any question or want to leave some feedback.</p>
			
			<p>We'll be happy to hear from you.</p>
		</form>
	</div>;
};


export default LandPagePersonalInformation

