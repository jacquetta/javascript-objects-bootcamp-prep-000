var playlist = {artistNames: 'song titles'};

function updatePlaylist(playlist, artistNames, songTitle) {
  return Object.assign({}, playlist, {[artistNames]: songTitle})
}

function removeFromPlaylist(playlist, artistNames){
  delete artistNames.songTitle;
  return playlist;
}