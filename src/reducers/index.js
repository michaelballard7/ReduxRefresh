import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {
      title: 'No Scrubs', 
      duration: '4:05'
    },
    {
      title: 'Macarena', 
      duration: '2:30'
    },
    {
      title: 'All Start', 
      duration: '3:15'
    },
    {
      title: 'Love me no more', 
      duration: '1:45'
    },

  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED'){
    return action.payload
  }

  return selectedSong
}

// create and export main reducer
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})