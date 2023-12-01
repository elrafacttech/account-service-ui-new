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


const OrganisationDetails = () =>{
    return(
        <Homepages>
            <div className=' w-full h-[100%] overflow-hidden overflow-y-scroll'>
            <Header data={"OrganisationDetails"} />
            <div className="mt-12 mb-8 flex flex-col gap-12">
                <Card>
                <CardHeader variant="gradient" color="gray" className="mb-8 p-6 bg-[#60a563] mx-4  -mt-6">
                        <Typography variant="h6" color="white" className='font-Roboto' style={{ textAlign: 'center' }}>
                            Organisation Details
                        </Typography>
                    </CardHeader>
                </Card>
            </div>
            </div> 
        </Homepages>
    )
}
export default OrganisationDetails