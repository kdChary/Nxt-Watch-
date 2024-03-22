import {
  LinkItem,
  Game,
  GameDetailsCard,
  GameViewsCard,
  GameTitle,
  GameData,
  Thumbnail,
} from './style'

const GameItem = props => {
  const {videoData, isDark} = props
  const {id, thumbnailUrl, title, views} = videoData

  return (
    <LinkItem to={`/videos/${id}`}>
      <Game dark={isDark}>
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" />

        <GameDetailsCard>
          <GameTitle dark={isDark} lg>
            {title}
          </GameTitle>

          <GameViewsCard>
            <GameData dark={isDark}>{views} Watching</GameData>

            <GameData dark={isDark}>Worldwide</GameData>
          </GameViewsCard>
        </GameDetailsCard>
      </Game>
    </LinkItem>
  )
}

export default GameItem
