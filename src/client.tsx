import { createRoot, hydrateRoot } from "react-dom/client";
import { AppForPath } from "./App";
import { siteData } from "./generated/site-data";
import "./styles.css";
import { initPageMotion } from "./motion";

const root = document.getElementById("root") as HTMLElement;
const app = <AppForPath path={window.location.pathname} site={siteData} />;

if (root.firstElementChild) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}

initPageMotion();
