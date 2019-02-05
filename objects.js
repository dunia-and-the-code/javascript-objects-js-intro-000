var playlist = { 
  MyBloodyValentine : "Sometimes", 
  PhilOchs : "Here's to the State of Mississippi",
  Slowdive : "Alison",
}

function updatePlaylist(object, string, value) {
  
}

function removeFromPlaylist(playlist, artistname) {
  delete playlist.artistname;
  return playlist;
}