
export const fetchMovies = async () => {
    const baseUrl = `https://api.themoviedb.org/4/list/1`
    let headers = new Headers()
    headers.append('Authorization', process.env.REACT_APP_AUTH || '')
    headers.append('Content-Type', 'application/json;charset=utf-8');

    try {
        const response = await fetch(baseUrl, {
            headers: headers,
        })
        const data = await response.json()
        if (data.results) {
            return data.results;
        }
        if (!data.results) {
            throw (response)
        }
        return response;
    }
    catch (err) {
        throw new Error(err.message);
    }
}