import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'

import {
  LinkItem,
  ListItem,
  Thumbnail,
  ItemContainer,
  Text,
  ChannelDetails,
} from './style'

const TrendingItem = props => {
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

  return (
    <LinkItem to={`/videos/${id}`}>
      <ListItem>
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
        <ItemContainer>
          <ChannelDetails>
            <Thumbnail sm src={profileUrl} alt="channel logo" />
            <Text dark={isDark}>{title}</Text>
          </ChannelDetails>
          <div>
            <p>{channelName}</p>
            <BsDot />
            <p>{views}</p>
            <p>{formatDistanceToNow(new Date(publishedAt))}</p>
          </div>
        </ItemContainer>
      </ListItem>
    </LinkItem>
  )
}

export default TrendingItem
