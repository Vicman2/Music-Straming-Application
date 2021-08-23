export enum UserActionTypes{
    // Fetching user actions
    FETCH_USER = "FETCH_USER_START",
    STORE_USER = "STORE_USER", 
    FETCH_USER_ERROR = "FETCH_USER_ERROR",

    // Sign in user
    SIGN_UP_USER = "SIGN_UP_USER",
    SIGN_UP_USER_ERROR = "SIGN_UP_USER_ERROR",


    // Login user
    LOGIN_USER = "LOGIN_USER",
    LOGIN_USER_ERROR = "LOGIN_USER_ERROR",

    // Follow user actions
    FOLLOW_USER = "FOLLOW_USER", 
    FOLLOW_USER_ERROR = "FOLLOW_USER_ERROR",

    // Make artist actions
    MAKE_ARTIST = "MAKE_ARTIST", 
    MAKE_ARTIST_ERROR = "MAKE_ARTIST_ERROR"
    
}