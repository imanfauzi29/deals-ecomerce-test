const TableSkeleton = ({
  row = 5,
  column = 10,
}: {
  row?: number
  column?: number
}) => {
  return (
    <div className={"relative overflow-x-auto"}>
      <table
        className={
          "w-full p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
        }
      >
        <thead className="bg-gray-50">
          <tr>
            {[...Array(row)].map((item, i) => (
              <th key={i} className="p-4">
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(column)].map((item, i) => (
            <tr key={i} className="border-b">
              {[...Array(row)].map((item, i) => (
                <td key={i} className="p-4">
                  <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableSkeleton
