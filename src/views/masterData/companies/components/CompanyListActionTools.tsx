import Button from '@/components/ui/Button'
import { TbUserPlus } from 'react-icons/tb'
// import { TbCloudDownload } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useCompanyList from '../hooks/useCompanyList'
import { CSVLink } from 'react-csv'

const CompanyListActionTools = () => {
    const navigate = useNavigate()

    const { companyList } = useCompanyList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <CSVLink
                className="w-full"
                filename="companyList.csv"
                data={companyList}
            >
                {/* <Button
                    icon={<TbCloudDownload className="text-xl" />}
                    className="w-full"
                >
                    Download
                </Button> */}
            </CSVLink>
            <Button
                variant="solid"
                icon={<TbUserPlus className="text-xl" />}
                onClick={() => navigate('/concepts/companies/company-create')}
            >
                Add new
            </Button>
        </div>
    )
}

export default CompanyListActionTools
