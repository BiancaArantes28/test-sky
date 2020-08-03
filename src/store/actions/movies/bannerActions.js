export const FETCH_BANNER = 'FETCH_BANNER';
export const FETCH_BANNER_SUCCESSFUL = 'FETCH_BANNER_SUCCESSFUL';
export const FETCH_BANNER_FAILED = 'FETCH_BANNER_FAILED';

export const fetchBanner = (payload = "") => ({
    type: FETCH_BANNER,
    payload,
});

export const fetchBannerSuccessful = (payload) => ({
    type: FETCH_BANNER_SUCCESSFUL,
    payload,
});

export const fetchBannerFailed = (error) => ({
    type: FETCH_BANNER_FAILED,
    payload: error,
});
