

const Loading = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className='flex mt-20 bg-bg_comments w-1/2 p-10 rounded-lg animate-pulse'>
        <div className='p-4 px-4 bg-bg_labels rounded-lg animate-pulse'/>
        <div className="ml-10 w-[300px] bg-bg_labels_2 rounded-lg animate-pulse"/>
      </div>
      <div className='mt-10 bg-bg_comments w-1/2 p-10 rounded-lg'>
        <div className='p-4 px-4 bg-bg_labels rounded-lg animate-pulse'/>
        <div className='p-4 px-4 bg-bg_labels rounded-lg animate-pulse'/>
        <div className='p-4 px-4 bg-bg_labels rounded-lg animate-pulse'/>
      </div>

    </div>
  )
}

export default Loading
