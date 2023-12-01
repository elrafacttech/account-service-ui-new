import React, { useState } from "react";
import Homepages from "../../pages/Homepages";
import Header from '../Header'
import Select from "react-select";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Chip,
    Tooltip,
    Progress,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import authorsTableData from '../../data/authors-table-data';
import projectsTableData from '../../data/projects-table-data';





const Accounts = () =>{

    const accountOptions =[
        { value: "1", label: "Revenue"},
        { value: "2", label: "COGS"},
        { value: "3", label: "Opertion Expenses"},
    ];

    const codeOptions = [
        { value: "1", label: "Code 1"},
        { value: "2", label: "Code 2"},
        { value: "3", label: "Code 3"},
    ];

    const DrCrOptions = [
        { value: "1", label: "Credit"},
        { value: "2", label: "Debit"},
    ];

    const [selectAccounts,setSelectAccounts] = useState(null);
    const [selectCode,setSelectCode] = useState(null);
    const [selectDrCr,setSelectDrCr] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleStartDateChange = (date) => {
        setStartDate(date);
      };
    
      const handleEndDateChange = (date) => {
    
        setEndDate(date);
      };

    return(
        <Homepages>
            <div className=' w-full h-[100%] overflow-hidden overflow-y-scroll'>
            <Header data={"Accounts"} />
            <div className="mt-12 mb-8 flex flex-col gap-12">
                <Card style={{ width: '800px', height: '600px' }}>
                    <CardHeader variant="gradient" color="gray" className="mb-8 p-6 bg-[#60a563] mx-4  -mt-6" >
                        <Typography variant="h6" color="white" className='font-Roboto' style={{ textAlign: 'center' }}>
                            Accounts
                        </Typography>
                    </CardHeader>
                    <CardBody className="overflow-x-scroll px-0 pt-0 pb-2 " style={{ width: '800px', height: '600px' }}>
                        <table className="w-full min-w-[640px] table-auto">
                            <thead>
                                <tr>
                                    {["Accounts","Code","Dr/Cr","From Date","To Date"].map((el) => (
                                        <th key={el}
                                        className="border-b border-blue-gray-50 py-3 px-5 text-left"
                                        >
                                             <Typography
                                                    variant="small"
                                                    className="text-[11px] font-bold uppercase text-blue-gray-400 text-slate-500 font-Roboto"
                                                >
                                                    {el}
                                                </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border-b border-blue-gray-50 py-3 px-5">
                                    <Select
                                                options={accountOptions}
                                                value={selectAccounts}
                                                onChange={(value) => setSelectAccounts(value)}
                                            />
                                    </td>
                                    <td className="border-b border-blue-gray-50 py-3 px-5"> 
                                    <Select 
                                           
                                           option={codeOptions}
                                           value={selectCode}
                                           onChange={(value) => setSelectCode(value)}
                                    />
                                    </td >
                                    <td className="boder-b border-blue-gray-50 py-3 px-5">
                                        <Select
                                              options={DrCrOptions}
                                              value={selectDrCr}
                                              onChange={(value) => setSelectDrCr(value)}
                                        />
                                    </td>
                                    <td className="border-b border-blue-gray-50 py-3 px-5">
                                      <DatePicker
                                         selected={startDate}
                                         onChange={handleStartDateChange}
                                         selectsStart
                                         startDate={startDate}
                                         endDate={endDate}
                                         dateFormat="MM/dd/yyyy"
                                         placeholderText="Select start date"
                                       />
                                        </td>
                                        <td className="border-b border-blue-gray-50 py-3 px-5">
                                        <DatePicker
                                         selected={endDate}
                                         onChange={handleEndDateChange}
                                         selectsEnd
                                         startDate={startDate}
                                         endDate={endDate}
                                         minDate={startDate}
                                        dateFormat="MM/dd/yyyy"
                                         placeholderText="Select end date"
                                           />
                                        </td>
                                </tr>
                            </tbody>
                        </table>
                    </CardBody>
                </Card>
            </div>
            </div>
        </Homepages>
    )
}

export default Accounts