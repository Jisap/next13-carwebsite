import DateSelection from "./DateSelection"
import HoursSelection from "./HoursSelection"
import LocationSelection from "./LocationSelection"

const SearchMobile = () => {
  return (
    <div className="xl:hidden font-medium">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-4">
          {/* Location selection */}
          <LocationSelection />
          {/* Date selection */}
          <DateSelection />
          {/* Hours selection */}
          <HoursSelection />
          {/* btn */}
          <div className="flex items-center px-6">
            <button className="btn btn-sm btn-accent w-[146px] mx-auto">Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchMobile