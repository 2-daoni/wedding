const Error = () => {
  return (
    <div className="flex flex-col h-[100vh] justify-center items-center">
      <img
        src={'images/error.svg'}
        alt="error"
        className="w-[40px] h-[40px] mb-[8px]"
      />
      <p>에러가 발생했어요 잠시후 다시 시도해주세요</p>
    </div>
  )
}

export default Error
