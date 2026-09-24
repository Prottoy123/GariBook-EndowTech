import React, { useState, useRef, useEffect } from 'react';
import carIcon from '../../assets/garibook/fi_9610434.svg';
import downArrow from '../../assets/garibook/Down_Arrow_3_.png';
import pickupPin from '../../assets/garibook/Frame76.svg';
import dropoffPin from '../../assets/garibook/fi_14910621.svg';
import calendarIcon from '../../assets/garibook/fi_12516022.svg';
import rightArrow from '../../assets/garibook/right-arrow.png';

const CAR_OPTIONS = [
  { id: 'sedan-premium', name: 'Sedan Premium', seats: '4 Seats' },
  { id: 'sedan', name: 'Sedan', seats: '4 Seats' },
  { id: 'noah', name: 'Noah', seats: '7 Seats' },
  { id: 'hiace', name: 'HiAce', seats: '11 Seats' },
];

const AIRPORTS = [
  'Hazrat Shahjalal International Airport, Dhaka',
  'Shah Amanat International Airport, Chattogram',
  'Osmani International Airport, Sylhet',
  "Cox's Bazar Airport, Cox's Bazar",
  'Jashore Airport, Jashore',
  'Saidpur Airport, Saidpur',
  'Barishal Airport, Barishal',
];

