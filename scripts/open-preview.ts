import { spawn, spawnSync } from "node:child_process";
import http from "node:http";
import { once } from "node:events";

const host = "127.0.0.1";
const port = Number(process.env.BLOG_PREVIEW_PORT || 4173);
const url = `http://${host}:${port}/`;
const requestedPath = process.argv[2] && !process.argv[2].startsWith("--") ? process.argv[2] : "/";
const targetPath = requestedPath.startsWith("/") ? requestedPath : `/${requestedPath}`;
const targetUrl = new URL(targetPath, url).href;

const canReach = () =>
  new Promise<boolean>((resolve) => {
    const request = http.get(url, (response) => {
      response.resume();
      resolve((response.statusCode || 0) < 500);
    });
    request.on("error", () => resolve(false));
    request.setTimeout(800, () => {
      request.destroy();
      resolve(false);
    });
  });

const openBrowser = (target: string) => {
  const command: [string, string[]] =
    process.platform === "win32"
      ? ["cmd", ["/c", "start", "", target]]
      : process.platform === "darwin"
        ? ["open", [target]]
        : ["xdg-open", [target]];
  spawn(command[0], command[1], { detached: true, stdio: "ignore" }).unref();
};

const main = async () => {
  let startedPreview = false;

  if (!(await canReach())) {
    const build = spawnSync("npm", ["run", "build"], { stdio: "inherit", shell: process.platform === "win32" });
    if (build.status !== 0) process.exit(build.status || 1);

    const preview = spawn("npm", ["run", "preview", "--", "--port", String(port), "--strictPort"], {
      shell: process.platform === "win32",
      stdio: "inherit"
    });

    for (let attempt = 0; attempt < 30; attempt += 1) {
      if (await canReach()) break;
      await new Promise((resolve) => setTimeout(resolve, 300));
    }

    if (!(await canReach())) {
      preview.kill();
      throw new Error(`预览服务启动失败: ${url}`);
    }

    preview.on("exit", (code) => {
      if (code) process.exitCode = code;
    });
    startedPreview = true;
  }

  openBrowser(targetUrl);
  console.log(`博客预览已打开: ${targetUrl}`);
  if (!startedPreview) return;

  console.log("保持这个终端窗口运行；结束预览可以按 Ctrl+C。");
  await once(process, "SIGINT");
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
