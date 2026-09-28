export default function PageIntro({ eyebrow, title, children }) {
  return (
    <section className="page-intro container">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      {children && <div className="page-intro__lede">{children}</div>}
    </section>
  );
}
