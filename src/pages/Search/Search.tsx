import React, { Component } from 'react'
import './Search.less';
import SearchComponent from '../../components/Search/Search';
import useGoogleSearchEngine from '../../hooks/useGoogle';

export interface SearchProps {
    value: any;
}
 
const Search: React.FC<SearchProps> = ({value, ...props}) => {
    const [{ term = ''}, dispatch] = value;
    const data = useGoogleSearchEngine(term);
    console.log(data);
    console.log('este es el term en la pagina de SEARCH', term);
    return (
        <div className="searchPage">
            <SearchComponent hidden={true}/>
            <div className="searchPage__header">

            </div>
            
            <div className="searchPage__results">

            </div>
        </div>
    )
}
 
export default Search;
