import React from 'react';
import type { DropDownList } from '../../type';
interface Props {
    list: [];
    handleDropdown:(value:string) => void

}

const DropDown: React.FC<Props> = (props) => {
    const {list, handleDropdown} = props;
    const options = list.map((item: DropDownList) => <option key={item.id} id={item.id} value={item.text}>{item.text}</option>)
    return (
        <select className='header-dropdown' onChange={(e) => handleDropdown(e.target.value)}>
            {options}
        </select>
    );
}

export default DropDown