import React from 'react'
import * as FaIcons from 'react-icons/fa' 
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToken } from '../../../store/tokens/Action';
import { toast } from 'react-toastify';
import './Sidebar.css'



export const SidebarData = [
    
    {
        path: '/produtos',
        icon: <FaIcons.FaSeedling/>
    },
    {
        path: '/formularioProduto',
        icon: <FaIcons.FaPlusSquare />
    }
]
