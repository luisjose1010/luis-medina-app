'use client'
import { Circle, CirclesGroupDown, CirclesGroupUp } from '@/assets/Decorations'
import { Button } from '@/components/Button'
import { useTranslation } from '@/hooks/useTranslation'
import { useState, type FormEvent } from 'react'

const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'https://formspree.io/f/movazdga'

export function ContactUs () {
  const { APP, UI } = useTranslation()
  const [show, setShow] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [/* error */, setError] = useState<string | null>(null)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setShow(true)
    setIsLoading(true)
    setError(null) // Clear previous errors when a new request starts

    const formData = new FormData(event.currentTarget)
    fetch(apiUrl, {
      method: 'POST',
      body: formData
    }).then((response) => {
      if (!response.ok) {
        throw new Error('Failed to submit the data. Please try again.')
      }
    }).catch((error: unknown) => {
      if (error instanceof Error) {
        // Capture the error message to display to the user
        setError(error.message)
      }
    }).finally(() => {
      setIsLoading(false)
    })
  }

  return (
    <>
      <div className="flex flex-wrap lg:justify-between">
        <div className="w-full lg:w-1/2 2xl:w-6/12">
          <div className="max-w-[570px] mb-12 lg:mb-0">
            <h2
              className="
                  text-caribbean_current
                  mb-6
                  uppercase
                  font-bold
                  text-[32px]
                  sm:text-[40px]
                  lg:text-[36px]
                  xl:text-[40px]
                  "
            >
              {APP.CONTACT.SUBTITLE}
            </h2>
            <p className="text-base text-dark_purple/60 leading-relaxed mb-9">
              {APP.CONTACT.DESCRIPTION}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 2xl:w-5/12 px-4">
          <div className="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
            <form onSubmit={(e) => { onSubmit(e) }}>
              <div className="mb-6">
                <input
                  type="text"
                  name="name"
                  placeholder={APP.CONTACT.FORM_NAME}
                  className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  placeholder={APP.CONTACT.FORM_EMAIL}
                  className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder={APP.CONTACT.FORM_PHONE}
                  className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                />
              </div>
              <div className="mb-6">
                <textarea
                  rows={6}
                  name="message"
                  placeholder={APP.CONTACT.FORM_MESSAGE}
                  className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                ></textarea>
              </div>
              <div>
                <Button.Solid
                  type="submit"
                  dark={true}
                  className="w-full text-white"
                >
                  {UI.BUTTON.SUBMIT}
                </Button.Solid>
              </div>
            </form>
            <div>
              <span className="absolute -top-10 -right-9 z-[-1]">
                <Circle />
              </span>
              <span className="absolute -right-10 top-[90px] z-[-1]">
                <CirclesGroupUp />
              </span>
              <span className="absolute -left-7 -bottom-7 z-[-1]">
                <CirclesGroupDown />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className={`fixed w-full h-100 inset-0 bg-black/70 z-50 overflow-hidden flex justify-center items-center ${show ? 'fade-in' : ''}`}
        style={{
          display: show ? '' : 'none'
        }}>
        <div
          className="border border-teal-500 shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto rounded z-50 overflow-y-auto">
          <div className="modal-content py-4 text-left px-6">
            {/* Title */}
            <div className="flex justify-between items-center pb-3">
              {
                isLoading
                  ? <p className="text-2xl font-bold">{APP.CONTACT.LOADING_TITLE}</p>
                  : <p className="text-2xl font-bold">{APP.CONTACT.SUCCESS_TITLE}</p>
              }
              <div className="modal-close cursor-pointer z-50">
                <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                  viewBox="0 0 18 18">
                  <path
                    d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                  </path>
                </svg>
              </div>
            </div>
            {/* Body */}
            <div className="my-5">
              {
                isLoading
                  ? <p>{APP.CONTACT.LOADING_TEXT}</p>
                  : <p>{APP.CONTACT.SUCCESS_TEXT}</p>
              }
            </div>
            {/* Footer */}
            <div className="flex justify-end pt-2">
            {
                !isLoading && (
                  <Button.Solid dark={true} onClick={() => { setShow(false) }} className="text-seasalt">
                    {UI.BUTTON.ACCEPT}
                  </Button.Solid>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
