import { FC, PropsWithChildren } from "react";

export type Component<P> = FC<PropsWithChildren<P>>;
