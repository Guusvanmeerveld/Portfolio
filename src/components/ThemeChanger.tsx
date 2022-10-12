import { FC, useEffect, useState } from "react";

import { useTheme } from "next-themes";

import styles from "./themeChanger.module.scss";

const ThemeChanger: FC = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return <></>;

	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events
		<a
			role="button"
			tabIndex={0}
			className={styles.main}
			onClick={() => setTheme(theme == "light" ? "dark" : "light")}
		>
			{theme}
		</a>
	);
};

export default ThemeChanger;
