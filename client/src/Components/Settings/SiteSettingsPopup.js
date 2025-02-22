import SiteSettingsPomodoro from "./SiteSettingsPomodoro";
import SiteSettingsNotification from "./SiteSettingsNotification";

const SiteSettingsPopup = (props) => {
  const handlePropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="popup-box" onClick={() => props.close(false)}>
      <div className="box" onClick={(e) => handlePropagation(e)}>
        <span className="close-icon" onClick={() => props.close(false)}>
          x
        </span>
        <h2>Settings</h2>
        <SiteSettingsPomodoro />
        <SiteSettingsNotification />
      </div>
    </div>
  );
};

export default SiteSettingsPopup;
