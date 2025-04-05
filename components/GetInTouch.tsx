'use client';
import { useSubmit } from '@formspree/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type Inputs = {
  email: string;
  message: string;
  name: string;
};

const GetInTouch = () => {
    const {
    formState: { errors, isSubmitSuccessful, isSubmitting },
    handleSubmit,
    register,
    setError,
    reset,
  } = useForm<Inputs>({
    defaultValues: { email: '', message: '' }, 
  });

  const [showAlert, setShowAlert] = useState(false);
  const submit = useSubmit<Inputs>(
    process.env.NEXT_PUBLIC_REACT_HOOK_FORM_ID as string,
    {
      onError(errs) {
        const formErrs = errs.getFormErrors();
        for (const { code, message } of formErrs) {
          setError(`root.${code}`, {
            type: code,
            message,
          });
        }

        const fieldErrs = errs.getAllFieldErrors();
        for (const [field, errs] of fieldErrs) {
          setError(field, {
            message: errs.map((e) => e.message).join(', '),
          });
        }
      },
    }
  );

  if(isSubmitSuccessful) {
    setShowAlert(true)
    reset()

    setTimeout(() => setShowAlert(false), 3000);
  }

  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-6" id='contact'>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 tracking-wider">
          Have a question or want to work together? Feel free to reach out!
        </p>
        {
          showAlert && (
            <div
          className="mt-12 bg-green-300/25 border border-green-400 text-green-500 px-4 py-3 rounded-lg relative mb-6"
          role="alert"
        >
          <span className="block sm:inline">
            Your message has been sent successfully!
          </span>
          <button
            onClick={() => setShowAlert(false)}
            className="absolute top-0 bottom-0 right-0 px-4 py-3"
          >
            <svg
              className="fill-current h-6 w-6 text-green-700"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M14.348 5.652a1 1 0 011.415 0l.707.707a1 1 0 010 1.415L11.414 10l3.036 3.036a1 1 0 010 1.415l-.707.707a1 1 0 01-1.415 0L10 11.414l-3.036 3.036a1 1 0 01-1.415 0l-.707-.707a1 1 0 010-1.415L8.586 10 5.55 6.964a1 1 0 010-1.415l.707-.707a1 1 0 011.415 0L10 8.586l3.036-3.036z"
              />
            </svg>
          </button>
        </div>
          )
        }
      </div>
      <form
        onSubmit={handleSubmit(submit)}
        className="w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 space-y-6"
      >
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="w-full mb-4">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
              required
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            {...register('message')}
            rows={6}
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Write your message here"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default GetInTouch;
