export const videoReducer = (videosData, { type, payload }) => {
  switch (type) {
    case "ADD_TO_WATCH_LATER":
      return {
        ...videosData,
        watchLater: [...videosData.watchLater, payload],
      };
    case "REMOVE_FROM_WATCH_LATER":
      return {
        ...videosData,
        watchLater: videosData.watchLater.filter(
          (video) => video.title !== payload.title
        ),
      };
    case "ADD_PLAYLIST":
      return {
        ...videosData,
        playlists: [...videosData.playlists, payload],
      };
    case "REMOVE_PLAYLIST":
      return {
        ...videosData,
        playlists: videosData.playlists.filter(
          (playlist) => playlist.name !== payload
        ),
      };
    case "ADD_VIDEO_TO_PLAYLISTS":
      return {
        ...videosData,
        playlists: videosData.playlists.map((playlist) =>
          playlist.name === payload.selectedPlaylist
            ? { ...playlist, videos: [...playlist.videos, payload.video] }
            : playlist
        ),
      };
    case "ADD_NEW_NOTES":
      return {
        ...videosData,
        notes: [...videosData.notes, payload],
      };
    case "EDIT_NOTES":
      return {
        ...videosData,
        notes: videosData.notes.map((note) =>
          note.id === payload.id ? { ...note, note: payload.note } : note
        ),
      };
    case "DELETE_NOTES":
      return {
        ...videosData,
        notes: videosData.notes.map((note) => note.id !== payload.id),
      };
    default:
      return videosData;
  }
};
