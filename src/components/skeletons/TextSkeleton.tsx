const TextSkeleton = ({ data }: { data: unknown }): JSX.Element => {
  return (
    <>
      {data ? (
        data
      ) : (
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
      )}
    </>
  )
}

export default TextSkeleton
