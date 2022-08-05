import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import PostBox from '../../Home/PostBox'

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="inset-0 justify-center absolute -mt-4 flex justify-center">
          < BiPlus onClick={openModal} className='bg-[#0EAD69] rounded-full text-white w-12 h-12' />
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-3/5 items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-5/6 max-w-md h-3/4 transform overflow-hidden rounded-2xl bg-[#222229] text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium h-12 text-center pt-3 bg-lime-700 leading-6 text-white"
                  >
                   Post??
                  </Dialog.Title>
                  <div className="text-center text-md h-full flex text-white mt-8">
                      < PostBox />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div> 
        </Dialog>
      </Transition>
    </>
  )
}
