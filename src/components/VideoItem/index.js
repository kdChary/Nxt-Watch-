import {formatDistanceToNow} from 'date-fns'

import {
  LinkItem,
  VideoListItem,
  Image,
  ItemDetailsCard,
  VideoText,
  VideoDetailsList,
} from './styledVideoItem'

const VideoItem = props => {
  const {videoData, isDark} = props
  const {
    id,
    channelName,
    title,
    views,
    publishedAt,
    profileUrl,
    thumbnailUrl,
  } = videoData

  const publishedDate = formatDistanceToNow(new Date(publishedAt), {
    addSuffix: false,
  })
  const modifyDate = publishedDate.split(' ').slice(1, publishedDate.length)
  const newDate = `${modifyDate[0]} ${modifyDate[1]}`
  //   console.log(modifyDate)

  return (
    <LinkItem to={`/videos/${id}`}>
      <VideoListItem dark={isDark}>
        <Image thumb src={thumbnailUrl} alt="video thumbnail" />
        <ItemDetailsCard>
          <Image src={profileUrl} alt="channel logo" />
          <div>
            <VideoText dark={isDark} main>
              {title}
            </VideoText>
            <ItemDetailsCard>
              <VideoText dark={isDark}>{channelName}</VideoText>
              <VideoDetailsList>
                <VideoText dark={isDark} as="li" sub>
                  {views}
                </VideoText>
                <VideoText dark={isDark} as="li" sub>
                  {newDate} ago
                </VideoText>
              </VideoDetailsList>
            </ItemDetailsCard>
          </div>
        </ItemDetailsCard>
      </VideoListItem>
    </LinkItem>
  )
}

export default VideoItem
