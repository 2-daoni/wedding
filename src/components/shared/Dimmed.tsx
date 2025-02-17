const Dimmed = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 z-[999] bg-[rgba(0,0,0,0.5)]">
      {children}
    </div>
  )
}

export default Dimmed
