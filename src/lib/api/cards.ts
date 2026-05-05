// ─── Card Supplier API Service ─────────────────────────────────────────
// Maps to the Apifox card-supplier-api-en endpoints.
// All endpoints require RSA signing on the backend side.

import type { Card, CardProduct, CardApplyResponse, Transaction, PaginatedResponse } from '@/lib/types/dashboard';

const MOCK_PRODUCTS: CardProduct[] = [
  { id: 1, bankCardNature: 'VIRTUAL', title: 'CardsFlow Onyx Virtual', ccy: 'USD', applyFee: '5.00', cardBin: '409600', rechargeFee: '0.00', bankcardRegion: 'US', activeMinLimit: '0.00', rechargeMinLimit: '10.00', binType: 'onyx', supportsApplePay: true, supportsGooglePay: true },
  { id: 2, bankCardNature: 'PHYSICAL', title: 'CardsFlow Onyx Physical', ccy: 'USD', applyFee: '50.00', cardBin: '409600', rechargeFee: '0.00', bankcardRegion: 'US', activeMinLimit: '0.00', rechargeMinLimit: '10.00', binType: 'onyx', supportsApplePay: true, supportsGooglePay: true },
  { id: 3, bankCardNature: 'VIRTUAL', title: 'CardsFlow Volt Virtual', ccy: 'USD', applyFee: '5.00', cardBin: '523400', rechargeFee: '0.00', bankcardRegion: 'EU', activeMinLimit: '0.00', rechargeMinLimit: '10.00', binType: 'volt', supportsApplePay: false, supportsGooglePay: true },
  { id: 4, bankCardNature: 'PHYSICAL', title: 'CardsFlow Volt Physical', ccy: 'USD', applyFee: '50.00', cardBin: '523400', rechargeFee: '0.00', bankcardRegion: 'EU', activeMinLimit: '0.00', rechargeMinLimit: '10.00', binType: 'volt', supportsApplePay: false, supportsGooglePay: true },
];

const MOCK_CARDS: Card[] = [
  { userBankcardId: 101, cardNo: '4096 0012 3456 7890', bankCardNature: 'VIRTUAL', status: 'active', balance: '1250.00', ccy: 'USD', cardBin: '409600', binType: 'onyx', expiryDate: '12/28', cvv: '123', cardholderName: 'JOHN DOE', supportsApplePay: true, supportsGooglePay: true },
  { userBankcardId: 102, cardNo: '5234 0098 7654 3210', bankCardNature: 'PHYSICAL', status: 'inactive', balance: '0.00', ccy: 'USD', cardBin: '523400', binType: 'volt', expiryDate: '10/27', cvv: '456', cardholderName: 'JOHN DOE', supportsApplePay: false, supportsGooglePay: true },
];

const MOCK_TRANSACTIONS: Transaction[] = [
  { id: 'tx_1', cardId: 101, cardLastFour: '7890', amount: '12.50', currency: 'USD', merchant: 'Netflix', date: '2023-10-01', status: 'completed', type: 'purchase' },
  { id: 'tx_2', cardId: 101, cardLastFour: '7890', amount: '100.00', currency: 'USD', merchant: 'Top-up', date: '2023-09-28', status: 'completed', type: 'topup' },
];

export const cardsService = {
  async getCardProducts(): Promise<CardProduct[]> {
    return MOCK_PRODUCTS;
  },
  async getUserCards(): Promise<Card[]> {
    return MOCK_CARDS;
  },
  async applyCard(productId: number, deliveryAddressId?: number): Promise<CardApplyResponse> {
    const product = MOCK_PRODUCTS.find(p => p.id === productId);
    if (!product) throw new Error('Product not found');

    const newCard: Card = {
      userBankcardId: Math.floor(Math.random() * 10000) + 200,
      cardNo: `${product.cardBin} ${Math.floor(Math.random() * 9000 + 1000)} ${Math.floor(Math.random() * 9000 + 1000)} ${Math.floor(Math.random() * 9000 + 1000)}`,
      bankCardNature: product.bankCardNature,
      status: product.bankCardNature === 'PHYSICAL' ? 'inactive' : 'active',
      balance: '0.00',
      ccy: product.ccy,
      cardBin: product.cardBin,
      binType: product.binType,
      expiryDate: `12/${new Date().getFullYear() + 3 - 2000}`,
      cvv: Math.floor(Math.random() * 900 + 100).toString(),
      cardholderName: 'NEW USER',
      supportsApplePay: product.supportsApplePay,
      supportsGooglePay: product.supportsGooglePay,
    };

    MOCK_CARDS.push(newCard);
    
    return { success: true, message: 'Card applied successfully' };
  },
  async activateCard(userBankcardId: number): Promise<void> {
    const card = MOCK_CARDS.find(c => c.userBankcardId === userBankcardId);
    if (card) card.status = 'active';
  },
  async getCardInfo(userBankcardId: number): Promise<Card> {
    const card = MOCK_CARDS.find(c => c.userBankcardId === userBankcardId);
    if (!card) throw new Error('Card not found');
    return card;
  },
  async getCardBalance(userBankcardId: number): Promise<{ balance: string; ccy: string }> {
    const card = MOCK_CARDS.find(c => c.userBankcardId === userBankcardId);
    return { balance: card?.balance || '0.00', ccy: card?.ccy || 'USD' };
  },
  async setPin(userBankcardId: number, pin: string): Promise<void> {
    // Mock success
  },
  async getPin(userBankcardId: number): Promise<{ pin: string }> {
    return { pin: '1234' };
  },
  async topUpCard(userBankcardId: number, amount: number): Promise<void> {
    const card = MOCK_CARDS.find(c => c.userBankcardId === userBankcardId);
    if (card) card.balance = (parseFloat(card.balance) + amount).toFixed(2);
  },
  async unloadCard(userBankcardId: number, amount: number): Promise<void> {
    const card = MOCK_CARDS.find(c => c.userBankcardId === userBankcardId);
    if (card) card.balance = (parseFloat(card.balance) - amount).toFixed(2);
  },
  async updateCardStatus(userBankcardId: number, status: 'active' | 'frozen'): Promise<void> {
    const card = MOCK_CARDS.find(c => c.userBankcardId === userBankcardId);
    if (card) card.status = status;
  },
  async cancelCard(userBankcardId: number): Promise<void> {
    const card = MOCK_CARDS.find(c => c.userBankcardId === userBankcardId);
    if (card) card.status = 'cancelled';
  },
  async updateCardEmail(userBankcardId: number, email: string): Promise<void> {
    // Mock success
  },
  async getTransactions(userBankcardId: number, page: number = 1, size: number = 20): Promise<PaginatedResponse<Transaction>> {
    const items = MOCK_TRANSACTIONS.filter(t => t.cardId === userBankcardId);
    return { items, total: items.length, page, pageSize: size, totalPages: 1 };
  },
  async getTransactionDetail(transactionId: string): Promise<Transaction> {
    const tx = MOCK_TRANSACTIONS.find(t => t.id === transactionId);
    if (!tx) throw new Error('Transaction not found');
    return tx;
  },
  async approve3DS(transactionId: string): Promise<void> {
    // Mock success
  },
  async deny3DS(transactionId: string): Promise<void> {
    // Mock success
  },
};

export default cardsService;
