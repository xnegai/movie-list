import axios from "axios";

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '4f298a53e552283bee957836a529baec';

const commonOptions = {
    method: 'GET',
    headers: {
        accept: 'application/json',
    },
};

const commonParams = {
    language: 'en-US',
    api_key: API_KEY,
};

export async function getUpcomingByPage(page: number) {
    const options = {
        ...commonOptions,
        url: `${API_BASE_URL}/movie/upcoming`,
        params: {
            ...commonParams,
            page: page,
        },
    };
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getTopRatedByPage(page: number) {
    const options = {
        ...commonOptions,
        url: `${API_BASE_URL}/movie/top_rated`,
        params: {
            ...commonParams,
            page: page,
        },
    };
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getPopularByPage(page: number) {
    const options = {
        ...commonOptions,
        url: `${API_BASE_URL}/movie/popular`,
        params: {
            ...commonParams,
            page: page,
        },
    };
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}