import "./PopOverCard.css";
import LaunchIcon from "@mui/icons-material/Launch";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function PopOverCard() {
  return (
    <div id="card__container">
      <div id="left__container">
        <div className="flex flex-col">
        <div id="item__container">
          <LaunchIcon
            sx={{ fontSize: 48, color: "#3B82F6", paddingRight: 1 }}
          />
          <div id="item__right">
            <div id="item__header">
              <h3 className="text-[#3B82F6] text-sm font-[600]">
                Strategy Conceling
              </h3>
              <ArrowForwardIcon sx={{ color: "#3B82F6" }} />
            </div>
            <p className="text-sm font-sans">
              Define and answer strategic bussiness questions.
            </p>
          </div>
        </div>
        <div id="item__container">
          <LaunchIcon
            sx={{ fontSize: 48, color: "#3B82F6", paddingRight: 1 }}
          />
          <div id="item__right">
            <div id="item__header">
              <h3 className="text-[#3B82F6] text-sm font-[600]">
                Solution Engineering
              </h3>
              <ArrowForwardIcon sx={{ color: "#3B82F6" }} />
            </div>
            <p className="text-sm font-sans">
              Define and answer strategic bussiness solutions.
            </p>
          </div>
        </div>
        <div id="item__container">
          <LaunchIcon
            sx={{ fontSize: 48, color: "#3B82F6", paddingRight: 1 }}
          />
          <div id="item__right">
            <div id="item__header">
              <h3 className="text-[#3B82F6] text-sm font-[600]">
                Data Service & Solution
              </h3>
              <ArrowForwardIcon sx={{ color: "#3B82F6" }} />
            </div>
            <p className="text-sm font-sans">
              Define and answer strategic bussiness questions.
            </p>
          </div>
        </div>
        <div id="item__container">
          <LaunchIcon
            sx={{ fontSize: 48, color: "#3B82F6", paddingRight: 1 }}
          />
          <div id="item__right">
            <div id="item__header">
              <h3 className="text-[#3B82F6] text-sm font-[600]">
                Design Studio
              </h3>
              <ArrowForwardIcon sx={{ color: "#3B82F6" }} />
            </div>
            <p className="text-sm font-sans">
              Define and answer strategic bussiness questions.
            </p>
          </div>
        </div>
        </div>
      </div>
      
      <div className="flex flex-col justify-start items-center gap-4 px-1 w-[50%] h-[40vh] border-s-2">
        <h1 id="nav__com__desc__heading">Tech</h1>
        <p id="nav__com__desc__h">Some Content Here...</p>
        <p id="nav__com__desc__h">Some Content Here...</p>
        <p id="nav__com__desc__h">Some Content Here...</p>
        <p id="nav__com__desc__h">Some Content Here...</p>
      </div>
    </div>
  );
}

export default PopOverCard;
