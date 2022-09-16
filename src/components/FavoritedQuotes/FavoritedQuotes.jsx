import { CircularProgress, Typography } from '@mui/material';
import react, {useState, useEffect } from 'react'
import {getFavQuotesWs} from "../../services/stoic-quotes-ws"

const FavoritedQuotes = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [favorite, setFavorite] = useState([{}]);
    // const [favoritesList, setFavoritesList]= useState([])

      //get user's fav quotes
      const getFavQuotes= async () => {
        try {
        const { data } = await getFavQuotesWs(favorite);

          setFavorite(data.favorite);
          setIsLoading("despues",false);

        } catch (error) {
          console.log("error al fav",error)
      }
    }

    // function favoriteQuotesList (favoritesList){
    //   console.log("favList", favoritesList)
    //     favoritesList.map((favorite, i) =>  {
    //       console.log("favorite",favorite) ;
    //     }
    //     )
    // }

    function favoriteQuotesList (favoritesList){

        // console.log("favoritesList", favoritesList)
        favoritesList.map((fav, i) =>  {
          // console.log("favorite",fav) ; 
          console.log("author", fav.author);
          
        }
        )
    }


  useEffect(()=>{
    getFavQuotes()
},[])

    return (
    <>
      {!isLoading && favorite.length >0 ? (
        <><CircularProgress/></>
      ):(
        <>
        {/* {favoriteQuotesList(favorite.favoritesList)} */}

        {/* {favorite.favoritesList[0].author} */}
    </>
      )}
    </>       
    )
}
export default FavoritedQuotes