import React, { useContext } from "react";
import { TransactionContext } from "./context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";

const Transaction = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    <>
      {currentAccount ? (
        <h4 className='text-white text-3xl text-center my-2'>
          Latest Transactions
        </h4>
      ) : (
        <h4 className='text-white text-3xl text-center my-2'>
          Connect your account to see the latest transactions
        </h4>
      )}
      <div className='flex w-full justify-center item-center py-12 px-4 gradient-bg-transactions'>
        <div className='overflow-x-auto relative'>
          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-300   dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='py-3 px-6'>
                  From
                </th>
                <th scope='col' className='py-3 px-6'>
                  To
                </th>
                <th scope='col' className='py-3 px-6'>
                  Timestamp
                </th>
                <th scope='col' className='py-3 px-6'>
                  Message
                </th>
                <th scope='col' className='py-3 px-6'>
                  Keyword
                </th>
                <th scope='col' className='py-3 px-6'>
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {currentAccount ? (
                transactions.map((item, i) => {
                  return (
                    <tr key={`${i} `} className=' border-b'>
                      <td
                        key={`${i} from`}
                        scope='row'
                        className='py-4 px-6 font-medium  whitespace-nowrap dark:text-white'
                      >
                        {shortenAddress(item.addressFrom)}
                      </td>
                      <td key={`${i} to`} className='py-4 px-6'>
                        {shortenAddress(item.addressTo)}
                      </td>
                      <td key={`${i} time`} className='py-4 px-6'>
                        {item.timestamp}
                      </td>
                      <td key={`${i} message`} className='py-4 px-6'>
                        {item.message}
                      </td>
                      <td key={`${i} keyword`} className='py-4 px-6'>
                        {item.keyword}
                      </td>
                      <td key={`${i} amount`} className='py-4 px-6'>
                        {item.amount}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td className='py-4 px-6'></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Transaction;
