import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import OpacityIcon from "@mui/icons-material/Opacity";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";

function getDayOfWeek(dateTimeString = "") {
    const date = new Date(dateTimeString.split(" ")[0]);
    return date.toLocaleDateString("en-US", { weekday: "long" });
}

function getFirstFiveDaysFromForecast(forecast) {
return forecast?.list?.filter((days, ind) => ind % 8 === 0).slice(0, 5);
}

function renderWeatherIcon(condition){
switch (condition) {
    case "Sunny":
        return <WbSunnyIcon />;
    case "Clouds":
        return <CloudIcon />;
    case "Rain":
        return <WaterDropIcon />;
    case "Thunderstorm":
        return <ThunderstormIcon />;
    case "Drizzle":
        return <OpacityIcon />;
    case "Snow":
        return <AcUnitIcon />;
    default:
        return <CloudIcon />;
    }
};

export  {
    getDayOfWeek,
    getFirstFiveDaysFromForecast,
    renderWeatherIcon
}