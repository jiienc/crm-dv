import Button from '@/components/ui/Button'
// import { TbCloudDownload } from 'react-icons/tb'
import { TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useTicketsList from '../hooks/useTicketsList' 
import { CSVLink } from 'react-csv'

const TicketsListActionTools = () => {
    const navigate = useNavigate()

    const { ticketsList } = useTicketsList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <CSVLink
                className="w-full"
                filename="ticketsList.csv"
                data={ticketsList}
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
                onClick={() => navigate('/concepts/tickets/tickets-create')}
            >
                Add new
            </Button>
        </div>
    )
}

export default TicketsListActionTools
