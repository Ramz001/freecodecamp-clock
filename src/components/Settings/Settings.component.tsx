import GearSolid from "../../assets/icons/gear-solid.svg";
import SettingsPopup from "../Settings-Popup/Setttings-Popup.component";

import {
  useAppDispatch,
  useAppSelector,
} from "../../features/timer/timer.hooks";
import { togglePopup } from "../../features/timer/timer.slice";

const Settings = () => {
  const dispatch = useAppDispatch();
  const { isSettingsModalOpen } = useAppSelector((store) => store.timer);

  const handlePopup = () => {
    dispatch(togglePopup());
  };

  return (
    <div className="flex items-center justify-center mx-auto">
      <img
        src={GearSolid}
        alt="gear icon"
        className="w-5 h-5 ease-linear delay-100 cursor-pointer sm:w-6 sm:h-6 md:w-8 md:h-8 active:rotate-90 hover:rotate-90 selection:rotate-90"
        onClick={handlePopup}
      />

      {isSettingsModalOpen && <SettingsPopup handlePopup={handlePopup} />}
    </div>
  );
};

export default Settings;
