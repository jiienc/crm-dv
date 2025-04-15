import { useState, useEffect, useRef } from 'react'
import Card from '@/components/ui/Card'
import Select from '@/components/ui/Select'
import AbbreviateNumber from '@/components/shared/AbbreviateNumber'
import Chart from '@/components/shared/Chart'
import { useThemeStore } from '@/store/themeStore'
import classNames from '@/utils/classNames'
import { COLOR_1, COLOR_2, COLOR_4 } from '@/constants/chart.constant'
import { options } from '../constants'
import { NumericFormat } from 'react-number-format'
import { TbCoin, TbWeight, TbGauge } from 'react-icons/tb'
import type { ReactNode } from 'react'
import type { salesOverview, SalesTypes, SalesCategory } from '../types'

type SalesCardProps = {
  title: string
  value: number | ReactNode
  icon: ReactNode
  iconClass: string
  label: SalesCategory
  active: boolean
  onClick: (label: SalesCategory) => void
}

type SalesGroupsProps = {
  data: salesOverview
}

const chartColors: Record<SalesCategory, string> = {
  salesValue: COLOR_1,
  salesVolume: COLOR_2,
  deltaP: COLOR_4,
}

const SalesCard = (props: SalesCardProps) => {
  const {
    title,
    value,
    label,
    icon,
    iconClass,
    active,
    onClick,
  } = props

  return (
    <button
      className={classNames(
        'p-4 rounded-2xl cursor-pointer ltr:text-left rtl:text-right transition duration-150 outline-none',
        active && 'bg-white dark:bg-gray-900 shadow-md',
      )}
      onClick={() => onClick(label)}
    >
      <div className="flex md:flex-col-reverse gap-2 2xl:flex-row justify-between relative">
        <div>
          <div className="mb-4 text-sm font-semibold">{title}</div>
          <h3 className="mb-1">{value}</h3>
        </div>
        <div
          className={classNames(
            'flex items-center justify-center min-h-12 min-w-12 max-h-12 max-w-12 text-gray-900 rounded-full text-2xl',
            iconClass,
          )}
        >
          {icon}
        </div>
      </div>
    </button>
  )
}

const SalesOverview = ({ data }: SalesGroupsProps) => {
  const [selectedCategory, setSelectedCategory] =
    useState<SalesCategory>('salesValue')

  const [selectedSalesTypes, setSelectedSalesTypes] = useState<SalesTypes>('all')

  const sideNavCollapse = useThemeStore((state) => state.layout.sideNavCollapse)

  const isFirstRender = useRef(true)

  useEffect(() => {
    if (!sideNavCollapse && isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    if (!isFirstRender.current) {
      window.dispatchEvent(new Event('resize'))
    }
  }, [sideNavCollapse])

  const currentMonthYear = new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' });

  return (
    <Card>
      <div className="flex items-center justify-between">
        <h4>Sales Overview</h4>
        <Select
          className="w-[120px]"
          size="sm"
          placeholder="Select types"
          value={options.filter((option) => option.value === selectedSalesTypes)}
          options={options}
          isSearchable={false}
          onChange={(option) => {
            if (option?.value) {
              setSelectedSalesTypes(option?.value)
            }
          }}
        />
      </div>
      <h5>on {currentMonthYear}</h5>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-2xl p-3 bg-gray-100 dark:bg-gray-700 mt-4">
        <SalesCard
          title="Sales Value (USD)"
          value={
            <NumericFormat
              displayType="text"
              value={data.salesValue[selectedSalesTypes].value}
              prefix={'$'}
              thousandSeparator={true}
            />
          }
          iconClass="bg-sky-200"
          icon={<TbCoin />}
          label="salesValue"
          active={selectedCategory === 'salesValue'}
          onClick={setSelectedCategory}
        />
        <SalesCard
          title="Sales Volume (Ton)"
          value={
            <NumericFormat
              displayType="text"
              value={data.salesVolume[selectedSalesTypes].value}
              thousandSeparator={true}
            />
          }
          iconClass="bg-emerald-200"
          icon={<TbWeight />}
          label="salesVolume"
          active={selectedCategory === 'salesVolume'}
          onClick={setSelectedCategory}
        />
        <SalesCard
          title="Delta-P"
          value={
            <AbbreviateNumber
              value={data.deltaP[selectedSalesTypes].value}
            />
          }
          iconClass="bg-purple-200"
          icon={<TbGauge />}
          label="deltaP"
          active={selectedCategory === 'deltaP'}
          onClick={setSelectedCategory}
        />
      </div>
      <Chart
        type="line"
        series={data[selectedCategory][selectedSalesTypes].chartData.series}
        xAxis={data[selectedCategory][selectedSalesTypes].chartData.date}
        height="410px"
        customOptions={{
          legend: { show: false },
          colors: [chartColors[selectedCategory]],
        }}
      />
    </Card>
  )
}

export default SalesOverview