const BookingWidget = () => {
  const [activeTab, setActiveTab] = useState('car'); // 'car' or 'airport'
  const [tripType, setTripType] = useState('oneway'); // 'oneway' | 'roundway' | 'hourly'
  const [airportTripType, setAirportTripType] = useState('from-airport'); // 'from-airport' | 'from-home'

  // Form Fields State
  const [selectedCar, setSelectedCar] = useState(null);
  const [carDropdownOpen, setCarDropdownOpen] = useState(false);
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [selectedAirport, setSelectedAirport] = useState('');

  const carDropdownRef = useRef(null);

  // Close car dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (carDropdownRef.current && !carDropdownRef.current.contains(e.target)) {
        setCarDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Searching trips for: ${activeTab === 'car' ? 'Car Rental' : 'Airport Rental'}`);
  };

  return (
    <div className="w-full relative z-20 booking-widget-root">
      {/* Tab Switchers */}
      <div className="flex items-center space-x-2 pl-2">
        <button
          type="button"
          onClick={() => setActiveTab('car')}
          className={`px-7 py-3.5 rounded-t-xl font-bold text-base sm:text-lg transition-all cursor-pointer ${
            activeTab === 'car'
              ? 'bg-[#121212] text-white shadow-md'
              : 'bg-gray-100/80 text-gray-700 hover:text-black'
          }`}
        >
          Car Rental
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('airport')}
          className={`px-7 py-3.5 rounded-t-xl font-bold text-base sm:text-lg transition-all cursor-pointer ${
            activeTab === 'airport'
              ? 'bg-[#121212] text-white shadow-md'
              : 'bg-gray-100/80 text-gray-700 hover:text-black'
          }`}
        >
          Airport Rental
        </button>
      </div>

      {/* Main Widget Card */}
      <div className="bg-white rounded-2xl rounded-tl-none shadow-2xl border border-gray-100 p-5 sm:p-7 md:p-8">
        <form onSubmit={handleSubmit}>
          {/* 4 Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-gray-200 pb-6 border-b border-gray-100">
            {/* Field 1: Choose a Car */}
            <div className="lg:pr-6 relative" ref={carDropdownRef}>
              <label className="flex items-center gap-2 mb-2 text-[#121212] font-semibold text-base sm:text-[17px]">
                <img src={carIcon} alt="" className="w-5 h-5 object-contain" />
                <span>
                  Choose a Car <span className="text-red-500 font-bold">*</span>
                </span>
              </label>

              <button
                type="button"
                onClick={() => setCarDropdownOpen(!carDropdownOpen)}
                className="w-full h-11 flex items-center justify-between text-left px-1 border-b md:border-none border-gray-200 hover:bg-gray-50/50 rounded-lg transition-colors cursor-pointer"
              >
                <span className={`text-[15px] ${selectedCar ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>
                  {selectedCar ? selectedCar.name : 'Select Car Type'}
                </span>
                <img
                  src={downArrow}
                  alt="Open"
                  className={`w-4 h-auto transition-transform duration-200 ${carDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Car Dropdown Menu */}
              {carDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 sm:w-80 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 p-3 max-h-72 overflow-y-auto custom-scrollbar animate-in fade-in zoom-in-95 duration-150">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 py-1 mb-1">
                    Available Fleet
                  </div>
                  {CAR_OPTIONS.map((car) => (
                    <button
                      key={car.id}
                      type="button"
                      onClick={() => {
                        setSelectedCar(car);
                        setCarDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors cursor-pointer ${
                        selectedCar?.id === car.id
                          ? 'bg-blue-50 border border-blue-200'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <img src={carIcon} alt="" className="w-6 h-6 object-contain opacity-70" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">{car.name}</div>
                          <div className="text-xs text-gray-500">{car.seats}</div>
                        </div>
                      </div>
                      {selectedCar?.id === car.id && (
                        <span className="w-2.5 h-2.5 rounded-full bg-[#0e52ff]" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Field 2: Pickup Location / Pickup Airport */}
            <div className="lg:px-6">
              {activeTab === 'car' ? (
                <>
                  <label className="flex items-center gap-2 mb-2 text-[#121212] font-semibold text-base sm:text-[17px]">
                    <img src={pickupPin} alt="" className="w-5 h-5 object-contain" />
                    <span>
                      Pickup Location <span className="text-red-500 font-bold">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    required
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    placeholder="Enter Pickup Location"
                    className="w-full h-11 text-[15px] text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none focus:ring-0 border-b md:border-none border-gray-200 px-1"
                  />
                </>
              ) : (
                <>
                  <label className="flex items-center gap-2 mb-2 text-[#121212] font-semibold text-base sm:text-[17px]">
                    <img src={pickupPin} alt="" className="w-5 h-5 object-contain" />
                    <span>
                      Pickup Airport <span className="text-red-500 font-bold">*</span>
                    </span>
                  </label>
                  <select
                    value={selectedAirport}
                    onChange={(e) => setSelectedAirport(e.target.value)}
                    required
                    className="w-full h-11 text-[15px] bg-transparent text-gray-800 focus:outline-none border-b md:border-none border-gray-200 px-1 cursor-pointer"
                  >
                    <option value="" disabled>
                      Select Airport
                    </option>
                    {AIRPORTS.map((airport) => (
                      <option key={airport} value={airport}>
                        {airport}
                      </option>
                    ))}
                  </select>
                </>
              )}
            </div>

            {/* Field 3: Drop-off Location */}
            <div className="lg:px-6">
              <label className="flex items-center gap-2 mb-2 text-[#121212] font-semibold text-base sm:text-[17px]">
                <img src={dropoffPin} alt="" className="w-5 h-5 object-contain" />
                <span>
                  Drop-off Location <span className="text-red-500 font-bold">*</span>
                </span>
              </label>
              <input
                type="text"
                required
                value={dropoffLocation}
                onChange={(e) => setDropoffLocation(e.target.value)}
                placeholder="Enter Drop-off Location"
                className="w-full h-11 text-[15px] text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none focus:ring-0 border-b md:border-none border-gray-200 px-1"
              />
            </div>

            {/* Field 4: Pickup Date & Time */}
            <div className="lg:pl-6">
              <label className="flex items-center gap-2 mb-2 text-[#121212] font-semibold text-base sm:text-[17px]">
                <img src={calendarIcon} alt="" className="w-5 h-5 object-contain" />
                <span>
                  Pickup Date & Time <span className="text-red-500 font-bold">*</span>
                </span>
              </label>
              <input
                type="text"
                required
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
                placeholder="MM/DD/YYYY 00:00 PM"
                onFocus={(e) => (e.target.type = 'datetime-local')}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = 'text';
                }}
                className="w-full h-11 text-[15px] text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none focus:ring-0 border-b md:border-none border-gray-200 px-1"
              />
            </div>
          </div>

          {/* Bottom Bar: Trip Type Radio Options + Submit Button */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-5">
            {/* Radio / Option Group */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {activeTab === 'car' ? (
                <>
                  {[
                    { key: 'oneway', label: 'One Way' },
                    { key: 'roundway', label: 'Round Way' },
                    { key: 'hourly', label: 'Hourly' },
                  ].map((option) => (
                    <label
                      key={option.key}
                      onClick={() => setTripType(option.key)}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-colors ${
                        tripType === option.key
                          ? 'bg-blue-50 text-[#0e52ff]'
                          : 'text-gray-600 hover:text-gray-900 bg-transparent'
                      }`}
                    >
                      <span
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          tripType === option.key
                            ? 'border-[#0e52ff]'
                            : 'border-gray-300'
                        }`}
                      >
                        {tripType === option.key && (
                          <span className="w-2 h-2 rounded-full bg-[#0e52ff]" />
                        )}
                      </span>
                      <span>{option.label}</span>
                    </label>
                  ))}
                </>
              ) : (
                <>
                  {[
                    { key: 'from-airport', label: 'From Airport' },
                    { key: 'from-home', label: 'From Home' },
                  ].map((option) => (
                    <label
                      key={option.key}
                      onClick={() => setAirportTripType(option.key)}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-colors ${
                        airportTripType === option.key
                          ? 'bg-blue-50 text-[#0e52ff]'
                          : 'text-gray-600 hover:text-gray-900 bg-transparent'
                      }`}
                    >
                      <span
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          airportTripType === option.key
                            ? 'border-[#0e52ff]'
                            : 'border-gray-300'
                        }`}
                      >
                        {airportTripType === option.key && (
                          <span className="w-2 h-2 rounded-full bg-[#0e52ff]" />
                        )}
                      </span>
                      <span>{option.label}</span>
                    </label>
                  ))}
                </>
              )}
            </div>

            {/* Continue CTA Button */}
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0e52ff] hover:bg-[#0038c4] text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all cursor-pointer"
            >
              <span>Continue</span>
              <img src={rightArrow} alt="" className="w-5 h-5 brightness-0 invert" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingWidget;
