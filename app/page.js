"use client";

import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const tips = [
    { date: "2025-04-24", match: "Barcelona vs Real", tip: "Over 2.5 goals", odds: "1.85" },
    { date: "2025-04-25", match: "Man City vs Arsenal", tip: "Both Teams To Score", odds: "1.70" },
    { date: "2025-04-26", match: "Juventus vs Milan", tip: "Under 2.5 goals", odds: "2.00" }
  ];

  return (
    <main className="p-4 max-w-4xl mx-auto">
      <section className="text-center space-y-4 my-10">
        <h1 className="text-4xl font-bold">AI Typy Bukmacherskie</h1>
        <p className="text-lg">Oparte na analizie danych i algorytmach sztucznej inteligencji</p>
        <Button>Zacznij teraz</Button>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold mb-4">Dzisiejsze Typy</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {tips.map((tip, index) => (
            <Card key={index}>
              <CardContent className="p-4 space-y-2">
                <h3 className="text-lg font-bold">{tip.match}</h3>
                <p>Data: {tip.date}</p>
                <p>Typ: {tip.tip}</p>
                <p>Kurs: {tip.odds}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="my-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Plany Subskrypcji</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">Basic</h3>
              <p>3 typy dziennie</p>
              <p className="my-2 font-semibold">49 zł / miesiąc</p>
              <Button>Wybierz</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">Premium</h3>
              <p>5 typów dziennie + VIP</p>
              <p className="my-2 font-semibold">89 zł / miesiąc</p>
              <Button>Wybierz</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="my-10 max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Kontakt</h2>
        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Twój e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Wiadomość"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button>Wyślij</Button>
        </div>
      </section>
    </main>
  );
}
