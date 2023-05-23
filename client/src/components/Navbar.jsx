import { Link } from 'react-router-dom';
import images from '../assets';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const baseUrl = 'http://localhost:5000/';

const Navbar = () => {

  const cartItemCount = 5; // Quantidade de itens no carrinho (exemplo)

  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({});
  const [token, setToken] = useState('');
  const [imagem, setImagem] = useState('');
  const [papel, setPapel] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setToken(token);
    }

    const getUsuario = async () => {
      try {
        const response = await axios.get(`${baseUrl}admin/usuario`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response.data.admin.papel);
        setPapel(response.data.admin.papel);
        setUsuario(response.data);
        setImagem(response.data.foto);
      } catch (error) {
        toast.error('Erro ao buscar usuário!');
      }
    }

    getUsuario();
  }, [token]);

  return (
    <>
      <nav className="bg-[#10002b] text-white fixed w-full z-10">
        <div className="container mx-auto flex items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold">Minha Loja</Link>

          <div className="flex items-center">
            <Link to="/" className="mr-6">Home</Link>
            <Link to="/produtos" className="mr-6">Produtos</Link>
            {
              papel === 'admin' && (
                <Link to="/dashboard" className="mr-6">Dashboard</Link>
              )
            }
            <Link to="/carrinho" className="relative">
              <img
                src={images.cart}
                alt="Carrinho de Compras"
                className="w-8"
              />
              {cartItemCount > 0 && (
                <span className="bg-red-500 text-white absolute -top-2 -right-2 h-4 w-4 flex items-center justify-center rounded-full text-xs">
                  {cartItemCount}
                </span>
              )}
            </Link>
            {
              usuario ? (
                <div className="relative ml-6">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center focus:outline-none"
                  >
                    <img
                      src={imagem}
                      alt={usuario.nome}
                      className="object-cover w-10 h-10 rounded-full"
                    />
                    <span className="ml-2">{usuario.nome}</span>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
                      <Link to={`/perfil`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Perfil
                      </Link>
                      <button
                        onClick={logout}
                        className="block px-4 py-2 text-sm text-red-500 hover:text-red-700"
                      >
                        Sair
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link to="/login" className="ml-6">Login</Link>
                  <Link to="/cadastro" className="ml-6">Cadastro</Link>
                </>
              )
            }
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;