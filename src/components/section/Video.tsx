const Video = () => {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        src="/assets/main.mp4"
        // poster: control 추가할 경우 썸네일 이미지 역할을 함
        poster="/images/poster.png"
      />
    </div>
  )
}

export default Video
