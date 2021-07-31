/**
 * Router
 */

export const MAIN_PATH: string = "/";
export const DASHBOARD: string = "/dashboard";
export const CREATE_NOTEPAD: string = "/create";
export const NOTEPAD_BY_ID: string = "/notepads/:id";
export const CREATE_ROUTE_FOR_NOTEPAD: (id: string) => string = (id: string) =>
  `/notepads/${id}`;

/**
 * Other App configs
 */

export const AUTHORIZE_TOKEN: string | undefined =
  process.env.REACT_APP_GITHUB_AUTHORIZE_TOKEN;
export const GITHUB_API_URL: string | undefined =
  process.env.REACT_APP_GITHUB_API_URL;
