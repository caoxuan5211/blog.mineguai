const { spawn } = require("node:child_process");
const http = require("node:http");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const rawUrl = process.argv.slice(2).join(" ");
const port = Number(process.env.BLOG_WRITER_PORT || 5211);
const baseUrl = `http://127.0.0.1:${port}/`;

const parseSourcePath = (value) => {
  try {
    const url = new URL(value);
    return url.searchParams.get("path") || "";
  } catch {
    return "";
  }
};

const writerUrl = () => {
  const sourcePath = parseSourcePath(rawUrl);
  return sourcePath ? `${baseUrl}?path=${encodeURIComponent(sourcePath)}` : baseUrl;
};

const probeWriter = () =>
  new Promise((resolve) => {
    const request = http.get(baseUrl, { timeout: 700 }, (response) => {
      response.resume();
      resolve(true);
    });
    request.on("timeout", () => {
      request.destroy();
      resolve(false);
    });
    request.on("error", () => resolve(false));
  });

const openBrowser = (target) => {
  spawn("cmd", ["/c", "start", "", target], {
    detached: true,
    stdio: "ignore",
    windowsHide: true
  }).unref();
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const waitForWriter = async (deadline = Date.now() + 12000) => {
  while (Date.now() <= deadline) {
    if (await probeWriter()) return true;
    await sleep(350);
  }
  return false;
};

const startWriter = () => {
  spawn("cmd", ["/c", "npm", "run", "write"], {
    cwd: root,
    env: { ...process.env, BLOG_WRITER_NO_OPEN: "1" },
    detached: true,
    stdio: "ignore",
    windowsHide: true
  }).unref();
};

(async () => {
  const target = writerUrl();
  if (await probeWriter()) {
    openBrowser(target);
    return;
  }
  startWriter();
  await waitForWriter();
  openBrowser(target);
})();
