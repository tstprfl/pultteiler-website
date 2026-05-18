"use client";
import { useState, createContext, useContext } from "react";
import { SETS } from "@/lib/data";

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
  const hasSet = items.some(i => setIds.includes(i.id));
  const shipping = region === "CH" ? 0 : (hasSet ? 0 : 8.70);
  return <CartCtx.Provider value={{ items, add, remove, updateQty, clear, total, count, region, setRegion, getPrice, shipping }}>{children}</CartCtx.Provider>;
}

export function useCart() { return useContext(CartCtx); }
