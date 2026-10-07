import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#4da6ff',
    borderRadius: 6,
    color: "white"
  },
});

// Função para formatar em reais
function formatCurrency(text) {
  // Remove tudo que não é número
  const numeric = text.replace(/\D/g, "");

  if (!numeric) return "";

  // Converte para número e divide por 100 para ter centavos
  const number = parseFloat(numeric) / 100;

  // Usa Intl para formatar em reais
  return number.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function InputText({textImput = "", onChange}) {
  return (
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          onChangeText={(text) => onChange(formatCurrency(text))}
          value={textImput}
        />
  );
}

