import Icon from "../Icon/Icon.component"
import Options from "../Options/Options.component"
import MainClock from "../Main-Clock/Main-Clock.component"
import SettingsPopup from "../Settings-Popup/Settings-Popup.component"

const ClockContainer = () => {
  return (
    <div className='bg-blue-950 h-screen relative flex flex-col gap-y-10 py-6'>
      <Icon />
      <Options />
      <MainClock />
      <SettingsPopup />
    </div>
  )
}

export default ClockContainer