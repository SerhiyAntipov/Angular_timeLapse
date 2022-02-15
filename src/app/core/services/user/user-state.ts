export interface UserState {

    /**
     * @returns {string | null}
     */
    getAuthToken(): string | null;

    /**
     * @param {string} authToken
     */
    setAuthToken(authToken: string): void;

    /**
     * @returns {boolean}
     */
    hasAuthToken(): boolean;

    clearAuthToken(): void;

}