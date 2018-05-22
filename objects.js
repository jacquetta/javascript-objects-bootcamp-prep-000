var playlist = {artistName: 'song titles'};

function updatePlaylist(playlist, artistName, songTitle) {
  // return Object.assign({}, playlist, {[artistName]: songTitle)
return  playlist.artistName = [];

}

function removeFromPlaylist(playlist, artistName){
  delete artistName.songTitle;
  return playlist;
}