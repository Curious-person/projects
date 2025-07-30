import { useState } from 'react'
import Button from './components/Button';
import Dropdown from './components/Dropdown';
import './components/Dropdown.css';
import MultiRangeSlider from './components/MultiRangeSlider';

function App() {
  const [count, setCount] = useState(0)
  const [sliderOpen, setSliderOpen] = useState(false);

  return (
    <>
      <div className='px-8 w-full flex items-center justify-end h-16 border-b border-highlight'>
        <div className='flex items-center gap-2'>
          <Button>
            <svg xmlns="http://www.w3.org/2000/svg" className='size-6 fill-icon' viewBox="0 0 640 640"><path d="M320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576C388.8 576 451.3 548.8 497.3 504.6C504.6 497.6 506.7 486.7 502.6 477.5C498.5 468.3 488.9 462.6 478.8 463.4C473.9 463.8 469 464 464 464C362.4 464 280 381.6 280 280C280 207.9 321.5 145.4 382.1 115.2C391.2 110.7 396.4 100.9 395.2 90.8C394 80.7 386.6 72.5 376.7 70.3C358.4 66.2 339.4 64 320 64z" /></svg>
          </Button>
          <Button>
            <div className='flex items-center gap-2 '>
              <svg xmlns="http://www.w3.org/2000/svg" className='size-6 fill-icon' viewBox="0 0 640 640"><path d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z" /></svg>
              ReportOfTheWeek
            </div>
          </Button>
        </div>
      </div>
      <div className='w-[calc(100vw-32px)] h-[calc(100vh-64px)] flex flex-col items-center justify-center gap-4'>
        <div className='flex flex-col items-center'>
          <h1 className='text-text text-[64px] font-bold'>Report of the Week</h1>
          <p className='text-[24px]'>Search the database for food reviewed by this channel</p>
        </div>
        <div className='w-full flex items-center justify-center gap-4'>
          <Dropdown />
          <div
            onClick={() => setSliderOpen(!sliderOpen)}
            className='flex items-center gap-2 bg-background border border-highlight rounded-md p-1.5 px-6 cursor-pointer relative'>
            <h1>1-5</h1>
            <svg xmlns="http://www.w3.org/2000/svg" className='size-6 fill-icon' viewBox="0 0 640 640"><path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" /></svg>
          </div>

          {/* slider has a hidden slide that goes above the button preventing from being clicked */}
          {sliderOpen && (
            <div className='absolute bottom-12 w-[300px] h-9.5 bg-background border border-highlight rounded-md p-1.5 flex items-center justify-center'>
              <MultiRangeSlider
                min={0}
                max={5}
                onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
              />
            </div>
          )}
          <input type="date" className='border border-highlight rounded-md p-1.5 appearance-none text-text bg-background fill-text' />
          <input type="date" className='border border-highlight rounded-md p-1.5 appearance-none text-text bg-background fill-text' />
        </div>
      </div>
    </>
  )
}

export default App
