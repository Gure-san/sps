export function SkeletonContactList() {
  return (
    <div
      className="flex flex-col mx-4 my-4">
      <span className="rounded-md animate-pulse w-full h-6 bg-slate-300"></span>
      <span className="rounded-md animate-pulse w-full h-6 bg-slate-300 my-4"></span>
      <span className="rounded-md animate-pulse w-full h-6 bg-slate-300"></span>
    </div>
  );
}

export function SkeletonMap() {
  return (
    <div className='bg-gray-300 flex items-center justify-center animate-pulse h-80 rounded-md'>
      <p>Loading Map...</p>
    </div>
  )
}
