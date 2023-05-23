import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

const baseUrl = 'http://localhost:5000/admin/login';

const Login = () => {

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const { email, senha } = data;

    try {
      const response = await axios.post(baseUrl, {
        email,
        senha
      });

      const { token } = response.data;

      localStorage.setItem('token', token);

      navigate('/');

      toast.success('Login realizado com sucesso!');
    } catch (error) {
      toast.error('Email ou senha incorretos!');
    }
  }

  return (
    <>
      <section className="gradient-form h-screen bg-[#10002b]">
        <div className="container h-full p-10">
          <div
            className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-200">
            <div className="w-full">
              <div
                className="block rounded-lg bg-[#10002b]">
                <div className="g-0 lg:flex lg:flex-wrap mx-auto">
                  <div className="px-4 md:px-0 lg:w-6/12 mx-auto">
                    <div className="md:mx-6 md:p-12">
                      <div className="text-center">
                        <img
                          className="mx-auto w-48"
                          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          alt="logo" />
                        <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                          Bem-vindo de volta!
                        </h4>
                      </div>

                      <form onSubmit={handleSubmit(onSubmit)}>
                        <p className="mb-4">Por favor, faça login para continuar.</p>
                        <div className="relative mb-4" data-te-input-wrapper-init>
                          <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="email"
                            placeholder="Email"
                            autoComplete='off'
                            autoFocus
                            autoCorrect='off'
                            {...register('email', {
                              required: "Email é obrigatório",
                            })} />
                          {errors.email && <p className="text-danger-600">{errors.email.message}</p>}
                          <label
                            for="email"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-neutral-200 dark:peer-focus:text-primary"
                          >Email
                          </label>
                        </div>

                        <div className="relative mb-4" data-te-input-wrapper-init>
                          <input
                            type="password"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="senha"
                            placeholder="Senha"
                            autoComplete='off'
                            autoFocus
                            autoCorrect='off'
                            {...register('senha', {
                              required: "Senha é obrigatória",
                            })} />
                          {errors.senha && <p className="text-danger-600">{errors.senha.message}</p>}
                          <label
                            for="senha"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-neutral-200 dark:peer-focus:text-primary"
                          >Senha
                          </label>
                        </div>

                        <div className="mb-12 pb-1 pt-1 text-center">
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] hover:bg-opacity-90"
                            type="submit"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            style={{
                              background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"
                            }}
                          >
                            Entrar
                          </button>
                        </div>

                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">Não possui uma conta?</p>
                          <Link
                            to="/cadastro"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] dark:hover:text-danger-600"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            Cadastre-se
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login;