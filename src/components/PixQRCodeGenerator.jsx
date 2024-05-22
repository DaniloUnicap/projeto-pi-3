// src/components/PixQRCodeGenerator.js
import React, { useState } from 'react';
import QRCode from 'qrcode.react';

// Função para calcular o CRC16-CCITT-FALSE
const crc16 = (str) => {
  let crc = 0xFFFF;
  for (let c of str) {
    crc ^= c.charCodeAt(0) << 8;
    for (let j = 0; j < 8; j++) {
      if ((crc & 0x8000) !== 0) crc = (crc << 1) ^ 0x1021;
      else crc = crc << 1;
    }
  }
  return (crc & 0xFFFF).toString(16).toUpperCase().padStart(4, '0');
};

// Função para gerar o payload do QR Code PIX
const generatePixPayload = ({ pixKey, description, merchantName, merchantCity, txid, amount }) => {
  const pad = (value, length) => value.toString().padStart(length, '0');

  const payloadFormatIndicator = '00' + pad(2, 2) + '01';
  const pointOfInitiationMethod = amount ? '01' + pad(2, 2) + '12' : '';
  const merchantAccountInformation = '26' + pad(14 + pixKey.length, 2) +
    '00' + pad(14, 2) + 'BR.GOV.BCB.PIX' +
    '01' + pad(pixKey.length, 2) + pixKey;
  const merchantCategoryCode = '52' + pad(4, 2) + '0000';
  const transactionCurrency = '53' + pad(3, 2) + '986';
  const transactionAmount = amount ? '54' + pad(amount.length, 2) + amount : '';
  const countryCode = '58' + pad(2, 2) + 'BR';
  const merchantNameField = '59' + pad(merchantName.length, 2) + merchantName;
  const merchantCityField = '60' + pad(merchantCity.length, 2) + merchantCity;
  const additionalDataFieldTemplate = txid ? '62' + pad(4 + txid.length, 2) + '05' + pad(txid.length, 2) + txid : '';

  const fullPayload = [
    payloadFormatIndicator,
    pointOfInitiationMethod,
    merchantAccountInformation,
    merchantCategoryCode,
    transactionCurrency,
    transactionAmount,
    countryCode,
    merchantNameField,
    merchantCityField,
    additionalDataFieldTemplate,
    '6304' // Placeholder for CRC
  ].join('');

  const crc = crc16(fullPayload);
  return fullPayload + crc;
};

const PixQRCodeGenerator = () => {
  const [amount, setAmount] = useState('');
  const [pixCode, setPixCode] = useState('');

  const handleGenerateQRCode = () => {
    const pixData = {
      pixKey: '', // Substitua pela sua chave PIX
      description: 'Descrição do pagamento',
      merchantName: '', // Nome do recebedor
      merchantCity: '', // Cidade do recebedor
      txid: 'TXID1234', // ID da transação (opcional)
      amount: parseFloat(amount).toFixed(2).toString(), // Valor do pagamento
    };

    const code = generatePixPayload(pixData);
    setPixCode(code);
  };

  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-center text-lg font-bold'>Colabore aqui</h1>
      <input
        type="number"
        placeholder="Valor do PIX"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className='bg-[#242125] outline-none py-1 px-2 rounded-md'
      />
      <button onClick={handleGenerateQRCode} className='bg-sky-600 rounded-md py-1'>Gerar QR Code</button>
      {pixCode && (
        <div>
          <QRCode value={pixCode} size={256} />
        </div>
      )}
    </div>
  );
};

export default PixQRCodeGenerator;
