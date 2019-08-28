export const isRegistered = auth => auth.Authentication==="user"|| auth.Authentication==="moderator"|| auth.Authentication==="admin";
export const isModerator = auth => auth.Authentication==="moderator"|| auth.Authentication==="admin";
export const isAdmin = auth => auth.Authentication==="admin";