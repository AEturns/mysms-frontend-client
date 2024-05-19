import React from 'react'

import WidgetsDropdown from '../widgets/WidgetsDropdown'
import { CCard, CCardBody, CImage } from '@coreui/react'
import { CLIENT_NAME } from 'src/common/const'
import DashImage from '../../assets/other/dash_image.svg'
import LOGO from '../../assets/images/logo.png'

const Dashboard = () => {
  return (
    <>
      {/* <Counts /> */}

      <CCard className="mb-4">
        <CCardBody>
        <div className="mt-1" style={{ textAlign: 'center' }}>
            <CImage src={LOGO} height={50} />
          </div>
          
          <h2 style={{ textAlign: 'center' }}>{CLIENT_NAME.toUpperCase()} PORTAL</h2>
          <div className="mt-5" style={{ textAlign: 'center' }}>
            <CImage src={DashImage} />
          </div>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Dashboard
