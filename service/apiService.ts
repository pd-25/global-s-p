const apiService = {
    get: async function (url: string): Promise<any> {
        console.log('get', url);
        return new Promise((resolve, reject) => {
            fetch(`${process.env.REACT_APP_API_URL}${url}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            }).then((response) => response.json())
                .then((data) => {
                    console.log('data', data);
                    resolve(data);
                }).catch((error) => {
                    reject(error);
                });
        })

    }
}

export default apiService