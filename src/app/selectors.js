// Sélecteurs pour accéder aux données de l'utilisateur dans le store

export const selectUser = (state) => state.user; // Récupère l'objet complet de l'utilisateur
export const selectFirstName = (state) => state.user.firstName; // Récupère le firstName de l'utilisateur
// export const selectLastName = (state) => state.user.lastName; // Récupère le lastName de l'utilisateur
export const selectToken = (state) => state.login.token;
export const selectLodingSession = (state) => state.login.loading;