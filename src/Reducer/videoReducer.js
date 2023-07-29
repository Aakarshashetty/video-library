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
    default:
      return videosData;
  }
};
