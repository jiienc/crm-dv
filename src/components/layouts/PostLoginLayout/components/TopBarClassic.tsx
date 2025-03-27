import Header from '@/components/template/Header'
// import SidePanel from '@/components/template/SidePanel'
import UserProfileDropdown from '@/components//template/UserProfileDropdown'
// import LanguageSelector from '@/components/template/LanguageSelector'
import Notification from '@/components/template/Notification'
import HeaderLogo from '@/components/template/HeaderLogo'
// import Search from '@/components/template/Search'
import MobileNav from '@/components/template/MobileNav'
import HorizontalNav from '@/components/template/HorizontalNav'
import LayoutBase from '@/components//template/LayoutBase'
import useResponsive from '@/utils/hooks/useResponsive'
import { LAYOUT_TOP_BAR_CLASSIC } from '@/constants/theme.constant'
import type { CommonProps } from '@/@types/common'
import ModeSwitcher from '@/components/template/ThemeConfigurator/ModeSwitcher'
import { useState } from 'react'
import Button from '@/components/ui/Button'

const TopBarClassic = ({ children }: CommonProps) => {
  const { larger, smaller } = useResponsive()

  const [loading, setLoading] = useState(false)
  
    const onClick = () => {
      setLoading(true)
  
      setTimeout(() => {
        setLoading(false)
      }, 3000)
    }

  return (
    <LayoutBase
      type={LAYOUT_TOP_BAR_CLASSIC}
      className="app-layout-top-bar-classic flex flex-auto flex-col min-h-screen"
    >
      <div className="flex flex-auto min-w-0">
        <div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full">
          <Header
            container
            className="shadow dark:shadow-2xl"
            headerStart={
              <>
                {smaller.lg && <MobileNav />}
                <HeaderLogo />
              </>
            }
            headerMiddle={<>{larger.lg && <HorizontalNav />}</>}
            headerEnd={
              <>
                {/* <Search /> */}
                <Button variant="solid" loading={loading} onClick={onClick}>
                  Checkin!
                </Button>
                {/* <LanguageSelector /> */}
                <ModeSwitcher />
                <Notification />
                {/* <SidePanel /> */}
                <UserProfileDropdown hoverable={false} />
              </>
            }
          />
          {children}
        </div>
      </div>
    </LayoutBase>
  )
}

export default TopBarClassic
