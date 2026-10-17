# Motion4Frames

Nettsiden til motion4frames.no (Next.js + Tailwind).

## Endre innhold

All tekst, alle bilder og videoer på forsiden ligger i `src/lib/content.ts`.
Bilder og videoer ligger i `public/media/`.

- `showPendingLabels` i `content.ts`: sett til `false` for å skjule «AVVENTER»-merkene.
- Merkelapper på prosjekter: `"Kundeoppdrag"`, `"Eget konsept"` eller `"AI-konsept"`.

## Kjøre lokalt

```bash
npm install
npm run dev
```

Kontaktskjemaet trenger `RESEND_API_KEY`, `CALL_REQUEST_TO` og `CALL_REQUEST_FROM` i `.env.local`.

## Sider

- `/` forside
- `/finn` enkel FINN-side (skal utvides)
- `/personvern` personvern
