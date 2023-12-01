import React from "react";
import Homepages from "../../pages/Homepages";
import Header from '../Header'
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




const Income = () =>{

    const incomeData = [
        { accrualAccounting: "Revenues"},
        { accrualAccounting: "Interest Income"},
        { accrualAccounting: "Other Income"},
        { accrualAccounting: "Finance Charge Income"},
        { accrualAccounting:"Sales Returns and Allowances"},
        { accrualAccounting:"Sales Discounts"},
        { accrualAccounting:"Total Revenue"},
        { accrualAccounting:"Cost of products"},
        { accrualAccounting:"Freight"},
        { accrualAccounting:"Inventory Adjustments"},
        { accrualAccounting:"Purchase Returns and Allowances"},
        { accrualAccounting:"Reserved"},
        { accrualAccounting:"Total COGS"},
        { accrualAccounting:"Advertising Expenses "},
        { accrualAccounting:"Auto Expense"},
        { accrualAccounting:"Bad Debt Expenses"},
        { accrualAccounting:"Bank charge "},
        { accrualAccounting:"Cash Over and Short "},
        { accrualAccounting:"Commission Expense "},
        { accrualAccounting:"Employee benefit Program"},
        { accrualAccounting:"Freight Expense"},
        { accrualAccounting:"Gifts Expense"},
        { accrualAccounting:"Insurance - general "},
        { accrualAccounting:"Professional  Fees "},
        { accrualAccounting:"License Expense"},
        { accrualAccounting:"Maintenance Expense "},
        { accrualAccounting:"Meals and Entertainment "},
        { accrualAccounting:"Office Expense"},
        { accrualAccounting:"Payroll Taxes"},
        { accrualAccounting:"Printing "},
        { accrualAccounting:"Postage "},
        { accrualAccounting:"Lease rent "},
        { accrualAccounting:"Repairs Expense "},
        { accrualAccounting:"Salaries Expense "},
        { accrualAccounting:"Supplies Expense"},
        { accrualAccounting:"Utilities Expense "},
        { accrualAccounting:"Gain/loss on Sale of Assets "},
        { accrualAccounting:"Total Operating Expenses"},
        { accrualAccounting:"EBITDA"},
        { accrualAccounting:"Amortization Expense"},
        { accrualAccounting:"Depreciation Expense"},
        { accrualAccounting:"EBIT"},
        { accrualAccounting:"Interest Expense"},
        { accrualAccounting:"Profit before taxes"},
        { accrualAccounting:"Taxes – FIT Expense"},
        { accrualAccounting:"Net Profit after taxes NPAT"},
        { accrualAccounting:"Preferred dividends"},
        { accrualAccounting:"Net income attributable to common shareholders"},
        
    ];
    return(
        <Homepages>
        <div className=' w-full h-[100%] overflow-hidden overflow-y-scroll'>
        <Header data={"Income"} />
        <div className="mt-12 mb-8 flex flex-col gap-12">
                <Card>
                    <CardHeader variant="gradient" color="gray" className="mb-8 p-6 bg-[#60a563] mx-4  -mt-6">
                        <Typography variant="h6" color="white" className='font-Roboto' style={{ textAlign: 'center' }}>
                        INCOME STATEMENT
                        </Typography>
                    </CardHeader>
                    <CardBody className="overflow-x-scroll px-0 pt-0 pb-2 ">
                        <table className="w-full min-w-[640px] table-auto">
                            <thead>
                                <tr>
                                    {["ACCURAL ACCOUNTING","CURRENT PERIOD","PRIOR PERIOD"].map((el) => (
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
                                    {incomeData.map((item, index) => (
                                        <tr key={index}>
                                            <td className="border-b border-blue-gray-50 py-3 px-5">
                                                {item.accrualAccounting}
                                            </td>
                                            <td className="border-b border-blue-gray-50 py-3 px-5">
                                                {item.currentPeriod}
                                            </td>
                                            <td className="border-b border-blue-gray-50 py-3 px-5">
                                                {item.priorPeriod}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                        </table>
                    </CardBody>
                </Card>
            </div>
        </div>
    </Homepages>
    )
}

export default Income