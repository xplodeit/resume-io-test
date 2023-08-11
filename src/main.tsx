import React from 'react'
import ReactDOM from 'react-dom/client'

import './css/00-A-Init.css'
import './css/00-B-Flex.css'
import './css/01-AppLayout.css'
import './css/02-AppInputInfo.css'
import './css/03-LandPageLeftTopSide.css'
import './css/04-LandPageTemplates.css'
import './css/05-LandPageBoards.css'
import './css/06-LandPageLeftBottomSide.css'
import './css/07-LandPagePremiumCard.css'
import './css/08-LandPagePersonalInformation.css'
import './css/09-LandPageTermAndCondition.css'

import AppLayout from './tsx/AppLayout.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>,
)
