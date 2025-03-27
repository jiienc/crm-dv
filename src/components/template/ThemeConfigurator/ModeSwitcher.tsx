import { useCallback } from 'react'
import useDarkMode from '@/utils/hooks/useDarkMode'
import SwitcherTheme from '@/components/ui/SwitcherTheme'

const ModeSwitcher = () => {
  const [isDark, setIsDark] = useDarkMode()

  const onSwitchChange = useCallback(
    (checked: boolean) => {
      setIsDark(checked ? 'dark' : 'light')
    },
    [setIsDark],
  )

  return (
    <div>
      <SwitcherTheme
        defaultChecked={isDark}
        onChange={(checked) => onSwitchChange(checked)}
      />
    </div>
  )
}

export default ModeSwitcher
