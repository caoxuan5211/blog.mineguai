import { hydrateRoot } from "react-dom/client";
import { AppForPath } from "./App";
import { siteData } from "./generated/site-data";
import "./styles.css";
import { initPageMotion } from "./motion";

hydrateRoot(document.getElementById("root") as HTMLElement, <AppForPath path={window.location.pathname} site={siteData} />);

initPageMotion();
