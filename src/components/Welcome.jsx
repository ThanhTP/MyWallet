import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { TransactionContext } from "./context/TransactionContext";
import React, { useContext } from "react";
import { Loader } from ".";
import { shortenAddress } from "../utils/shortenAddress";

const Input = ({ placeholder, name, type, value, handleChange }) => {
  return (
    <>
      <input
        placeholder={placeholder}
        name={name}
        step='0.0001'
        type={type}
        value={value}
        onChange={(e) => handleChange(e, name)}
        className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"'
      />
    </>
  );
};

const commonCss =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-white font-light text-sm";
const Welcome = () => {
  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    console.log(formData, "ckeck data");

    sendTransaction();
  };

  return (
    <>
      <div className='flex w-full justify-center items-center'>
        <div className='flex lg:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
          <div className='flex flex-1 justify-start items-start flex-col mf:mr-10'>
            <h1 className='text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base'>
              Send crypto <br /> across the world
            </h1>
            <p className='text-white mt-5 font-light md:w-9/12 w-11/12 text-base'>
              This application allows you to send ETH from your wallet to
              another address !
            </p>
            {!currentAccount && (
              <button
                onClick={connectWallet}
                type='button'
                className='flex flex-row justify-start items-center my-5 p-5 bg-[#2952e3] rounded-full cursor-pointer hover:bg-[#2546bd]'
              >
                <AiFillPlayCircle className='text-white mr-2' />
                <p className='text-white text-base font-semibold'>
                  Connect Wallet
                </p>
              </button>
            )}

            <div className='grid sm:grid-cols-2 grid-cols-3 w-full mt-10'>
              <div className={`rounded-tl-2xl ${commonCss}`}>Reliability</div>
              <div className={` ${commonCss}`}>Ethereum</div>
              <div className={`${commonCss}`}> Web 3.0</div>
              <div className={`rounded-br-2xl ${commonCss}`}>Blockchain</div>
            </div>
          </div>

          <div className='flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10'>
            <div className='p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism '>
              <div className='flex justify-between flex-col w-full h-full'>
                <div className='flex justify-between items-start'>
                  <div className='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center'>
                    <SiEthereum fontSize={21} color='#fff' />
                  </div>
                  <BsInfoCircle fontSize={17} color='#fff' />
                </div>
                <div>
                  <p className='text-white font-light text-sm'>
                    {shortenAddress(currentAccount)}
                  </p>
                  <p className='text-white font-semibold text-lg mt-1'>
                    Ethereum
                  </p>
                </div>
              </div>
            </div>

            <div className='p5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism'>
              <Input
                placeholder='Address To'
                name='addressTo'
                type='text'
                handleChange={handleChange}
              />
              <Input
                placeholder='Amount (ETH)'
                name='amount'
                type='number'
                handleChange={handleChange}
              />
              <Input
                placeholder='Keyword (Gif)'
                name='keyword'
                type='text'
                handleChange={handleChange}
              />
              <Input
                placeholder='Enter Message'
                name='message'
                type='text'
                handleChange={handleChange}
              />

              <div className='h-[1px] w-full bg-gray-400 my-2 ' />
              {isLoading ? (
                <Loader />
              ) : (
                <button
                  type='button'
                  onClick={handleSubmit}
                  className='text-white w-full my-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer'
                >
                  Send now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;