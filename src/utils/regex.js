/**
 * Allow emails with at most one more subdomain
 */
export const EMAIL_PATTERN = /^[a-z0-9._-]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/;

/**
 * Allow passwords (8 characters or higher) with at least and one number
 */
export const PASSWORD_PATTERN = /^(?=.*\d).{8,}$/;