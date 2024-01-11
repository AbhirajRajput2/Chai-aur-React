import React, { useId } from "react";

function Inputbox({
  label,
  amount,
  currency,
  onamountchange,
  oncurrencychange,
  currencyoptions = [],
  selectcurrency = "usd",
  amountdisabled = false,
  currencydisabled = false,
  className = "",
}) {
  const amountInputid = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label
          htmlFor="amountInputid"
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputid}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => {
            onamountchange && onamountchange(Number(e.target.value));
          }}
          disabled={amountdisabled}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectcurrency}
          onChange={(e) => oncurrencychange && oncurrencychange(e.target.value)}
          disabled={currencydisabled}
        >
          {currencyoptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Inputbox;
