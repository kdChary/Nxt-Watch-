import {
  VideoListItem,
  Image,
  ItemDetailsCard,
  VideoText,
} from './styledVideoItem'

const VideoItem = props => {
  const {videoData, isDark} = props
  const {
    channelName,
    title,
    views,
    publishedAt,
    profileUrl,
    thumbnailUrl,
  } = videoData

  return (
    <VideoListItem dark={isDark}>
      <Image thumb src={thumbnailUrl} alt="video thumbnail" />
      <ItemDetailsCard>
        <Image src={profileUrl} alt="channel logo" />
        <div>
          <VideoText dark={isDark} main>
            {title}
          </VideoText>
          <div>
            <VideoText dark={isDark}>{channelName}</VideoText>
            <ul>
              <li>{views}</li>
              <li>{publishedAt}</li>
            </ul>
          </div>
        </div>
      </ItemDetailsCard>
    </VideoListItem>
  )
}

export default VideoItem
