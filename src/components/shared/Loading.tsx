import { motion } from 'framer-motion'

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <motion.img
        animate={{
          scale: [0.9, 1.1, 0.9],
          y: ['0%', '-20%', '0%'],
        }}
        transition={{ repeat: Infinity, repeatType: 'loop', duration: 0.6 }}
        src={'/images/loading_heart.svg'}
        alt="loading"
        className="w-[40px] h-[40px]"
      />
    </div>
  )
}

export default Loading
