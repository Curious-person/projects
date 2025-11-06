import { useState } from 'react'
import Button from './components/Button';
import Dropdown from './components/Dropdown';
import './components/Dropdown.css';
import MultiRangeSlider from './components/MultiRangeSlider';
import Topnav from './components/Topnav';

// Figure out a way to make the slider work as a dropdown
// TODO: learn how to margin left and right sides for the main navigation


function App() {
  const [count, setCount] = useState(0)
  const [sliderOpen, setSliderOpen] = useState(false);

  return (
    <>
      <Topnav></Topnav>

      <div className='w-[calc(100vw-32px)] h-[calc(100vh-64px)] flex flex-col items-center justify-center gap-4'>

        <div className='w-full ml-4 mr-4 mx-auto px-4'>
          <div className='flex flex-col items-center'>
            <h1 className='text-text text-[64px] font-bold'>Report of the Week</h1>
            <p className='text-[24px]'>Search the database for food reviewed by this channel</p>
          </div>

          {/* Filters */}
          <div className='w-full flex items-center justify-center gap-4'>
            <Dropdown />
            <div className='relative h-10 absolute'>
              <div
                onClick={() => setSliderOpen(!sliderOpen)}
                className='flex items-center gap-2 bg-background border border-highlight rounded-md p-1.5 px-6 cursor-pointer'>
                <h1>1-5</h1>
                <svg xmlns="http://www.w3.org/2000/svg" className='size-6 fill-icon' viewBox="0 0 640 640"><path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" /></svg>
              </div>
              {sliderOpen && (
                <div className='absolute bottom-0 left-0 z-10 w-[300px] h-9.5 bg-background border border-highlight rounded-md p-1.5 flex items-center justify-center'>
                  <MultiRangeSlider
                    min={0}
                    max={5}
                    onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                  />
                </div>
              )}
            </div>
            <input type="date" className='border border-highlight rounded-md p-1.5 appearance-none text-text bg-background fill-text' />
            <input type="date" className='border border-highlight rounded-md p-1.5 appearance-none text-text bg-background fill-text' />
          </div>

          {/* data card */}
          <div>
            testing
          </div>
        </div>
      </div>
    </>
  )
}

export default App
