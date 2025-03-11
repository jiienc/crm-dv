import Button from '@/components/ui/Button'
// import { TbCloudDownload } from 'react-icons/tb'
import { TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useUsersList from '../hooks/useUsersList' 
import { CSVLink } from 'react-csv'

const UsersListActionTools = () => {
    const navigate = useNavigate()

    const { usersList } = useUsersList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <CSVLink
                className="w-full"
                filename="usersList.csv"
                data={usersList}
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
                onClick={() => navigate('/concepts/users/users-create')}
            >
                Add new
            </Button>
        </div>
    )
}

export default UsersListActionTools
