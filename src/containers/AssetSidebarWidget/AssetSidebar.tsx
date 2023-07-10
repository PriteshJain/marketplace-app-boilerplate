import Icon from "../../assets/assetsidebar.svg";
import localeTexts from "../../common/locales/en-us/index";
import parse from "html-react-parser";

const AssetSidebarExtension = () => {
  return (
    <div className="asset-sidebar">
      <div className="asset-sidebar-container">
        <div className="asset-sidebar-icon">
          <img src={Icon} alt="icon" />
        </div>
        <div className="app-component-content">
          <h4>{localeTexts.AssetSidebarWidget.title}</h4>
          <p>{parse(localeTexts.AssetSidebarWidget.body)}</p>
          <a
            target="_blank"
            rel="noreferrer"
            href={localeTexts.AssetSidebarWidget.button.url}>
            {localeTexts.AssetSidebarWidget.button.text}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AssetSidebarExtension;
