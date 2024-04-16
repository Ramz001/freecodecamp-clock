import Icon from "../Icon/Icon.component";
import Options from "../Options/Options.component";
import MainClock from "../Main-Clock/Main-Clock.component";
import SettingsPopup from "../Settings/Settings.component";
import { useAppSelector } from "../../features/timer/timer.hooks";

const ClockContainer = () => {
  const { selectedFont } = useAppSelector((store) => store.timer);

  return (
    <div
      className={`${selectedFont} bg-blue-950 h-svh md:h-screen relative flex flex-col gap-y-[4.25%] py-[2.25%]`}
    >
      <Icon />
      <Options />
      <MainClock />
      <SettingsPopup />
    </div>
  );
};

export default ClockContainer;
