import { PersonDto } from '../../types/types'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { phoneNumber } from '../../utils/phoneNumber'
import { cls } from '../../utils/cls'

interface Props {
  data: { groom: PersonDto; bride: PersonDto }
}
const Contact = ({ data }: Props) => {
  const { groom, bride } = data

  const Accordion = (type: 'groom' | 'bride', data: PersonDto) => {
    const [showData, setShowData] = useState<boolean>(false)
    const currentPerson = type === 'groom' ? '신랑' : '신부'
    return (
      <section>
        <div
          onClick={() => {
            setShowData(!showData)
          }}
          className="flex items-center justify-between bg-[#eee2d9] px-[8px] py-[4px] cursor-pointer"
        >
          <span>{type === 'groom' ? '🤵🏻‍♂️ 신랑측' : '👰🏻‍♀️ 신부측'}</span>
          <motion.img
            src={'/images/arrow_down.svg'}
            alt="arrow"
            className="w-[16px] h-[16px]"
          />
        </div>
        {showData && (
          <div className="pl-[16px] ">
            {/* 신랑 & 신부 정보 */}
            <section className="mr-[24px] pt-[8px] space-y-[4px]">
              <div className="flex">
                <p className="min-w-[40px]">{currentPerson}</p>
                <span>{data.name}</span>
              </div>
              <div className="flex justify-between w-full">
                <div className="flex">
                  <p className="min-w-[40px]">연락처</p>{' '}
                  <span> {phoneNumber(data.phoneNumber)}</span>
                </div>
                <button
                  className="flex items-center border-b-[1px] border-black px-[8px]"
                  onClick={() => {
                    document.location.href = `tel:${data.phoneNumber}`
                  }}
                >
                  전화걸기
                </button>
              </div>
              <div className="flex justify-between">
                <div className="flex">
                  <p className="min-w-[40px]">계좌</p>
                  <span>
                    {data.account.bankName} {data.account.accountNumber}
                  </span>
                </div>
                {data.account?.kakaopayLink && (
                  <a
                    target={'_blank'}
                    rel="noreferrer"
                    href={data.account?.kakaopayLink}
                    className="flex items-center border-b-[1px] border-black px-[8px]"
                  >
                    <img
                      src="/images/send.svg"
                      alt="send"
                      className="w-[8px] h-[8px] mr-[4px]"
                    />
                    송금
                  </a>
                )}
              </div>
            </section>
            <div className="w-full h-[1px] bg-[#c1c1c1] my-[8px]" />
            {/* 신랑 & 신부측 가족 */}
            <div>
              <p className="mb-[8px]">{currentPerson}측 가족</p>
              {data.parents.map((parent, index) => (
                <div className="flex items-center mb-[20px]">
                  <span className="max-w-[40px] w-full">
                    {index === 0 ? '父' : '母'} {'  '}
                  </span>
                  <div>
                    <p>{parent.name}</p>
                    <div className="flex">
                      <p className="min-w-[40px]">연락처</p>
                      <p>{phoneNumber(parent.phoneNumber)}</p>
                    </div>
                    <div className="flex">
                      <p className="w-[40px]">계좌</p>
                      {parent.account.bankName} {parent.account.accountNumber}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    )
  }

  return (
    <div className="pt-[60px]">
      <p className="text-[20px] font-[600] mb-[8px]">
        🔔 연락처 및 마음 전하실 곳
      </p>
      <div className="space-y-[16px]">
        {Accordion('groom', groom)}
        {Accordion('bride', bride)}
      </div>
    </div>
  )
}

export default Contact
