
import React from 'react';
import { useNavigate } from "react-router-dom";
const Menu=()=>{
const navigate=useNavigate();
    const navTransfer=()=>{navigate('/transfer')}
    const navTransferFrom=()=>{navigate('/transferfrom')}
    const navAllowance=()=>{navigate('/allowance')}
    const navApprove=()=>{navigate('/approve')}
    return(
<div className="d-flex justify-content-center padding-top">

<button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" onClick={navTransfer}>
  Transfer
</button>
<button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right" onClick={navTransferFrom}>
  Transfer From
</button>
<button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left" onClick={navAllowance}>
  Allowance
</button>
<button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left" onClick={navApprove}>
  Approve
</button>
</div>
    )
}

export default Menu;