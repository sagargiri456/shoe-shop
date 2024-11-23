import {handleAuth} from "@kinde-oss/kinde-auth-nextjs/server";
export const GET = handleAuth();


//It is very important that we name is only route.ts and nothing else because then only the nextjs will 
//know that this is to be used to handle routes for the authentication