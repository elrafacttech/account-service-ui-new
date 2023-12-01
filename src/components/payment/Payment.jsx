import React from "react";
import Homepages from "../../pages/Homepages";
import Header from '../Header'
import { useNavigate } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Chip,
    Tooltip,
    Progress,
    Button,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import authorsTableData from '../../data/authors-table-data';
import projectsTableData from '../../data/projects-table-data';





const Payment = () =>{

    const navigate = useNavigate()

    const handleAddPayment = () =>{

        navigate('/addpayment')
    }

    return(
        <Homepages>
        <div className=' w-full h-[100%] overflow-hidden overflow-y-scroll'>
        <Header data={"Payment"} />
        <div className="mt-12 mb-8 flex flex-col gap-12">
                <Card>
                    <CardHeader variant="gradient" color="gray" className="mb-8 p-6 bg-[#60a563] mx-4  -mt-6">
                        <Typography variant="h6" color="white" className='font-Roboto' style={{ textAlign: 'center' }}>
                            Payment
                        </Typography>
                    </CardHeader>
                    <CardBody className="overflow-x-scroll px-0 pt-0 pb-2 ">
                    <div className="flex justify-end mb-4 mr-4">
                                <Button className="bg-[#60a563]" ripple="light" onClick={handleAddPayment}>
                                    Add Payment
                                </Button>
                    </div>
                        <table className="w-full min-w-[640px] table-auto">
                            <thead>
                                <tr>
                                    {["Date","Payment Method","Cheque No. or Voucher #","Debit to","Invoice Amount",""].map((el) => (
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
                        </table>
                    </CardBody>
                </Card>
            </div>
        </div>
    </Homepages>
    )
}

export default Payment