import { cilPen, cilSend, cilTrash } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTooltip,
} from '@coreui/react'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { COLORS, MODAL_MSGES } from 'src/common/const'
import Loading from 'src/components/Loading'
import LoadingFullscreen from 'src/components/LoadingFullscreen'
import WarningModal from 'src/components/Modals/WarningModal'
import NoDataArt from 'src/components/NoDataArt'
import TokenService from 'src/services/TokenService'
import { CampaignService } from 'src/services/campaign.service'
import { UserService } from 'src/services/user.service'
import Swal from 'sweetalert2'

function CampaignCarousel() {
  const navigate = useNavigate()

  const [errorMsg, setErrorMsg] = useState(false)
  const [loading, setLoading] = useState(false)

  const [campaignList, setCampaignList] = useState([])
  const [approvalModalVisible, setApprovalModalVisible] = useState(false)
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)
  const [selectedCampaignToApprove, setSelectedCampaignToApprove] = useState(null)

  const [loadingFull, setLoadingFull] = useState(false)
  const userId = TokenService.getUser()?.user?.id

  useEffect(() => {
    getCampaignData()
  }, [])

  const getCampaignData = async () => {
    setLoading(true)
    await UserService.getUserDataByID(userId)
      .then((res) => {
        setCampaignList(res[0].campaigns)
        setLoading(false)
      })
      .catch((e) => {
        console.error(e)
        setLoading(false)
      })
  }

  const approveAndSendCampaign = async () => {
    setLoadingFull(true)
    await CampaignService.approveSendCampaign(selectedCampaignToApprove, userId)
      .then((res) => {
        console.log(res)
        setLoadingFull(false)
        Swal.fire({
          title: 'Good job!',
          text: 'You Have Approved the Campaign & Messages Are Ongoing',
          icon: 'success',
        })
      })
      .catch((e) => {
        console.error(e)
        setLoadingFull(false)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      })
  }

  return (
    <div>
      <CCard className="mb-4">
        <CCardHeader style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h5>Campaign Managment</h5>
          <CButton
            onClick={() => navigate('/campaign/add/0')}
            style={{ backgroundColor: COLORS.SECONDARY, border: '0px' }}
          >
            CREATE NEW
          </CButton>
        </CCardHeader>
        <LoadingFullscreen loading={loadingFull} />
        <CCardBody>
          {loading ? (
            <Loading loading={loading} />
          ) : campaignList.length === 0 ? (
            <NoDataArt visible={true} description={MODAL_MSGES.NO_DATA_FOUND} size={10} />
          ) : (
            <CTable hover responsive small>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Campaign Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Audience</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Message Cost</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ textAlign: 'center' }}>
                    Action
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {campaignList.map((item, key) => (
                  <CTableRow
                    key={key}
                    style={{ cursor: 'pointer' }}
                    // onClick={() => {
                    //   setSelectedVoter(item)
                    //   setIsMoreInfo(true)
                    // }}
                  >
                    <CTableDataCell width={50}>{key + 1}</CTableDataCell>
                    <CTableDataCell>{item?.campaignName}</CTableDataCell>
                    <CTableDataCell width={150}>{item?.audience?.toUpperCase()}</CTableDataCell>
                    <CTableDataCell width={150}>Rs. {item?.messageCost}</CTableDataCell>
                    <CTableDataCell width={150}>
                      {moment(new Date(item?.updatedAt)).format('DD-MM-YYYY HH:MM')}
                    </CTableDataCell>
                    <CTableDataCell width={200} style={{ textAlign: 'center', gap: 15 }}>
                      <CTooltip content="Approve & Send" placement="top">
                        <CIcon
                          icon={cilSend}
                          size="xl"
                          onClick={() => {
                            setApprovalModalVisible(true)
                            setSelectedCampaignToApprove(item.id)
                          }}
                          style={{
                            cursor: 'pointer',
                            padding: '2px',
                            paddingInline: '4px',
                            color: COLORS.MAIN,
                          }}
                        />
                      </CTooltip>
                      <CTooltip content="Edit" placement="top">
                        <CIcon
                          icon={cilPen}
                          size="xl"
                          onClick={() => navigate('/campaign/edit/' + item.id)}
                          style={{
                            cursor: 'pointer',
                            padding: '2px',
                            paddingInline: '4px',
                            color: COLORS.MAIN,
                          }}
                        />
                      </CTooltip>
                      <CTooltip content="Delete" placement="top">
                        <CIcon
                          icon={cilTrash}
                          size="xl"
                          onClick={() => setDeleteModalVisible(true)}
                          style={{
                            cursor: 'pointer',
                            padding: '2px',
                            paddingInline: '4px',
                            color: COLORS.DANGER_BTN,
                          }}
                        />
                      </CTooltip>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          )}
        </CCardBody>
      </CCard>
      <WarningModal
        title="Action Required!"
        description="Pause for a moment! Are you sure you want to send this campaign?"
        buttonTitle="Approve & Send"
        open={approvalModalVisible}
        onOpen={(s) => setApprovalModalVisible(s)}
        okay={(s) => approveAndSendCampaign()}
      />
      <WarningModal
        title="Action Required!"
        description="Pause for a moment! Are you sure you want to delete this campaign?"
        buttonTitle="DELETE"
        open={deleteModalVisible}
        buttonColor={COLORS.DANGER_BTN}
        onOpen={(s) => setDeleteModalVisible(s)}
        okay={(s) => approveAndSendCampaign()}
      />
    </div>
  )
}

export default CampaignCarousel
