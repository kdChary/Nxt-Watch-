import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'

import {
  LinkItem,
  VideoListItem,
  Image,
  ItemDetailsCard,
  VideoText,
  VideoDetailsList,
  DetailsContainer,
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
  //   const modifyDate = publishedDate.split(' ').slice(1, publishedDate.length)
  //   const newDate = `${modifyDate[0]} ${modifyDate[1]}`
  //   //   console.log(modifyDate)

  return (
    <LinkItem to={`/videos/${id}`}>
      <VideoListItem dark={isDark}>
        <Image thumb src={thumbnailUrl} alt="video thumbnail" />

        <ItemDetailsCard>
          <DetailsContainer>
            <Image src={profileUrl} alt="channel logo" />

            <VideoText dark={isDark} main>
              {title}
            </VideoText>
          </DetailsContainer>

          <ItemDetailsCard sub>
            <VideoText dark={isDark}>{channelName}</VideoText>

            <VideoDetailsList>
              <VideoText dark={isDark} sub>
                <BsDot size="21" />
                {views}
              </VideoText>

              <VideoText dark={isDark} sub>
                <BsDot size="21" />
                {publishedDate}
              </VideoText>
            </VideoDetailsList>
          </ItemDetailsCard>
        </ItemDetailsCard>
      </VideoListItem>
    </LinkItem>
  )
}

export default VideoItem
