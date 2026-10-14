"use client";
import { useState, createContext, useContext } from "react";
import { SETS, SHIPPING, FREE_SHIPPING_SETS, VAT_RATE, countPackages } from "@/lib/data";

const CartCtx = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [region, setRegion] = useState("AT");
  const add = (product, qty = 1) => {
    setItems(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + qty } : i);
      return [...prev, { ...product, qty }];
    });
  };
  const remove = (id) => setItems(prev => prev.filter(i => i.id !== id));
  const updateQty = (id, qty) => { if (qty < 1) return remove(id); setItems(prev => prev.map(i => i.id === id ? { ...i, qty } : i)); };
  const clear = () => setItems([]);
  const getPrice = (product) => region === "CH" ? (product.priceCH ?? product.priceAT) : product.priceAT;
  const total = items.reduce((s, i) => s + getPrice(i) * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);
  const setIds = SETS.map(s => s.id);
  const setCount = items.filter(i => setIds.includes(i.id)).reduce((s, i) => s + i.qty, 0);
  // Versandpauschale je Paket und Lieferland (brutto), ab FREE_SHIPPING_SETS Koffer-Sets versandkostenfrei.
  // Ersatzteile werden nach Stück je Paket (perPackage) auf Pakete verteilt, z.B. 50 Klammer-Doppelpacks ergeben 3 Pakete.
  const packages = countPackages(items);
  const shipping = items.length === 0 ? 0 : (setCount >= FREE_SHIPPING_SETS ? 0 : SHIPPING[region] * packages);
  // AT und DE: Preise inkl. 20% USt, die enthaltene USt wird ausgewiesen; Schweiz steuerfrei
  const vatRate = region === "CH" ? 0 : VAT_RATE;
  const grandTotal = total + shipping;
  const vat = grandTotal - grandTotal / (1 + vatRate);
  return <CartCtx.Provider value={{ items, add, remove, updateQty, clear, total, count, region, setRegion, getPrice, shipping, packages, setCount, freeShippingSets: FREE_SHIPPING_SETS, vatRate, vat, grandTotal }}>{children}</CartCtx.Provider>;
}

export function useCart() { return useContext(CartCtx); }
