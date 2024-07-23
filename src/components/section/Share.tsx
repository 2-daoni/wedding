import { useEffect } from 'react'

interface Props {
  brideName: string
  groomName: string
  message: string
}

const Share = ({ brideName, groomName, message }: Props) => {
  const handleShareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `${groomName} 🩷 ${brideName} 결혼합니다`,
        description: `${message}`,
        imageUrl:
          'https://img.freepik.com/premium-vector/cute-asian-groom-bride-characters-flat-design-style-vector-illustration_540284-382.jpg?w=1060',
        link: {
          mobileWebUrl: 'http://localhost:3000',
          webUrl: 'http://localhost:3000',
        },
      },
      buttons: [
        {
          title: '청첩장 보기',
          link: {
            mobileWebUrl: 'http://localhost:3000',
            webUrl: 'http://localhost:3000',
          },
        },
      ],
    })
  }

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js'
    script.async = true

    document.head.appendChild(script)

    script.onload = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.REACT_APP_KAKAO_APP_KEY)
      }
    }
  }, [])

  return (
    <div>
      <button
        onClick={() => {
          handleShareKakao()
        }}
        className="w-[16px] h-[16px]"
      >
        <img src="/images/kakao.svg" alt="kakao" />
      </button>
    </div>
  )
}

export default Share
