
export const fetchMovies = async () => {
    const baseUrl = `https://api.themoviedb.org/4/list/1`
    let headers = new Headers()
    headers.append('Authorization', 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDQwMTA0NmMxYmJkNDM3NzFlODQ0YmU4YzQxNGFjYiIsInN1YiI6IjVmOTgzODJmZTE4Yjk3MDAzNGQwMzM1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UXcm8LSGmfBILHmAZwdHac3aMU2_7Avb2t_D94CZxQQ')
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