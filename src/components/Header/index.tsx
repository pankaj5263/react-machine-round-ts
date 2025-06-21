import React from "react";
import DropDown from "../DropDown";
import {HOME, REACT_MACHINE_ROUND_INTERVIEW_QUESTIONS} from '../utils/constants';
import { useNavigate } from "react-router-dom";
const dropDownList = [
    {id:'home', text:"Home", },
    {id:'accordian', text:"Accordian",},
    {id:'popover', text:"Popover"},
    {id:'tabs', text:"Tabs"}
]

const Header: React.FC = () => {
    const navigate = useNavigate();

    const handleDropdown = (value: string) => {
        const navigateValue = value.trim().toLocaleLowerCase();
        console.log(navigateValue);
        if(navigateValue === HOME){
         navigate('/');
        } else{
         navigate(navigateValue);
        }
      
    }
  return <>
   <header>
    <div>{REACT_MACHINE_ROUND_INTERVIEW_QUESTIONS}</div>
    <div><DropDown list={dropDownList} handleDropdown={handleDropdown}/></div>
   </header>
  </>
}

export default Header;