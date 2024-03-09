import z from "zod";

const FooterColumnModel = z.object({
	title: z.string(),
	links: z.object({ url: z.string().url(), text: z.string() }).array()
});

export const FooterPropsModel = z.object({
	columns: FooterColumnModel.array()
});

export type FooterProps = z.infer<typeof FooterPropsModel>;

export default FooterProps;
