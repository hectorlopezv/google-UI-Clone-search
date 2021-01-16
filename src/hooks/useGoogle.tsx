import { error } from 'console';
import {useState, useEffect} from 'react';
import axios from 'axios';
export const CONTEXT_KEY = '00388342f35662317';
export const API_KEY = 'AIzaSyBvL9g-o8b_-vOwBsdB3o5WAqV9Wj16t_A'
const useGoogleSearchEngine = (term: string) => {
    const [data, setData] = useState<any>(null);
    useEffect(() => {
        const fetchData = async () => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
                .then(response => response.json())
                .then(result => {
                    setData(result)
                })
        }

        fetchData().then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        });
    }, [term])

    return {data};
}

export default useGoogleSearchEngine
