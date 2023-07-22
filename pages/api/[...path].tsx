import httpProxy from "http-proxy";
import Cookies from "cookies";
export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};
import { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  new Promise<void>((resolve, reject) => {
    console.log("ABC");
    const proxy: httpProxy = httpProxy.createProxy();
    const isLogin = req.url === "/api/v1/auth/login";
    console.log(req.url, isLogin);
    const cookies = new Cookies(req, res);
    const authToken = cookies.get("auth-token");
    req.headers.cookie = "";
    if (authToken) {
      req.headers["Authorization"] = authToken;
    }
    if (isLogin) {
      proxy.once("proxyRes", interceptLoginResponse);
    }
    function interceptLoginResponse(
      proxyRes,
      req: NextApiRequest,
      res: NextApiResponse
    ) {
      let apiResponseBody = "";
      proxyRes.on("data", (chunk: string) => {
        apiResponseBody += chunk;
      });
      proxyRes.on("end", () => {
        try {
          console.log({ apiResponseBody });
          const { session } = JSON.parse(apiResponseBody);
          const cookies = new Cookies(req, res);
          cookies.set("auth-token", session.access_token, {
            httpOnly: false,
            secure: false,
          });
          res.status(200).json({ loggedIn: true });
          resolve();
        } catch (err) {
          reject(err);
        }
      });
    }
    proxy.once("error", reject);
    // proxy.once("proxyRes", resolve).once("error", reject).web(req, res, {
    //   changeOrigin: true,
    //   target: process.env.API_URL,
    // });
    proxy.web(req, res, {
      changeOrigin: true,
      target: process.env.API_URL,
      autoRewrite: false,
      selfHandleResponse: isLogin,
    });
  });
}
