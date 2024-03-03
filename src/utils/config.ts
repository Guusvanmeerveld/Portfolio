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
	process.env.ALLOW_REGISTRATION !== undefined ? true : false;

export const saltRoundsForPassword =
	parseInt(process.env.PASSWORD_SALT_ROUNDS ?? "") || 10;

export const landingJsonLocation =
	process.env.LANDING_JSON_LOCATION ?? "/app/landing.json";
