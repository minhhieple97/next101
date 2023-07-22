import httpProxy from "http-proxy";
export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};
import { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  new Promise((resolve, reject) => {
    const proxy: httpProxy = httpProxy.createProxy();
    proxy.once("proxyRes", resolve).once("error", reject).web(req, res, {
      changeOrigin: true,
      target: process.env.API_URL,
    });
  });
}
