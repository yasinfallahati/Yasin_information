export default function Sidebar({ items, lang, setLang, theme, setTheme }) {
  return (
    <aside className="sidebar">
      <nav>
        {items.map((item) => (
          <a href={`#${item.id}`} key={item.id} title={item.label}>
            <span>{item.icon}</span>
            <em>{item.label}</em>
          </a>
        ))}
      </nav>
      <div className="side-tools">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="Toggle theme"
          title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
        >
          {theme === 'dark' ? '☼' : '◐'}
        </button>
        <div className="language-switcher">
          {['fa', 'en', 'de'].map((code) => (
            <button
              className={lang === code ? 'active' : ''}
              key={code}
              onClick={() => setLang(code)}
            >
              {code}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
