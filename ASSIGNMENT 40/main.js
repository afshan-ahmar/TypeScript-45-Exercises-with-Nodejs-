function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Hamza", "ALBUM TITLE 1");
var album2 = make_album("Usman", "Album Title 2");
//calling a make album with third parameter
var album3 = make_album("Ali", "Album title 3", 10);
//printing the variables
console.log(album1);
console.log(album2);
console.log(album3);
