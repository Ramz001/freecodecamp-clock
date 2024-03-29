import Icon from "../Icon/Icon.component";
import Options from "../Options/Options.component";
import MainClock from "../Main-Clock/Main-Clock.component";
import SettingsPopup from "../Settings/Settings.component";
import { useAppSelector } from "../../features/timer/timer.hooks";

const ClockContainer = () => {
  const { selectedFont } = useAppSelector((store) => store.timer);

  return (
    <div
      className={`${selectedFont} bg-blue-950 min-h-svh relative flex flex-col gap-y-10 py-6`}
    >
      <Icon />
      <Options />
      <MainClock />
      <SettingsPopup />
    </div>
  );
};

export default ClockContainer;
