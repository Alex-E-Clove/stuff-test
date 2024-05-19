// FIXME: fix ts errors
import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.clearPreviewData();
  //@ts-ignore
  res.redirect(req.query.slug);
};

export default handler;
