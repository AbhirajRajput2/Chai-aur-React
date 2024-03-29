import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import {Inputbox} from './components'

function App() {

  const [amount,setamount] =useState()
  const [from,setfrom] =useState("usd")
  const [to,setto] =useState("inr")
  const [convertedamount,setconvertedamount] =useState()

  const currencyinfo =  useCurrencyInfo(from)
  const options = currencyinfo ? Object.keys(currencyinfo) : [];

  const swap=()=>{
    setfrom(to)
    setto(from)
    setamount(convertedamount)
    setconvertedamount(amount)
  }

  const  convert=()=>{
    setconvertedamount(amount*currencyinfo[to])
  }
  return (
    <>
   <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <Inputbox
                                label="From"
                                amount={amount}
                                currencyoptions={options}
                                oncurrencychange={(currecy)=> setfrom(currecy)}
                                selectcurrency={from}
                                onamountchange={(amount)=> setamount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"

                                onClick={swap}
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Inputbox
                                label="To"
                                amount={convertedamount}
                                oncurrencychange={(currency) => setto(currency)}
                                selectcurrency={to}
                                currencyoptions={options}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" 
                        
                        >
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>


    </>
  )
}

export default App
