import React, { useContext, useEffect, useState } from 'react'
import '../styles/Dashboard.css'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import DoctorDashBoard from '../components/DoctorDashboard'
import PatientDashBoard from '../components/PatientDashBoard'
import AdminDashBoard from '../components/AdminDashBoard'
import roles from "../data/roles"

const Dashboard = () => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem('auth')) || ''
  )
  const [data, setData] = useState({})
  const navigate = useNavigate()
  const [role, setRole] = useState(
    JSON.parse(localStorage.getItem('role')) || ''
  )
  const fetchLuckyNumber = async () => {
    let axiosConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    try {
      const response = await axios.get(
        'http://localhost:3000/api/v1/dashboard',
        axiosConfig
      )
      console.log(response.data.data)
      setData({
        msg: response.data.msg,
        luckyNumber: response.data.secret,
        allData: response.data.data,
      })
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchLuckyNumber()
    if (token === '') {
      navigate('/login')
      toast.warn('Please login first to access dashboard')
    }
  }, [token])

  console.log(role)


  return (
    <div className='dashboard-main'>
      <h1>Dashboard</h1>
      <p> Hi {data.msg}! {data.luckyNumber} </p>
      <div style={{}}>
        {role === 'Doctor' && <> {data.allData && data.allData.map((elem) => <DoctorDashBoard elem={elem} />)} </>}
        {role === 'Patient' && <> {data.allData && <PatientDashBoard data={data.allData} />} </>}
        {role ===  roles.ADMIN && <> {!data.allData && <AdminDashBoard data={data.allData} />} </>}
      </div>

      <Link to='/logout' className='logout-button'> Logout </Link>
      {role == JSON.stringify('admin') ? (
        <Link to='/addNewMember' className='logout-button'>  Create New Member </Link>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Dashboard
