import { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

interface Props {
  brideName: string
  groomName: string
  message: string
}

const Share = ({ brideName, groomName, message }: Props) => {
  const [copied, setCopied] = useState<boolean>(false)

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
    <div className="mt-[60px]">
      <span className="text-[20px] font-[700]">📲 공유하기</span>
      <div className="flex space-x-[16px] w-full mt-[16px] justify-between">
        <button
          onClick={() => {
            handleShareKakao()
          }}
          className="w-full flex flex-col justify-center items-center"
        >
          <img
            src="/images/kakao.svg"
            alt="kakao"
            className="w-[24px] h-[24px]"
          />
          카카오로 공유하기
        </button>
        <div className="relative w-full">
          <CopyToClipboard
            text={process.env.REACT_APP_CLIENT_URL as string}
            onCopy={() => {
              setCopied(true)
              // setTimeout(() => {
              //   setCopied(false)
              // }, 2000)
            }}
          >
            <button className="flex flex-col justify-center items-center w-full">
              <img
                src="/images/copy.svg"
                alt="copy"
                className="w-[24px] h-[24px]"
              />
              <p>링크 복사하기</p>
            </button>
          </CopyToClipboard>
          {copied && (
            <p className="absolute bottom-[-38px] right-[14px] py-[4px] px-[16px] rounded-full border-[1px] border-red-500 min-w-fit">
              복사가 완료되었습니다!
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Share
