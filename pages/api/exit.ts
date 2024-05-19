// FIXME: fix ts errors
import { NextApiRequest, NextApiResponse } from 'next';
export const runtime = 'edge';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    res.clearPreviewData();
    //@ts-ignore
    res.redirect(req.query.slug);
};

export default handler;
