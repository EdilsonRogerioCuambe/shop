import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import images from '../assets';

const baseUrl = 'http://localhost:5000/admin/cadastro';

const Cadastro = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [foto, setFoto] = useState('');
  const [previewFoto, setPreviewFoto] = useState('');

  useEffect(() => {
    const fotoUrl = foto ? URL.createObjectURL(foto) : null;
    setPreviewFoto(fotoUrl);
  }, [foto]);

  const onSubmit = async (data) => {
    const formData = new FormData();

    if (!foto) {
      return toast.error('Foto é obrigatório');
    }

    if (data.senha.length < 6) {
      return toast.error('Senha deve ter no mínimo 6 caracteres');
    } else if (data.senha !== data.confirmar_senha) {
      return toast.error('Senhas não coincidem');
    }

    formData.append('foto', foto);
    formData.append('nome', data.nome);
    formData.append('bi', data.bi);
    formData.append('data_nascimento', data.data_nascimento);
    formData.append('email', data.email);
    formData.append('bairro', data.bairro);
    formData.append('cidade', data.cidade);
    formData.append('pais', data.pais);
    formData.append('provincia', data.provincia);
    formData.append('codigo_postal', data.codigo_postal);
    formData.append('rua', data.rua);
    formData.append('telefone', data.telefone);
    formData.append('sexo', data.sexo);
    formData.append('senha', data.senha);
    formData.append('numero_casa', data.numero_casa);

    try {
      const response = await axios.post(baseUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      localStorage.setItem('token', response.data.token);

      const { message } = response.data;
      toast.success(message);
      navigate('/');
    } catch (error) {
      const { message } = error.response.data;
      toast.error(message);
    }
  }

  return (
    <>
      <div className="min-h-screen p-6 bg-[#10002b] flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-bold uppercase text-2xl text-white ">Cadastro</h2>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Detalhes Pessoas</p>
                  <p>Por favor, preencha os campos abaixo.</p>
                </div>

                <div className="lg:col-span-2">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">

                      <div className="lg:col-span-5">

                        <div className='flex items-center justify-center w-full mb-4'>
                          {
                            previewFoto ? (
                              <img src={previewFoto} alt='Foto' className='w-40 h-40 rounded-full mx-auto object-cover' />
                            ) : (
                              <img src={images.man} alt='Foto' className='w-40 h-40 rounded-full mx-auto' />
                            )
                          }
                        </div>

                        <div className="flex items-center justify-center w-full">
                          <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-purple-300 border-dashed rounded-lg cursor-pointer bg-purple-50 dark:hover:bg-bray-800 hover:bg-purple-100">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <svg aria-hidden="true" className="w-10 h-10 mb-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                              <p className="mb-2 text-sm text-purple-500"><span className="font-semibold">Clique para fazer o upload</span> ou carregue uma imagem arrastando e soltando</p>
                              <p className="text-xs text-purple-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input
                              id="dropzone-file"
                              type="file"
                              className="hidden"
                              onChange={(event) => setFoto(event.target.files[0])}
                            />
                          </label>
                        </div>
                      </div>

                      <div className="md:col-span-5">
                        <label for="nome">Nome Completo</label>
                        <input
                          type="text"
                          name="nome"
                          id="nome"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          {...register('nome', { required: true })}
                          placeholder='Nome completo'
                        />
                        {
                          errors.nome && <span className='text-red-500'>Campo obrigatório</span>
                        }
                      </div>

                      <div className="md:col-span-3">
                        <label for="bi">BI</label>
                        <input
                          type="text"
                          name="bi"
                          id="bi"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          {...register('bi', { required: true })}
                          placeholder='Número do BI'
                        />
                        {
                          errors.bi && <span className='text-red-500'>Campo obrigatório</span>
                        }
                      </div>

                      <div className="md:col-span-2">
                        <label for="data_nascimento">Data de nascimento</label>
                        <input
                          type="date"
                          name="data_nascimento"
                          id="data_nascimento"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          {...register('data_nascimento', { required: true })}
                          placeholder='Data de nascimento'
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label for="email">Email</label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="email@domain.com"
                          {...register('email', { required: true })}
                        />
                      </div>

                      <div>
                        <label htmlFor="numero_casa">
                          Número da casa
                        </label>
                        <input
                          type="number"
                          name="numero_casa"
                          id="numero_casa"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Ex: 1234"
                          {...register('numero_casa', { required: true })}
                        />
                        {
                          errors.numero_casa && <span className='text-red-500'>Campo obrigatório</span>
                        }
                      </div>

                      <div className="md:col-span-3">
                        <label for="bairro">Bairro</label>
                        <input
                          type="text"
                          name="bairro"
                          id="bairro"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Bairro"
                          {...register('bairro', { required: true })}
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label for="cidade">Cidade</label>
                        <input
                          type="text"
                          name="cidade"
                          id="cidade"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Cidade"
                          {...register('cidade', { required: true })}
                        />
                        {
                          errors.cidade && <span className='text-red-500'>Campo obrigatório</span>
                        }
                      </div>

                      <div className="md:col-span-2">
                        <label for="pais">Pais</label>
                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            name="pais"
                            id="pais"
                            placeholder="País"
                            className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            {...register('pais', { required: true })}
                          />
                          {
                            errors.pais && <span className='text-red-500'>Campo obrigatório</span>
                          }
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <label for="provincia">Provincia</label>
                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            name="provincia"
                            id="provincia"
                            placeholder="Provincia"
                            className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            {...register('provincia', { required: true })}
                          />
                          {
                            errors.provincia && <span className='text-red-500'>Campo obrigatório</span>
                          }
                        </div>
                      </div>

                      <div className="md:col-span-1">
                        <label for="codigo_postal">Codigo postal</label>
                        <input
                          type="text"
                          name="codigo_postal"
                          id="codigo_postal"
                          className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Ex: 1234"
                          {...register('codigo_postal', { required: true })}
                        />
                        {
                          errors.codigo_postal && <span className='text-red-500'>Campo obrigatório</span>
                        }
                      </div>

                      <div className='md:col-span-2'>
                        <label for="rua">Rua</label>
                        <input
                          type="text"
                          name="rua"
                          id="rua"
                          className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Rua"
                          {...register('rua', { required: true })}
                        />
                        {
                          errors.rua && <span className='text-red-500'>Campo obrigatório</span>
                        }
                      </div>

                      <div className="md:col-span-2">
                        <label for="telefone">Telefone</label>
                        <input
                          type="number"
                          name="telefone"
                          id="telefone"
                          className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Ex: 848484848"
                          {...register('telefone', { required: true })}
                        />
                        {
                          errors.telefone && <span className='text-red-500'>Campo obrigatório</span>
                        }
                      </div>

                      <div className='md:col-span-2'>
                        <label htmlFor="sexo" className='block text-sm font-medium text-gray-700'>
                          Sexo
                        </label>
                        <select
                          {...register('sexo', { required: true })}
                          name="sexo" id="sexo" className='mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-gray-50'>
                          <option value="masculino">Masculino</option>
                          <option value="feminino">Feminino</option>
                        </select>
                        {
                          errors.sexo && <span className='text-red-500'>Campo obrigatório</span>
                        }
                      </div>

                      <div className='md:col-span-2'>
                        <label for="senha">Senha</label>
                        <input
                          {...register('senha', { required: true })}
                          type="password" name="senha" id="senha" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="*********"
                        />
                        {
                          errors.senha && <span className='text-red-500'>Campo obrigatório</span>
                        }
                      </div>

                      <div className='md:col-span-2'>
                        <label for="confirmar_senha">Confirmar Senha</label>
                        <input
                          {...register('confirmar_senha', { required: true })}
                          type="password" name="confirmar_senha" id="confirmar_senha" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="*********"
                        />
                        {
                          errors.confirmar_senha && <span className='text-red-500'>Campo obrigatório</span>
                        }
                      </div>

                      <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                          <button type='submit' className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Cadastrar</button>
                        </div>
                      </div>

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cadastro