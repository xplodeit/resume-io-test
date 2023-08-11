import { useState } from 'react'

import LandPageLeftTopSide from './LandPageLeftTopSide.tsx'
import LandPageTemplates from './LandPageTemplates.tsx'
import LandPageBoards from './LandPageBoards.tsx'
import LandPageLeftBottomSide from './LandPageLeftBottomSide.tsx'

import LandPagePremiumCard from './LandPagePremiumCard.tsx'
import LandPagePersonalInformation from './LandPagePersonalInformation.tsx'
import LandPageTermAndCondition from './LandPageTermAndCondition.tsx'


var AppLayout = function() {
  return (
  	<div className="appRoot">
		<div className="landPageLeftSide">
			<LandPageLeftTopSide />
			
			<div className="landPageLeftMiddleSide">
				<LandPageTemplates />
				<LandPageBoards />
			</div>
			
			<LandPageLeftBottomSide />
		</div>
		
		<div className="landPageRightSide">
			<LandPagePremiumCard />
			<LandPagePersonalInformation />
			<LandPageTermAndCondition />
		</div>
	</div>
  )
}

export default AppLayout


