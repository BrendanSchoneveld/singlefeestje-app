import HomeView from "../views/Home/Home";
import ArtistsView from "../views/Artists/Artists";
import PlaylistsView from "../views/Playlists/Playlists";
import SongsView from "../views/Songs/Songs";
import ArtistView from "../views/Artist/Artist";

const routes = [
  { path: "/", component: HomeView, view: "Home" },
  {
    path: "/artists",
    component: ArtistsView,
    view: "Artists",
    icon: "fas fa-grin-stars"
  },
  {
    path: "/artists/artist",
    component: ArtistView,
    view: "Artist"
  },
  { path: "/songs", component: SongsView, view: "Songs", icon: "fas fa-music" },
  {
    path: "/playlists",
    component: PlaylistsView,
    view: "Playlists",
    icon: "fas fa-list-ol"
  }
];

export default routes;
