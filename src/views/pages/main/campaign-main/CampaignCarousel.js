import { cilPen } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton, CCard, CCardBody, CCardHeader, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import moment from 'moment'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { COLORS, MODAL_MSGES } from 'src/common/const'
import Loading from 'src/components/Loading'
import NoDataArt from 'src/components/NoDataArt'

function CampaignCarousel() {
  const navigate = useNavigate()
  const [lotteryList, setLotteryList] = useState([])
  const [errorMsg, setErrorMsg] = useState(false)
  const [loading, setLoading] = useState(false)

  return (
    <div>
      <CCard className="mb-4">
        <CCardHeader style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h5>Campaign Managment</h5>
          <CButton
            onClick={() => navigate('/campaign/add/0')}
            style={{ backgroundColor: COLORS.MAIN, border: '0px' }}
          >
            CREATE NEW
          </CButton>
        </CCardHeader>
        <CCardBody>

        {loading ? (
            <Loading loading={loading} />
          ) : lotteryList.length === 0 ? (
            <NoDataArt
              visible={true}
              description={
                MODAL_MSGES.NO_DATA_FOUND
              }
              size={10}
            />
          ) : (
            <CTable hover responsive small>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">NIC</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Contact No</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Created Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{textAlign: 'center'}}>Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {lotteryList.map((item, key) => (
                  <CTableRow
                    key={key}
                    style={{ cursor: 'pointer' }}
                    // onClick={() => {
                    //   setSelectedVoter(item)
                    //   setIsMoreInfo(true)
                    // }}
                  >
                    <CTableDataCell width={50}>{key + 1}</CTableDataCell>
                    <CTableDataCell width={150}>{item?.attributes?.NIC_Number}</CTableDataCell>
                    <CTableDataCell>{item?.attributes?.Name}</CTableDataCell>
                    <CTableDataCell width={150}>
                      {item?.attributes?.Mobile_Number_1 ||
                        item?.attributes?.Mobile_Number_2 ||
                        item?.attributes?.WhatsApp_Number}
                    </CTableDataCell>
                    <CTableDataCell width={150}>
                      {moment(new Date(item?.attributes?.createdAt)).format('DD-MM-YYYY')}
                    </CTableDataCell>
                    <CTableDataCell width={150} style={{textAlign: 'center'}}>
                      {/* <CIcon
                        icon={cilPeople}
                        size="xl"
                        className="text-info"
                        style={{ cursor: 'pointer', padding: '2px', paddingInline: '4px' }}
                        onClick={() => setIsMoreInfo(true)}
                      /> */}

                      <CIcon
                        icon={cilPen}
                        size="xl"
                        className="text-info"
                        onClick={() => navigate(`/voters/edit/${item?.id}`)}
                        style={{ cursor: 'pointer', padding: '2px', paddingInline: '4px' }}
                      />
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          )}
        </CCardBody>
      </CCard>
    </div>
  )
}

export default CampaignCarousel
