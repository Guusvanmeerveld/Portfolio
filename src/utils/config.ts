export const giteaServerUrl =
	process.env.NEXT_PUBLIC_GITEA_SERVER ?? "https://git.guusvanmeerveld.dev";

export const giteaUsername =
	process.env.NEXT_PUBLIC_GITEA_USERNAME ?? "Guusvanmeerveld";

export const sessionCookieName = "portfolio-session";
export const sessionPassword = process.env.SESSION_PASSWORD ?? "";

export const sessionOptions = {
	cookieName: sessionCookieName,
	password: sessionPassword,
	cookieOptions: {
		secure: process.env.NODE_ENV === "production"
	}
};

export const registrationIsEnabled =
	process.env.NEXT_PUBLIC_ALLOW_REGISTRATION !== undefined ? true : false;

export const saltRoundsForPassword =
	parseInt(process.env.PASSWORD_SALT_ROUNDS ?? "") || 10;
