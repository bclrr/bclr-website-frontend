import { useForm } from "react-hook-form";
import type { SignUpDto } from "../dto";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { signUp } from "../services/api";

export function SignUp() {

  const naviguate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignUpDto>();

  const onSubmit = async (data: SignUpDto) => {
    try {
      await signUp(data);
      naviguate('/');
    } catch (e) {
      if (axios.isAxiosError(e)) {
        setError("root", { message: "Identifiants invalide" })
      }
    }
  }

  const inputClass = "px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full border border-slate-300 focus:outline-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-700 dark:border-neutral-600"
  const labelClass = "mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50"
  
  return (
    <main className="bg-gray-50 px-4 md:px-8 dark:bg-neutral-900">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-md w-full">
          <div className="p-6 rounded-lg bg-white border border-slate-300 shadow-xs md:p-8 dark:bg-neutral-800 dark:border-neutral-700">
            <h1 className="text-slate-900 text-center text-3xl font-bold dark:text-slate-50">Créer un compte</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-10">
              <div>
                <label htmlFor="username" className={labelClass}>Nom d'utilisateur</label>
                <input id="username" type="text" {...register("username", { required: true})} className={inputClass}/>
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>Email</label>
                <input id="email" type="email" {...register("email", { required: true})} className={inputClass}/>
              </div>
              <div>
                <label htmlFor="password" className={labelClass}>Mot de passe</label>
                <input id="password" type="password" {...register("password", { required: true})} className={inputClass}/>
              </div>
              {errors.root && (
                <p className="text-red-500 text-sm">{errors.root.message}</p>
              )}
              <button
                  type="submit"
                  className="w-full py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                  Créer un compte
              </button>
              <div className="text-slate-900 text-sm text-center dark:text-slate-50">
                Déjà un compte ?
                <Link
                  to="/auth/login"
                  className="text-blue-700 hover:underline ml-1 font-medium dark:text-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                  Se connecter
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}