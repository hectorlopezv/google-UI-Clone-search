import React, { Component } from 'react'
import './Search.less';
import SearchComponent from '../../components/Search/Search';
import useGoogleSearchEngine from '../../hooks/useGoogle';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ListItemSecondaryAction } from '@material-ui/core';

export interface SearchProps {
    value: any;
}
 
const Search: React.FC<SearchProps> = ({value, ...props}) => {
    const [{ term = ''}, dispatch] = value;
    const data:any = useGoogleSearchEngine(term).data;
    console.log('el data', data);
    return (
        <div className="searchPage">
           
            <div className="searchPage__header">
                <Link to="/">
                    <img  className="searchPage__Logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="google image"/>
                </Link>
                <div className="searchPage__headerBody">
                    <SearchComponent hidden={true}/>
                    <div className="searchPage__Options">
                        <div className="searchPage__OptionsLeft">
                            <div className="searchPage__Option">
                                <SearchIcon fontSize="large"/>
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage__Option">
                                <DescriptionIcon fontSize="large"/>
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchPage__Option">
                                <ImageIcon fontSize="large"/>
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="searchPage__Option">
                                <LocalOfferIcon fontSize="large"/>
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="searchPage__Option">
                                <RoomIcon fontSize="large"/>
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className="searchPage__Option">
                                <MoreVertIcon fontSize="large"/>
                                <Link to="/more">More</Link>
                            </div>
                        </div>

                        {/*--------searchPage_optionsRight--------------*/}
                        <div className="searchPage__OptionsRight">
                            <div className="searchPage__Option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchPage__Option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
            
            {term && (
                <div className="searchPage__results">
                        <p className="searchPage__resultsCount">
                           { `About ${data?.searchInformation?.formattedTotalResults} results ${data?.searchInformation?.formattedSearchTime} seconds for ${term}`}
                        </p>

                        {data?.items?.map((item: any) => {
                            return(
                                <div className="searchPage__resultsList">
                                <a href={item.link} >
                                    {item.pagemap?.cse_image?.length > 0 && item.pagemap.cse_image[0]?.src && (
                                        <img src={item.pagemap?.cse_image[0]?.src} className="searchPage__resultsImage" alt="result Image"/>
                                    )}
                                    {item.displayLink}
                                </a>
                                <a className="searchPage__resultsTitle" href={item.link}>
                                    {item.title}
                                </a> 
                                <p className="searchPage__resultsSnippet">
                                    {item.snippet}
                                </p>
                            </div>
                            );
                            
                        })}
                </div>
            )}

        </div>
    )
}
 
export default Search;
