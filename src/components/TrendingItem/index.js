import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'

import {
  LinkItem,
  ListItem,
  Thumbnail,
  ItemContainer,
  Text,
  ChannelDetails,
  ChannelViewsData,
  ViewsData,
  ViewsText,
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

          <ChannelViewsData>
            <ViewsText dark={isDark} sm>
              {channelName}
            </ViewsText>

            <ViewsData>
              <BsDot size="28" color={isDark ? '#cbd5e1' : '#475569'} />
              <ViewsText dark={isDark}>{views} views</ViewsText>

              <BsDot size="28" color={isDark ? '#cbd5e1' : '#475569'} />
              <ViewsText dark={isDark}>
                {formatDistanceToNow(new Date(publishedAt), {addSuffix: false})}
              </ViewsText>
            </ViewsData>
          </ChannelViewsData>
        </ItemContainer>
      </ListItem>
    </LinkItem>
  )
}

export default TrendingItem
