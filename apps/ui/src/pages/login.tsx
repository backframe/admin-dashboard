import { FormField } from "@/components/base/FormField";
import { BfLogo } from "@/components/shared/BfLogo";
import { IconArrowRight } from "@tabler/icons";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="relative w-full flex min-h-[100vh] text-slate-900 bg-slate-200/40">
      <section className="mx-auto flex flex-col gap-3 justify-center text-center w-[90%] md:w-[50%] lg:w-[30%]">
        <Link
          to="/"
          className="flex items-center justify-center w-full scale-75"
        >
          <BfLogo size={300} />
        </Link>
        <h1 className="text-slate-500 text-xl">Sign in to your account</h1>

        <form className="bg-white  ring-black ring-opacity-5 shadow-sm mx-auto rounded-md my-5 p-6 pb-10 px-8 w-full">
          <FormField name="email" label="Email" />
          <FormField name="password" label="Password" type="password" />
          <div className="flex text-sm -mt-3 justify-between mb-5">
            <Link to="/login" className="text-teal-500">
              Forgot password
            </Link>
          </div>
          <button
            type="submit"
            className="group btn w-full bg-teal-600 text-white py-3 inline-flex gap-2 items-center justify-center rounded-md hover:opacity-80"
          >
            <span>Sign in</span>
            <IconArrowRight
              size={20}
              className="group-hover:translate-x-2 transition-all duration-200"
            />
          </button>
        </form>
      </section>
    </main>
  );
}
