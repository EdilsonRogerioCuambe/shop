import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { BarraLateral } from '../../components';

const Dashboard = () => {
  return (
    <>
      <BarraLateral />
    </>
  )
}

export default Dashboard;