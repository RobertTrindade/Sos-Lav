import { useState } from 'react';

// Hook personalizado para usar o Local Storage
function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // Função para obter o valor armazenado no Local Storage
  const getStoredValue = (): T => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error('Erro ao recuperar dados do Local Storage:', error);
      return initialValue;
    }
  };

  // Estado para armazenar o valor atual
  const [storedValue, setStoredValue] = useState<T>(getStoredValue);

  // Função para definir o valor no Local Storage e no estado
  const setValue = (value: T): void => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Erro ao salvar dados no Local Storage:', error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
