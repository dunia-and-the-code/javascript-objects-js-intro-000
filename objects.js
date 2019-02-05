var playlist = {
  MichealJackson: "Man in the Mirror",
  FrankSinatra: "Fly me to the Moon",
  RayCharles: "Hit the Road Jack",
}

function updatePlaylist(object, string, value) {
  
}

function removeFromPlaylist(playlist, artistname) {
  delete playlist.artistname;
  return playlist
}