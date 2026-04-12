import { Configuration } from '../api/configuration';
import { MoviesApi, SeriesApi, SearchApi, UsersApi } from '../api';

const config = new Configuration({
    // Using relative path, Vite proxy will forward to actual backend running on 8080
    basePath: '', 
});

export const movieApi = new MoviesApi(config);
export const seriesApi = new SeriesApi(config);
export const searchApi = new SearchApi(config);
export const usersApi = new UsersApi(config);
