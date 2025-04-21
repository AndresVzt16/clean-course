
export class HttpClient{
/*    async get(url: string){
        const { data, status } = await axios.get(url);
        return {data, status};
    } */
   async get(url: string) {
    const response = await fetch(url);
    const data = await response.json();
    const status = response.status;
    return {data, status};
}

} 

