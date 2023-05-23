import Admin from "../models/admin.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import path from 'path';
import fs from 'fs';

const __dirname = path.resolve();

export const registrarAdmin = async (req, res) => {
  const { nome, email, sexo, bi, bairro, telefone, rua, numero_casa, senha, data_nascimento, pais, provincia, codigo_postal } = req.body;

  const foto = req.file.filename;

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array(), message: "Erro de validação nos dados enviados." });
    }

    const adminJaExiste = await Admin.findOne({ email });
    if (adminJaExiste) {
      return res.status(400).json({ message: "Já existe um administrador com este email." });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const admin = await Admin.create({
      nome,
      pais,
      email,
      provincia,
      sexo,
      bi,
      bairro,
      telefone,
      rua,
      numero_casa,
      senha: senhaCriptografada,
      foto,
      data_nascimento,
      codigo_postal
    });

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res.status(201).json({
      admin,
      token
    });
  } catch (error) {
    return res.status(500).json({
      message: "Não foi possível criar o administrador.",
      error: error.message,
    });
  }
};

export const loginAdmin = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(400).json({ message: "Não existe um administrador com este email." });
    }

    const senhaValida = await bcrypt.compare(senha, admin.senha);

    if (!senhaValida) {
      return res.status(400).json({ message: "Senha incorreta." });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res.status(200).json({
      admin,
      token
    });
  } catch (error) {
    return res.status(500).json({ message: "Não foi possível fazer o login." });
  }
};

export const getAdmin = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const admin = await Admin.findById(decoded.id);

    if (!admin) {
      return res.status(404).json({ message: "Não foi possível encontrar o administrador." });
    }

    const imagemConvertida = fs.readFileSync(path.join(__dirname, `./uploads/${admin.foto}`), { encoding: 'base64' });
    const foto = `data:image/png;base64,${imagemConvertida}`;

    return res.status(200).json({
      admin,
      foto
    });
  } catch (error) {
    return res.status(500).json({
      message: "Não foi possível encontrar o administrador.",
      error: error.message,
    });
  }
}

export const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();

    if (!admins) {
      return res.status(404).json({ message: "Não foi possível encontrar os administradores." });
    }

    return res.status(200).json(admins);
  } catch (error) {
    return res.status(500).json({ message: "Não foi possível encontrar os administradores." });
  }
}

export const atualizarAdmin = async (req, res) => {
  const { id } = req.params;
  const { nome, email, bairro, sexo, telefone, rua, numero_casa, senha, foto, data_nascimento, data_criacao } = req.body;

  try {
    const admin = await Admin.findById(id);

    if (!admin) {
      return res.status(404).json({ message: "Não foi possível encontrar o administrador." });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const adminAtualizado = await Admin.findByIdAndUpdate(id, {
      nome,
      email,
      bairro,
      telefone,
      rua,
      numero_casa,
      senha: senhaCriptografada,
      foto,
      data_nascimento,
      data_criacao,
      sexo,
    }, { new: true });

    return res.status(200).json(adminAtualizado);
  } catch (error) {
    return res.status(500).json({ message: "Não foi possível atualizar o administrador." });
  }
}

export const deletarAdmin = async (req, res) => {
  const { id } = req.params;

  try {
    const admin = await Admin.findById(id);

    if (!admin) {
      return res.status(404).json({ message: "Não foi possível encontrar o administrador." });
    }

    await Admin.findByIdAndDelete(id);

    return res.status(200).json({ message: "Administrador deletado com sucesso." });
  } catch (error) {
    return res.status(500).json({ message: "Não foi possível deletar o administrador." });
  }
}
