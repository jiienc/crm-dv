import { HiMiniUser } from "react-icons/hi2";
import Card from '@/components/ui/Card'
import classNames from '@/utils/classNames'
import isLastChild from '@/utils/isLastChild'
import type { Projects } from '../types'
import Tag from '@/components/ui/Tag'

type ProjectsProps = {
  data: Projects[]
}

const Projects = ({ data }: ProjectsProps) => {
  const statusColor: Record<string, string> = {
    'None (0%)': 'bg-gray-200 text-gray-900 dark:bg-gray-300 dark:text-gray-900',
    'Opportunity Scouting (25%)': 'bg-yellow-200 text-gray-900 dark:bg-yellow-300 dark:text-gray-900',
    'Solution Setup (50%)': 'bg-blue-200 text-gray-900 dark:bg-blue-300 dark:text-gray-900',
    'Negotiation of Deal (75%)': 'bg-indigo-200 text-gray-900 dark:bg-indigo-300 dark:text-gray-900',
    'Order Processing (90%)': 'bg-purple-200 text-gray-900 dark:bg-purple-300 dark:text-gray-900',
    'Closed Won (100%)': 'bg-emerald-300 text-gray-900 dark:bg-emerald-400 dark:text-gray-900',
    'Closed Lost (0%)': 'bg-red-300 text-gray-900 dark:bg-red-400 dark:text-gray-900',
    'Cancelled (0%)': 'bg-zinc-300 text-gray-900 dark:bg-zinc-400 dark:text-gray-900',
  }
  

  return (
    <Card>
      <div className="flex items-center justify-between">
        <h4>Projects</h4>
      </div>
      <div className="mt-5">
        {data.map((project, index) => (
          <div
            key={project.id}
            className={classNames(
              'flex items-center justify-between py-2 dark:border-gray-600',
              !isLastChild(data, index) && 'mb-2',
            )}
          >
            <div className="flex items-center gap-2">
              <div>
                <div className="heading-text font-bold">{project.company}</div>
                <div className="flex items-center gap-1">
                  <HiMiniUser size={16} className="text-gray-500" />
                  <span>{project.name}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Tag className={statusColor[project.status]}>
                <span className="capitalize">{project.status}</span>
              </Tag>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default Projects
