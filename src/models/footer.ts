import z from "zod";

export const FooterPropsModel = z.object({});

export type FooterProps = z.infer<typeof FooterPropsModel>;

export default FooterProps;
