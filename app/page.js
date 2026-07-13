const demoAccounts = [
  { name: "Master", broker: "Exness", balance: 25000, equity: 25040, today: 40, floating: 40, trades: 1, status: "متصل" },
  { name: "Funding 01", broker: "FTG", balance: 10000, equity: 9988, today: -12, floating: -12, trades: 1, status: "متصل" }
];

const money = n => new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(n);

export default function Home() {
  const totalBalance = demoAccounts.reduce((s,a)=>s+a.balance,0);
  const totalEquity = demoAccounts.reduce((s,a)=>s+a.equity,0);
  const totalToday = demoAccounts.reduce((s,a)=>s+a.today,0);
  const totalTrades = demoAccounts.reduce((s,a)=>s+a.trades,0);

  return (
    <main>
      <h1>لوحة حسابات أصيل</h1>
      <p className="sub">نسخة أولى جاهزة — سنربط بيانات MT5 بعدها</p>

      <section className="summary">
        <div className="card"><span>إجمالي الرصيد</span><strong>{money(totalBalance)}</strong></div>
        <div className="card"><span>إجمالي الإيكويتي</span><strong>{money(totalEquity)}</strong></div>
        <div className="card"><span>نتيجة اليوم</span><strong className={totalToday>=0?"pos":"neg"}>{money(totalToday)}</strong></div>
        <div className="card"><span>الصفقات المفتوحة</span><strong>{totalTrades}</strong></div>
      </section>

      <section className="card tableWrap">
        <table>
          <thead><tr><th>الحساب</th><th>الشركة</th><th>Balance</th><th>Equity</th><th>العائم</th><th>ربح اليوم</th><th>الصفقات</th><th>الحالة</th></tr></thead>
          <tbody>
            {demoAccounts.map((a,i)=>(
              <tr key={i}>
                <td><b>{a.name}</b></td><td>{a.broker}</td><td>{money(a.balance)}</td><td>{money(a.equity)}</td>
                <td className={a.floating>=0?"pos":"neg"}>{money(a.floating)}</td>
                <td className={a.today>=0?"pos":"neg"}>{money(a.today)}</td>
                <td>{a.trades}</td><td><span className="status"><i></i>{a.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
