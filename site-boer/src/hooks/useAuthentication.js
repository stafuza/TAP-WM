import { useState } from 'react';
import { auth } from '../firebase/connection'; // Importando auth do arquivo de configuração
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

// Hook personalizado para autenticação
export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Função para criar um novo usuário
  const createUser = async (data) => {
    setLoading(true);
    setError(null);

    try {
      // Criando usuário com email e senha
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      // Atualizando o perfil com o nome de exibição
      await updateProfile(user, {
        displayName: data.displayName,
      });

      setLoading(false);
      return user;
    } catch (error) {
      console.error(error.message);
      
      let systemErrorMessage;

      if (error.code === "auth/weak-password") {
        systemErrorMessage = "A senha precisa ter pelo menos 6 caracteres.";
      } else if (error.code === "auth/email-already-in-use") {
        systemErrorMessage = "E-mail já cadastrado.";
      } else if (error.code === "auth/invalid-email") {
        systemErrorMessage = "E-mail inválido.";
      } else {
        systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde.";
      }

      setError(systemErrorMessage);
      setLoading(false);
    }
  };

  return {
    auth,
    createUser,
    error,
    loading,
  };
};
