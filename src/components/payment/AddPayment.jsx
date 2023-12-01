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
    Input,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import authorsTableData from '../../data/authors-table-data';
import projectsTableData from '../../data/projects-table-data';


const AddPayment = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/payment");
    };

    const handleSubmit = () => {
        // Handle the form submission logic
        // You can send the data to the server or perform any other actions
        console.log("Form submitted!");
    };

    return(
        <Homepages>
            <div className=' w-full h-[100%] overflow-hidden overflow-y-scroll'>
            <Header data={"AddPayment"} />
            <div className="mt-12 mb-8 flex flex-col gap-12">
            <Card>
                    <CardHeader variant="gradient" color="gray" className="mb-8 p-6 bg-[#60a563] mx-4  -mt-6">
                        <Typography variant="h6" color="white" className='font-Roboto' style={{ textAlign: 'center' }}>
                            Add Payment
                        </Typography>
                    </CardHeader>
                    <CardBody className="overflow-x-scroll px-0 pt-0 pb-2 ">
                    <div className="mb-4 ml-4">
                                <Typography variant="body" className="text-base font-medium text-blue-gray-700">
                                    Payment Method:
                                </Typography>
                                <Input
                                    type="text"
                                    placeholder="Enter payment"
                                    className="mt-2"
                                />
                            </div>
                            <div className="mb-4 ml-4">
                                <Typography variant="body" className="text-base font-medium text-blue-gray-700">
                                    Cheque No. or Voucher:
                                </Typography>
                                <Input
                                    type="text"
                                    placeholder="Enter cheque no"
                                    className="mt-2"
                                />
                            </div>
                            <div className="mb-4 ml-4">
                                <Typography variant="body" className="text-base font-medium text-blue-gray-700">
                                    Debited to:
                                </Typography>
                                <Input
                                    type="text"
                                    placeholder="Enter debit"
                                    className="mt-2"
                                />
                            </div>
                            <div className="mb-4 ml-4">
                                <Typography variant="body" className="text-base font-medium text-blue-gray-700">
                                    Invoice Amount:
                                </Typography>
                                <Input
                                    type="text"
                                    placeholder="Enter invoice amount"
                                    className="mt-2"
                                />
                            </div>
                            <div className="flex justify-end mt-4 mr-4">
                                <Button className="bg-[#60a563]" ripple="light" onClick={handleSubmit}>
                                    Submit
                                </Button>
                                <Button className="ml-2 bg-[#60a563]" ripple="light" onClick={handleBack}>
                                    Back
                                </Button>
                            </div>
                    </CardBody>
            </Card>
            </div>
            </div>
        </Homepages>
    )
}

export default AddPayment