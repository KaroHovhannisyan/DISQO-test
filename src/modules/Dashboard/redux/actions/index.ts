export const GET_PUBLIC_GISTS: string = "GET_PUBLIC_GISTS";
export const GET_PUBLIC_GISTS_SUCCES: string = "GET_PUBLIC_GISTS_SUCCES";

export const getPublicGists = () => ({type: GET_PUBLIC_GISTS});
export const getPublicGistsSuccess = (data: any) => ({type: GET_PUBLIC_GISTS_SUCCES, payload: { data }});