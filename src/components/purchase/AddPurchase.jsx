import React from "react";
import Homepages from "../../pages/Homepages";
import Header from '../Header' 
import { useNavigate } from "react-router-dom";
import Select from "react-select"
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


const AddPurchase = () => {


    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/purchase");
    };

    const handleSubmit = () => {
        // Handle the form submission logic
        // You can send the data to the server or perform any other actions
        console.log("Form submitted!");
    };

    const productNameOptions = [
        { value: "product 1" , label: "product 1"},
        { value: "product 2" , label: "product 2"},
        { value: "product 3" , label: "product 3"},
    ];

    const productCategoryOptions = [
        { value: "product 1" , label: "product 1"},
        { value: "product 2" , label: "product 2"},
        { value: "product 3" , label: "product 3"},
    ];

    const vatAppliableOptions = [
        { value: "Yes" , label: "Yes"},
        { value: "No"  , label: "No"},
    ];

    const paymentTypeOptions = [ 
        { value: "Cash" , label: "Cash"},
        { value: "Credit", label: "Credit"},
    ];

    return(
        <Homepages>
            <div className=' w-full h-[100%] overflow-hidden overflow-y-scroll'>
            <Header data={"Purchase"} />
            <div className="mt-12 mb-8 flex flex-col gap-12">
            <Card>
                    <CardHeader variant="gradient" color="gray" className="mb-8 p-6 bg-[#60a563] mx-4  -mt-6">
                        <Typography variant="h6" color="white" className='font-Roboto' style={{ textAlign: 'center' }}>
                            Add Purchase
                        </Typography>
                    </CardHeader>
                    <CardBody className="overflow-x-scroll px-0 pt-0 pb-2 ">
                    <div className="mb-4 ml-4">
                                <Typography variant="body" className="text-base font-medium text-blue-gray-700">
                                    Product Name:
                                </Typography>
                                <Select
                                    options={productNameOptions}
                                    isSearchable
                                    placeholder="Select product name"
                                    className="mt-2"
                                />
                            </div>
                            <div className="mb-4 ml-4">
                            <Typography variant="body" className="text-base font-medium text-blue-gray-700">
                                    Product Category:
                                </Typography>
                                <Select
                                    options={productCategoryOptions}
                                    isSearchable
                                    placeholder="Select product cateogry"
                                    className="mt-2"
                                />
                            </div>
                            <div className="mb-4 ml-4">
                            <Typography variant="body" className="text-base font-medium text-blue-gray-700">
                                    Units:
                                </Typography>
                                <Input
                                    type="text"
                                    placeholder="Enter the units"
                                    className="mt-2"
                                />
                            </div>
                            <div className="mb-4 ml-4">
                            <Typography variant="body" className="text-base font-medium text-blue-gray-700">
                                    Unit Cost:
                                </Typography>
                                <Input
                                    type="text"
                                    placeholder="Enter the unit cost"
                                    className="mt-2"
                                />
                            </div>
                            <div className="mb-4 ml-4">
                            <Typography variant="body" className="text-base font-medium text-blue-gray-700">
                                    Invoice Value:
                                </Typography>
                                <Input
                                    type="text"
                                    placeholder="Enter the invoice value"
                                    className="mt-2"
                                />
                            </div>
                            <div className="mb-4 ml-4">
                            <Typography variant="body" className="text-base font-medium text-blue-gray-700">
                                    VAT Applicable:
                                </Typography>
                                <Select
                                    options={vatAppliableOptions}
                                    isSearchable
                                    placeholder="Select"
                                    className="mt-2"
                                />
                            </div>
                            <div className="mb-4 ml-4">
                            <Typography variant="body" className="text-base font-medium text-blue-gray-700">
                                    VAT:
                                </Typography>
                                <Input
                                    type="text"
                                    placeholder="Enter the vat"
                                    className="mt-2"
                                />
                            </div>
                            <div className="mb-4 ml-4">
                            <Typography variant="body" className="text-base font-medium text-blue-gray-700">
                                    Payment Type:
                                </Typography>
                                <Select
                                    options={paymentTypeOptions}
                                    isSearchable
                                    placeholder="Select payment"
                                    className="mt-2"
                                />
                            </div>
                            <div className="mb-4 ml-4">
                            <Typography variant="body" className="text-base font-medium text-blue-gray-700">
                                    Invoice:
                                </Typography>
                                <Input
                                    type="text"
                                    placeholder="Enter the invoice "
                                    className="mt-2"
                                />
                            </div>
                            <div className="mb-4 ml-4">
                            <Typography variant="body" className="text-base font-medium text-blue-gray-700">
                                    Customer:
                                </Typography>
                                <Input
                                    type="text"
                                    placeholder="Enter the customer"
                                    className="mt-2"
                                />
                            </div>
                            <div className="mb-4 ml-4">
                            <Typography variant="body" className="text-base font-medium text-blue-gray-700">
                                    OtherTaxes:
                                </Typography>
                                <Input
                                    type="text"
                                    placeholder="Enter the taxes"
                                    className="mt-2"
                                />
                            </div>
                            <div className="mb-4 ml-4">
                            <Typography variant="body" className="text-base font-medium text-blue-gray-700">
                                    Total:
                                </Typography>
                                <Input
                                    type="text"
                                    placeholder="Enter the total"
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

export default AddPurchase