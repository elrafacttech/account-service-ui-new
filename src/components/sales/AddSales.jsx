import React from "react";
import Homepages from "../../pages/Homepages";
import Header from '../Header' 
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
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


const AddSales = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/sales");
    };

    const handleSubmit = () => {
        // Handle the form submission logic
        // You can send the data to the server or perform any other actions
        console.log("Form submitted!");
    };

    const productNameOptions = [
        { value: "product1", label: "Product 1" },
        { value: "product2", label: "Product 2" },
        { value: "product3", label: "Product 3" },
        // Add more options as needed
    ];

    const vatAppliableOptions = [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
        // Add more options as needed
    ];

    const productCategoryOptions = [
        { value: "product1", label: "Product 1" },
        { value: "product2", label: "Product 2" },
        { value: "product3", label: "Product 3" },
        // Add more options as needed
    ];

    const paymentTypeOptions = [
        { value: "Cash", label: "Cash" },
        { value: "Credit", label: "Credit" },
        // Add more options as needed
    ];

    return (
        <Homepages>
            <div className='w-full h-[100%] overflow-hidden overflow-y-scroll'>
                <Header data={"Add Sales"} />
                <div className="mt-12 mb-8 flex flex-col gap-12">
                    <Card>
                        <CardHeader variant="gradient" color="gray" className="mb-8 p-6 bg-[#60a563] mx-4  -mt-6">
                            <Typography variant="h6" color="white" className='font-Roboto' style={{ textAlign: 'center' }}>
                                Add Sales
                            </Typography>
                        </CardHeader>
                        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2 ">
                            {/* Add your input fields here */}
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
                                    placeholder="Select product category"
                                    className="mt-2"
                                />
                            </div>
                            <div className="mb-4 ml-4">
                            <Typography variant="body" className="text-base font-medium text-blue-gray-700">
                                    Units:
                                </Typography>
                                <Input
                                    type="text"
                                    placeholder="Enter  the units"
                                    className="mt-2"
                                />
                            </div>
                            <div className="mb-4 ml-4">
                            <Typography variant="body" className="text-base font-medium text-blue-gray-700">
                                    Unit Price:
                                </Typography>
                                <Input
                                    type="text"
                                    placeholder="Enter the unit price"
                                    className="mt-2"
                                />
                            </div>   
                            <div className="mb-4 ml-4">
                            <Typography variant="body" className="text-base font-medium text-blue-gray-700">
                                    Invoice Value:
                                </Typography>
                                <Input
                                    type="text"
                                    placeholder="Enter invoice value"
                                    className="mt-2"
                                />
                            </div>
                            <div className="mb-4 ml-4">
                            <Typography variant="body" className="text-base font-medium text-blue-gray-700">
                                    VAT Appliable:
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
                                    placeholder="Select"
                                    className="mt-2"
                                />
                            </div>
                            <div className="mb-4 ml-4">
                            <Typography variant="body" className="text-base font-medium text-blue-gray-700">
                                   Invoice:
                                </Typography>
                                <Input
                                    type="text"
                                    placeholder="Enter invoice"
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
                                   otherTaxes:
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

export default AddSales